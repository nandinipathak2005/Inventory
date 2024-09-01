import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
console.log('API Key:', apiKey);  // Check if API key is loaded

const genAI = new GoogleGenerativeAI(apiKey);

export const fetchRecipeSuggestions = async (prompt) => {
  try {
    console.log('Prompt:', prompt);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log('Model:', model);
    
    const result = await model.generateContent(prompt);
    console.log('Result:', result);

    if (result && result.response) {
      const response = await result.response;
      const text = await response.text();
      console.log('Generated Text:', text);
      return text;
    } else {
      throw new Error('No response from API');
    }
  } catch (error) {
    console.error('Error generating content:', error);
    return '';
  }
};
