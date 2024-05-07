import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
export async function POST(request) {
    // 取得前端傳來的資料
    const body = await request.json();
    console.log("body:", body);
    // const text = body.text;
    const { text } = body;
    const language = "日文";
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system", content: `你是一個${language}教師，你可根據特定主題聯想相關6個${language}相關單字，回應格式如下：
1. XXX (中文解釋)
2. OOO (中文解釋)
3. YYY (中文解釋)
...
` },
            { role: "user", content: `請根據以下主題聯想相關的${language}單字: ${text}` }
        ],
        model: "gpt-3.5-turbo"
    });
    console.log("AI的回應:", completion.choices[0].message.content);
    const aiMessageText = completion.choices[0].message.content;

    return Response.json({
        aiMessageText
    });
}