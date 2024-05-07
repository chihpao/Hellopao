import moment from "moment";
// Ctrl + / 註解
// 表達一個 react component
// 1. 表達一個函式(數)，並在函式中回傳 JSX(HTML) code
// 2. 並將函式輸出，讓其他元件可使用

export default function ProductCard({ name, price, description, imageId, createdAt }) {
    // props 就是元件接收到的屬性
    // console.log(資料) 印出資料
    // console.log("props就是:", props);
    // 要return的內容只能是一個標籤(元素)
    return (
        <div className="md:w-1/3 lg:w-1/4 px-4 py-8">
            <div className="shadow-sm hover:shadow-xl shadow-indigo-100 border-2 border-indigo-100 hover:border-indigo-500 duration-500">
                <img src={`https://picsum.photos/id/${imageId}/800/600`} alt="" />
                <div className="p-3">
                    <h3 className="text-xl font-bold text-indigo-500">{name}</h3>
                    <h4 className="font-semibold text-slate-700">$ {price}</h4>
                    <p className="text-slate-700">{description}</p>
                    <p className="text-slate-500">{moment(createdAt).format("YYYY.MM.DD HH:mm:ss")}</p>
                </div>
            </div>
        </div>
    )
}