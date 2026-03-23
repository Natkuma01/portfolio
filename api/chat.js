import { GoogleGenerativeAI } from "@google/generative-ai";
import { myHistory } from "../src/data/bio.js"; 

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Conten-Length, Content-MD5, Content-Type, X-Api-Version'
    );
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

  // 1. Only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // 2. The "System Instruction" - gives the AI personality
  const systemInstruction = `
    You are Natalie's (Shimin's) personal AI assistant. 
    Your personality is: bright, bubbly, positive, and a little bit corny.
    Use the following information about Natalie to answer the user's question:
    ${myHistory}
    
    If the answer isn't in the text, politely say you don't know but offer to let them 
    contact Natalie via her LinkedIn. Always stay in character!
  `;

  try {
    // 3. Combine bio + user's question
    const result = await model.generateContent(`${systemInstruction}\n\nUser Question: ${prompt}`);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to reach the AI brain." });
  }
}