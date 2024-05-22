"use client";
import axios from "axios";
import { useState, useEffect } from 'react';
import { UserMessage, AIMessage , ErrorMessage} from '@/components/Message';

export default function ChatWithAI() {
    // 使用 useState 來定義 userMessageInput 狀態
    const [userMessageInput, setUserMessageInput] = useState("");
    // 使用 useState 來定義 messageList 狀態
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        // 每次 messageList 更新時
        // 取得聊天室元素
        const chatRoom = document.querySelector('.chat-room');
        // 將聊天室的捲軸拉到最底下
        chatRoom.scrollTop = chatRoom.scrollHeight;
    }, [messageList]);

    // 處理表單送出事件
    const handleSubmit = async (event) => {
        // 取消表單的預設送出會重新整理的行為
        event.preventDefault();
        const userMessage = {
            text: userMessageInput,
            createdBy: "user",
            createdAt: new Date().getTime()
        };
        // 將使用者說的話渲染到畫面上
        // setMessageList((prevState) => {
        //     // 函數 return 的值會是新狀態
        //     return [...prevState, userMessage]
        // });
        // 將使用者說的話渲染到畫面上
        setMessageList(prevState => [...prevState, userMessage]);
        // 清空使用者輸入框上的文字
        setUserMessageInput("");
        axios.post("/api/chat-ai", userMessage)
            .then(res => {
                console.log("成功獲得後端回應:", res);
                const aiMessage = {
                    text: res.data.aiMessageText,
                    createdBy: "ai",
                    createdAt: new Date().getTime()
                };
                // 將 AI 回應的話渲染到畫面上
                // setMessageList((prevState) => {
                //     return [...prevState, aiMessage]
                // });
                setMessageList(prevState => [...prevState, aiMessage]);
            })
            .catch(err => {
                console.log("失敗", err);
                const errorMessage = {
                    text: "嘿嘿嘿嘿嘿,你看不到我",
                    text: "嘿嘿嘿嘿嘿,才有鬼,西西西西西",
                    createdBy: "error",
                    createdAt: new Date().getTime()
                };
                setMessageList(prevState => [...prevState, errorMessage]);
            })
    }

    // 依據 messageList 產生對應的元件
    const messageListItems = messageList.map((message, index) => {
        if (message.createdBy === "user") {
            return <UserMessage message={message} key={index} />
        } else if (message.createdBy === "ai") {
            return <AIMessage message={message} key={index} />
        }else{
            return <ErrorMessage message={message} key={index} />
        }
    });
    return (
        <main className="flex flex-col bg-gradient-to-r from-slate-100 to-slate-200 h-screen pt-[56px]">
            <div className="chat-room w-full h-full flex-1 overflow-y-scroll">
                {messageListItems}
            </div>
            <form
                onSubmit={handleSubmit}
                className="chat-input-group w-full flex px-3 py-3"
            >
                <input
                    onChange={event => setUserMessageInput(event.target.value)}
                    value={userMessageInput}
                    placeholder="Type your message here..."
                    type="text"
                    className="block flex-1 border-2 border-slate-200 rounded-l-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                    required
                />
                <button type="submit" className="bg-indigo-500 text-white font-semibold rounded-r-md px-3 py-2 hover:opacity-90 focus:opacity-70 duration-200">Send</button>
            </form>
        </main>
    )
}