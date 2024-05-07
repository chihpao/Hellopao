"use client";
import axios from "axios";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppHeader from '@/components/AppHeader';

export default function CreateProduct() {
    // 定義畫面上需要用到的狀態
    // React元件如果需要重新渲染，必須要更新狀態
    // const [狀態, 用於更新狀態的函數] = useState(預設值)
    const [name, setName] = useState(""),
        [price, setPrice] = useState(""),
        [imageId, setImageId] = useState(""),
        [description, setDescription] = useState("");

    // 使用 useRouter 來取得路由物件
    const router = useRouter();

    const submitHandler = async (event) => {
        // 取消表單的預設送出會重新整理的行為
        event.preventDefault();
        console.log("準備建立新產品資料");
        const product = {
            name,
            price: parseInt(price),
            imageId,
            description,
            createdAt: new Date().getTime()
        };
        console.log("product:", product);
        // 將新產品資料 POST 到 /api/product-list
        // axios.post(路徑, 要傳送的物件資料)
        axios
            .post("/api/product-list", product)
            .then(res => {
                console.log("成功建立產品:", res);
                // 將使用者引導回首頁
                router.push("/");
            })
            .catch(err => {
                console.log("建立產品失敗:", err);
                alert("建立產品失敗，等一會之後再試試看");
            });
    }

    // const onNameChanged = (event) => {
    //     console.log("onNameChanged");
    //     // 要到改變事件最新的值 event.target.value
    //     console.log("輸入框最新的值", event.target.value);
    //     setName(event.target.value);
    // }

    return (
        <main>
            <AppHeader
                title="Create Product"
                description="Fill in the form below to create a new product doc in the productList collection."
            >
            </AppHeader>
            <section>
                <div className="container">
                    <form onSubmit={submitHandler} className="border-2 shadow-sm rounded-md px-4 py-6">
                        <h2 className="text-2xl mb-3">Create Product Form</h2>
                        <div className="mb-5">
                            <label htmlFor="newProductName">New Product Name: {name}</label>
                            <input
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductName"
                                type="text"
                                value={name}
                                onChange={event => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="newProductPrice">New Product Price: {price}</label>
                            <input
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductPrice"
                                type="number"
                                value={price}
                                onChange={event => setPrice(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            {/* imageId */}
                            <label htmlFor="newProductImageId">New Product Image ID: {imageId}</label>
                            <img src={`https://picsum.photos/id/${imageId}/800/600`} className="w-1/2" alt="" />
                            <input
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductImageId"
                                type="text"
                                value={imageId}
                                onChange={event => setImageId(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newProductDescription">New Product Description: {description}</label>
                            <textarea
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductDescription"
                                value={description}
                                onChange={event => setDescription(event.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-indigo-500 text-white font-semibold rounded-md px-3 py-3 hover:opacity-90 focus:opacity-70 duration-200">Create New Product</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}