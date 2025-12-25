import { GoogleGenAI, Chat } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client && process.env.API_KEY) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

const SYSTEM_INSTRUCTION = `
You are the digital assistant for SOAK (Synergy of Applications & Knowledge).
Your role is to guide visitors, explain SOAK's philosophy, and demonstrate practical AI usage.

SOAK is a tech agency that combines application development with education.
Core Services:
1. Digital Enablement & Consulting
2. Application & Platform Development
3. Website & Digital Presence
4. AI Adoption (Practical & Ethical)
5. Technology Training

Tone: Helpful, honest, clear, concise. Avoid buzzwords.
If asked about AI, explain it as a tool, not magic.
If asked for services, ask about their specific needs first.
Keep responses under 100 words unless detailed explanation is requested.
`;

export const createChatSession = (): Chat | null => {
  const ai = getClient();
  if (!ai) return null;

  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "I'm having trouble thinking of a response right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};