import { serialize } from "cookie";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { password } = req.body;

  if (password === process.env.POSTS_PASSWORD) {
    // set cookie for 1 day
    res.setHeader(
      "Set-Cookie",
      serialize("unlocked", "true", {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24,
      })
    );
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: "Invalid password" });
}
