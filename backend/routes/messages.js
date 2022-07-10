import { Router } from "express";
const router = Router();
import { number, string } from "joi";
import { Expo } from "expo-server-sdk";

import { getUserById } from "../store/users";
import { getListing } from "../store/listings";
import { getMessagesForUser, add } from "../store/messages";
import sendPushNotification from "../utilities/pushNotifications";
import auth from "../middleware/auth";
import validateWith from "../middleware/validation";

const schema = {
  listingId: number().required(),
  message: string().required(),
};

router.get("/", auth, (req, res) => {
  const messages = getMessagesForUser(req.user.userId);

  const mapUser = (userId) => {
    const user = getUserById(userId);
    return { id: user.id, name: user.name };
  };

  const resources = messages.map((message) => ({
    id: message.id,
    listingId: message.listingId,
    dateTime: message.dateTime,
    content: message.content,
    fromUser: mapUser(message.fromUserId),
    toUser: mapUser(message.toUserId),
  }));

  res.send(resources);
});

router.post("/", [auth, validateWith(schema)], async (req, res) => {
  const { listingId, message } = req.body;

  const listing = getListing(listingId);
  if (!listing) return res.status(400).send({ error: "Invalid listingId." });

  const targetUser = getUserById(parseInt(listing.userId));
  if (!targetUser) return res.status(400).send({ error: "Invalid userId." });

  add({
    fromUserId: req.user.userId,
    toUserId: listing.userId,
    listingId,
    content: message,
  });

  const { expoPushToken } = targetUser;

  if (Expo.isExpoPushToken(expoPushToken))
    await sendPushNotification(expoPushToken, message);

  res.status(201).send();
});

export default router;
