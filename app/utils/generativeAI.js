import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the generative AI instance with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const fetchRecipeSuggestions = async (prompt) => {
  try {
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

export { fetchRecipeSuggestions };
