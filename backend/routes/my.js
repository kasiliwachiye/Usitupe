import { Router } from "express";
const router = Router();

import { filterListings } from "../store/listings";
import auth from "../middleware/auth";
import listingMapper from "../mappers/listings";

router.get("/listings", auth, (req, res) => {
  const listings = filterListings(
    (listing) => listing.userId === req.user.userId
  );
  const resources = listings.map(listingMapper);
  res.send(resources);
});

export default router;
