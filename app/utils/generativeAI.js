import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;


const genAI = new GoogleGenerativeAI(apiKey);

export const fetchRecipeSuggestions = async (prompt) => {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Generate content based on the prompt
    const result = await model.generateContent(prompt);
    
    // Extract and return the response text
    const response = await result.response;
    const text = await response.text();
    
    return text;
  } catch (error) {
    console.error('Error generating content:', error);
    return '';
  }
};
