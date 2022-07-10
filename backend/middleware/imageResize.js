import sharp from "sharp";
import { resolve } from "path";
import { unlinkSync } from "fs";

const outputFolder = "public/assets";

export default async (req, res, next) => {
  const images = [];

  const resizePromises = req.files.map(async (file) => {
    await sharp(file.path)
      .resize(2000)
      .jpeg({ quality: 50 })
      .toFile(resolve(outputFolder, file.filename + "_full.jpg"));

    await sharp(file.path)
      .resize(100)
      .jpeg({ quality: 30 })
      .toFile(resolve(outputFolder, file.filename + "_thumb.jpg"));

    unlinkSync(file.path);

    images.push(file.filename);
  });

  await Promise.all([...resizePromises]);

  req.images = images;

  next();
};
