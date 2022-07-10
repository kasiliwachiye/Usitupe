import { Router } from "express";
const router = Router();
import { string } from "joi";
import { sign } from "jsonwebtoken";
import { getUserByEmail } from "../store/users";
import validateWith from "../middleware/validation";

const schema = {
  email: string().email().required(),
  password: string().required().min(5),
};

router.post("/", validateWith(schema), (req, res) => {
  const { email, password } = req.body;
  const user = getUserByEmail(email);
  if (!user || user.password !== password)
    return res.status(400).send({ error: "Invalid email or password." });

  const token = sign(
    { userId: user.id, name: user.name, email },
    "jwtPrivateKey"
  );
  res.send(token);
});

export default router;
