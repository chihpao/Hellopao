import { db } from '@/config/firebase';

// 前端可以透過get method取得資料
export async function GET() {
    // console.log("==================================");
    // console.log("已經啟動過的Firebase app:", getApps().length);
    // 前端對後端下請求後的邏輯
    // console.log("有人使用了 /api/product-list");
    // 跟 Firestore 要 productList 集合的資料並按照建立時間比較新的排前面，並等待回應取得後才做下列的流程
    const docList = await db.collection("productList").orderBy("createdAt", "desc").get();
    // 產品清單
    const productList = [];
    // 箭頭函數 ( 參數 ) => {}
    docList.forEach(doc => {
        // doc.id     文件的id
        // doc.data() 取得在文件內的資料(物件)
        const product = doc.data();
        product.id = doc.id;
        // console.log("商品的id:", doc.id);
        // console.log("商品資料:", product);
        // 將單一產品資料放入產品清單
        productList.push(product);
    });
    // console.log("產品清單:", productList);
    // return Response.json(要給前端的資料)
    return Response.json({
        // productList: productList,
        productList,
    });
}

// 前端可以透過POST method傳資料過來
export async function POST(request) {
    console.log("==================================");
    console.log("準備新增資料");
    // 取得前端傳來的資料
    const product = await request.json();
    console.log("新產品:", product);
    // 將資料新增到 Firestore 的 productList 集合
    await db.collection("productList").add(product);

    return Response.json({
        message: "成功新增產品"
    });
}