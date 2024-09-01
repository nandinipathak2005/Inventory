// generativeAI.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const YOUR_API_KEY = process.env.GEMINI_API_KEY;

if (!YOUR_API_KEY) {
  throw new Error('API key is missing. Please set the GEMINI_API_KEY environment variable.');
}

const genAI = new GoogleGenerativeAI(YOUR_API_KEY);

export const fetchRecipeSuggestions = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response; // Assuming response is already in text format
    return response.text ? await response.text() : response;
  } catch (error) {
    console.error('Error generating content:', error);
    return '';
  }
};
