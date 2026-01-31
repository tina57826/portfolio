
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getArchitecturalInsight = async (projectTitle: string, description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `身為一位資深的建築評論家，請針對以下專案提供簡短的專業設計洞察（約100字）：
      專案名稱：${projectTitle}
      描述：${description}
      請著重於空間感、材料性與環境關係的分析。`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "無法生成洞察，請稍後再試。";
  }
};

export const chatWithAssistant = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "你是一位名為 'ArchGuide' 的專業建築導覽助手。你說話優雅、專業、且極簡。你會回答關於這個作品集裡面的專案、建築理論、或空間設計的問題。請始終保持繁體中文回答。",
      }
    });
    
    // In chat.sendMessage, we don't pass full history objects but the chat instance tracks it if initialized correctly.
    // For simplicity with this SDK, we call sendMessage on the created chat instance.
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "對不起，我現在無法回答您的問題。";
  }
};
