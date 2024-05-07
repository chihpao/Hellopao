import moment from 'moment'
import { db } from '@/config/firebase'

// Http Method: POST 新增資料, GET 取得資料
export async function POST() {
    console.log("Seeding product list...")
    const productList = [
        {
            name: "Toothbrush",
            price: 50,
            description: "A toothbrush for daily oral care",
            imageId: "182",
            createdTime: "2024/04/25 08:37:42"
        },
        {
            name: "Shampoo",
            price: 150,
            description: "A shampoo for clean and healthy hair",
            imageId: "176",
            createdTime: "2024/04/05 09:12:38"
        },
        {
            name: "Soap",
            price: 30,
            description: "A soap for cleansing and moisturizing",
            imageId: "168",
            createdTime: "2024/03/20 06:25:03"
        },
        {
            name: "Towel",
            price: 100,
            description: "A towel for drying and wiping",
            imageId: "141",
            createdTime: "2024/02/10 10:25:30"
        },
        {
            name: "Toilet Paper",
            price: 80,
            description: "A toilet paper for personal hygiene",
            imageId: "112",
            createdTime: "2024/02/02 02:24:24"
        },
        {
            name: "Laundry Detergent",
            price: 200,
            description: "A laundry detergent for clean clothes",
            imageId: "106",
            createdTime: "2024/01/30 09:21:07"
        },
        {
            name: "Hand Sanitizer",
            price: 70,
            description: "A hand sanitizer for germ protection",
            imageId: "85",
            createdTime: "2023/12/25 09:09:52"
        },
        {
            name: "Tissue",
            price: 40,
            description: "A tissue for wiping and cleaning",
            imageId: "76",
            createdTime: "2023/12/03 08:31:58"
        },
        {
            name: "Dish Soap",
            price: 60,
            description: "A dish soap for clean dishes",
            imageId: "70",
            createdTime: "2023/11/04 07:32:20"
        },
        {
            name: "Trash Bags",
            price: 90,
            description: "Trash bags for waste disposal",
            imageId: "66",
            createdTime: "2023/10/09 06:25:20"
        }
    ];

    const productListTasks = productList.map(product => {
        const data = {
            ...product,
            // 取得時間戳記
            createdAt: moment(product.createdTime, "YYYY/MM/DD HH:mm:ss").valueOf()
        }
        delete data.createdTime;
        return db.collection('productList').add(data)
    });

    await Promise.all(productListTasks);
    return Response.json({
        msg: "Success! Seeded product list."
    })
}