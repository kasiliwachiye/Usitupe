import { Router } from "express";
const router = Router();
import { string } from "joi";
import { getUserByEmail, addUser, getUsers } from "../store/users";
import validateWith from "../middleware/validation";

const schema = {
  name: string().required().min(2),
  email: string().email().required(),
  password: string().required().min(5),
};

router.post("/", validateWith(schema), (req, res) => {
  const { name, email, password } = req.body;
  if (getUserByEmail(email))
    return res
      .status(400)
      .send({ error: "A user with the given email already exists." });

  const user = { name, email, password };
  addUser(user);

  res.status(201).send(user);
});

router.get("/", (req, res) => {
  res.send(getUsers());
});

export default router;
