"use client";
// 標記此元件是前端元件
// 引用元件
// 從 react 套件引入 使用狀態 使用副作用 的函式
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import AppHeader from '@/components/AppHeader';

export default function Home() {
  // state 狀態: 只要狀態有更新畫面就得以重新渲染

  // react 畫面渲染步驟
  // 1. 先執行 Home 元件的渲染邏輯，設定產品清單的狀態
  // 2. 渲染完成後，useEffect 才會執行
  // 3. 跟後端要資料的邏輯會在 useEffect 執行
  // 4. 更新產品清單狀態，自動由 react 重新渲染畫面
  console.log("準備渲染 Home 元件")

  const [productList, setProductList] = useState([]);

  const fetchProductList = () => {
    console.log("準備取得產品清單");
    // 使用 get method 跟 /api/product-list 要資料
    axios
      .get("/api/product-list")
      .then(res => {
        // axios 會將資料包裝在 res.data
        // console.log("後端傳來的回應", res);
        // 更新狀態 productList 並自動觸發渲染邏輯
        setProductList(res.data.productList);
      })
      .catch(err => {
        console.log("後端傳來的錯誤", err);
        alert("無法取得產品清單，請稍後再試")
      });
  }

  // 畫面打開(元件初次被渲染時)時要做的事
  useEffect(() => {
    console.log("畫面渲染完成，準備去跟後端要資料");
    // 跟後端要產品清單
    fetchProductList();
  }, []);
  // const [狀態值, 更新狀態用的函式] = useState(預設值)
  const [n, setN] = useState(499);

  // 當按鈕點擊時要觸發的函式
  const clickHandler = () => {
    console.log("按鈕點擊時要做的事");
    // 更新狀態並重新渲染畫面
    // setN(新的值)
    setN(n + 1);
  }

  const productCardList = productList.map(product => {
    // console.log("product:", product);
    return <ProductCard
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      imageId={product.imageId}
      createdAt={product.createdAt}
    />
  })

  return (
    <main>
      <AppHeader
        title="Learn React component"
        description="Learn how to create a React component and use it in a Next.js app."
      >
        <Link
          href="/hello"
          className="bg-indigo-500 hover:bg-indigo-400 px-5 py-3 mt-3 inline-block text-white rounded-md"
        >
          Visit Hello Page
        </Link>
      <br/>  
        <Link
          href="/future"
          className="bg-indigo-500 hover:bg-indigo-400 px-5 py-3 mt-3 inline-block text-white rounded-md"
        >
          Visit Future Page
        </Link>
      </AppHeader>
      <section>
        <div className="container">
          <h1 className="text-3xl">Product List</h1>

          <button onClick={clickHandler} className="p-3 bg-indigo-500 text-white rounded-md">
            Click to add number {n}
          </button>

          <div className="row mx-[-20px]">
            {productCardList}
          </div>
        </div>
      </section>
    </main>
  );
}
