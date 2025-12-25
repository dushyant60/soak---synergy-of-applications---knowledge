// Minimal client wrapper that calls the Netlify function proxy.
// The Netlify function (/.netlify/functions/gemini) forwards requests to
// Google's Generative Language API using a private GEMINI_API_KEY.

export type Chat = { id: string } | null;

export const createChatSession = (): Chat => {
  // We return a lightweight session object. The real session is stateless
  // for this minimal proxy setup — the Netlify function will be responsible
  // for forwarding the request to Gemini.
  return { id: Date.now().toString() };
};

export const sendMessageToGemini = async (_chat: Chat, message: string): Promise<string> => {
  try {
    const payload = {
      // Keep the model name; the Netlify function will forward this body as-is.
      model: 'gemini-3-flash-preview',
      // We'll send a simple input structure. The Netlify function forwards
      // the body directly to the Google endpoint, so you can extend this
      // payload to match the API shape you prefer.
      input: [{ content: message }],
    };

    const res = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    // The Netlify function returns the raw API response text. Preferably
    // the response should be JSON; we'll attempt to parse it, falling back
    // to the raw text if parsing fails.
    try {
      const json = JSON.parse(text);
      // Attempt to extract a textual reply if present.
      if (json?.candidates && json.candidates[0]?.content) {
        return json.candidates[0].content[0]?.text || JSON.stringify(json);
      }
      if (json?.output?.[0]?.content?.[0]?.text) {
        return json.output[0].content[0].text;
      }
      return JSON.stringify(json);
    } catch (e) {
      return text;
    }
  } catch (error) {
    console.error('Gemini Proxy Error:', error);
    throw error;
  }
};