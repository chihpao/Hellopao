import OpenAI from "openai";
// 取得儲存在環境變數(.eng.local)的 OPENAI_API_KEY

export default new OpenAI({
    apiKey: "YOUR_OPENAI_API_KEY",
});