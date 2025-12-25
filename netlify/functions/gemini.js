export default async (req) => {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=" +
      process.env.GEMINI_API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: req.body,
    }
  );

  return {
    statusCode: 200,
    body: await response.text(),
  };
};
