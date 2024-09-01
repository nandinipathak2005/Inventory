// generativeAI.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const YOUR_API_KEY=process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(YOUR_API_KEY);

export const fetchRecipeSuggestions = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error generating content:', error);
    return '';
  }
};
