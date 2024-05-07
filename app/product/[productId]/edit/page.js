"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppHeader from '@/components/AppHeader';

export default function EditProduct({ params }) {
    console.log("params:", params);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [imageId, setImageId] = useState("");
    const [description, setDescription] = useState("");
    // 使用 useRouter 來取得路由物件
    const router = useRouter();

    const submitHandler = async (event) => {
        // 取消表單的預設送出會重新整理的行為
        event.preventDefault();
        const product = {
            name,
            price: parseInt(price),
            imageId,
            description,
        }
        console.log("product:", product);
        // 將使用者引導回首頁
        router.push("/");
    }

    return (
        <main>
            <AppHeader
                title="Edit Product"
                description="Fill in the form below to edit the product doc in the productList collection."
            >
            </AppHeader>
            <section>
                <div className="container">
                    <form onSubmit={submitHandler} className="border-2 shadow-sm rounded-md px-4 py-6">
                        <h2 className="text-2xl mb-3">Edit Product Form</h2>
                        <div className="mb-5">
                            <label htmlFor="newProductName">Product Name</label>
                            <input
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductName"
                                type="text"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="newProductPrice">Product Price</label>
                            <input
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductPrice"
                                type="number"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            {/* imageId */}
                            <label htmlFor="newProductImageId">Product Image ID</label>
                            <div>
                                {imageId !== "" ? <img className="w-1/2" src={`https://picsum.photos/id/${imageId}/800/600`} alt="Product Image" /> : null}
                            </div>
                            <input
                                value={imageId}
                                onChange={(event) => setImageId(event.target.value)}
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductImageId"
                                type="text"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newProductDescription">Product Description</label>
                            <textarea
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                className="block w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
                                id="newProductDescription"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-indigo-500 text-white font-semibold rounded-md px-3 py-3 hover:opacity-90 focus:opacity-70 duration-200">Update Product</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}