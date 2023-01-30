import User from "../../models/user.js";
import dbConnect from '../../lib/dbConnect'

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { username, email, password } = req.body;

    const user = await User.create({ username, email, password });

    res.status(201).json({ user });
  }
}