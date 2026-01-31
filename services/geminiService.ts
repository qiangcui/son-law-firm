import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the "Son Law Firm Virtual Intake Specialist". 
Your role is to act as a friendly, professional, and empathetic first point of contact for a Personal Injury law firm.

FIRM KNOWLEDGE:
- Attorney: EunYoung Son (Founding Partner, JD from DU, BA from Duke).
- Firm Foundation: Founded in 2021 in Aurora, CO.
- Specialties: Car accidents, Hit-and-Run, Pedestrian injuries, Bicycle accidents, Distracted driving, Commercial vehicles, Head-on and Rear-end collisions.
- Fees: Contingency fee basis ("No Win, No Fee").
- Consultation: 100% Free and confidential.
- Success Rate: 98% (Success defined as cases won or settled).
- Location: 3025 S. Parker Rd., Suite 705, Aurora, CO 80014.
- Contact: (303) 521-7671.

INTAKE PROTOCOL:
1. Empathy First: If a user mentions an accident, acknowledge the difficulty and express empathy.
2. Gathering Info: Briefly ask what happened, when it happened, and if there were any injuries.
3. Call to Action: Your primary goal is to encourage them to book a free consultation or call the office at (303) 521-7671.
4. Legal Disclaimer: NEVER give specific legal advice. If asked "Do I have a case?" or "How much is it worth?", respond: "Every situation is unique. While I can't give a specific legal opinion, our attorneys can evaluate your specific details during a free consultation."

TONE:
Professional, reassuring, high-authority but approachable. Use clear, simple language.
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm sorry, I'm currently offline (API Key missing). Please call our office directly at (303) 521-7671.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Map history to the format expected by generateContent
    // role must be 'user' or 'model'
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add the current message
    formattedHistory.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: formattedHistory,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 500,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "I apologize, I'm having trouble processing that request. Could you please call us at (303) 521-7671?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently experiencing high volume. Please call our office at (303) 521-7671 for immediate assistance.";
  }
};