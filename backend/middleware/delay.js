import { get } from "config";

export default async (req, res, next) => {
  setTimeout(() => next(), get("delay"));
};
