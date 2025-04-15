import { GoogleGenerativeAI } from "@google/generative-ai";
import { generatePrompt, generatePromptDetermine } from "./prompt";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Modelo Gemini
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * 
 * @param name 
 * @param history 
 */
const run = async (name: string, history: { role: string, content: string }[]): Promise<string> => {
    const prompt = generatePrompt(name);

    // Combinar el prompt del sistema con el historial
    const messages = [
        { role: "system", content: prompt },
        ...history
    ];

    // Convertir a formato compatible con Gemini (solo texto)
    const fullPrompt = messages.map(m => `${m.role}: ${m.content}`).join("\n");

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
};

const runDetermine = async (history: { role: string, content: string }[]): Promise<string> => {
    const prompt = generatePromptDetermine();

    const messages = [
        { role: "system", content: prompt },
        ...history
    ];

    const fullPrompt = messages.map(m => `${m.role}: ${m.content}`).join("\n");

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text() || "unknown";
};

export { run, runDetermine };
