import { Router } from "express";
const router = Router();
import { string, number, object } from "joi";
import multer from "multer";

import { getListings, addListing } from "../store/listings";
import { getCategory } from "../store/categories";
import validateWith from "../middleware/validation";
import auth from "../middleware/auth";
import imageResize from "../middleware/imageResize";
import delay from "../middleware/delay";
import listingMapper from "../mappers/listings";
import { get } from "config";

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
  title: string().required(),
  description: string().allow(""),
  price: number().required().min(1),
  categoryId: number().required().min(1),
  location: object({
    latitude: number().required(),
    longitude: number().required(),
  }).optional(),
};

const validateCategoryId = (req, res, next) => {
  if (!getCategory(parseInt(req.body.categoryId)))
    return res.status(400).send({ error: "Invalid categoryId." });

  next();
};

router.get("/", (req, res) => {
  const listings = getListings();
  const resources = listings.map(listingMapper);
  res.send(resources);
});

router.post(
  "/",
  [
    // Order of these middleware matters.
    // "upload" should come before other "validate" because we have to handle
    // multi-part form data. Once the upload middleware from multer applied,
    // request.body will be populated and we can validate it. This means
    // if the request is invalid, we'll end up with one or more image files
    // stored in the uploads folder. We'll need to clean up this folder
    // using a separate process.
    // auth,
    upload.array("images", get("maxImageCount")),
    validateWith(schema),
    validateCategoryId,
    imageResize,
  ],

  async (req, res) => {
    const listing = {
      title: req.body.title,
      price: parseFloat(req.body.price),
      categoryId: parseInt(req.body.categoryId),
      description: req.body.description,
    };

    listing.images = req.images.map((fileName) => ({ fileName: fileName }));
    if (req.body.location) listing.location = JSON.parse(req.body.location);
    if (req.user) listing.userId = req.user.userId;

    addListing(listing);

    res.status(201).send(listing);
  }
);

export default router;
