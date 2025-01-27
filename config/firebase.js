const { initializeApp, applicationDefault, cert, getApps } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// 取得金鑰檔案
// const 常數 = 值
const serviceAccount = require('@/firebase-key.json');

// 如果在系統內沒有任何的Firebase app 被初始化，才會進行初始化
if (getApps().length === 0) {
    // 初始化 Firebase Admim (驗證金鑰)
    initializeApp({
        credential: cert(serviceAccount)
    });
}

// db 代表資料庫
const db = getFirestore();

// 輸出 db
// 其他檔案內可用 import { db } from '@/config/firebase' 引入db
export {
    db
}