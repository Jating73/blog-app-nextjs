import { MongoClient } from "mongodb";

async function sendMessageHandler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !name ||
      !message ||
      !email.includes("@") ||
      name.trim() === "" ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Parameters",
      });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    const mongoUri =
      "mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.ief6bpf.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority";
    let client;

    try {
      client = await MongoClient.connect(mongoUri);
    } catch (error) {
      return res.status(500).json({
        message: "Unable to connect to database. Please try again",
      });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      return res.status(500).json({
        message: "Unable to save message. Please try again",
      });
    }

    return res.status(201).json({
      message: "Success",
      data: newMessage,
    });
  }
}

export default sendMessageHandler;
