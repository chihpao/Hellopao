import Link from 'next/link';
import AppHeader from '@/components/AppHeader';

// 造訪 /Future 會看到此頁面
export default function Future() {
    return (
        <main className="">
            <AppHeader
                title="Future"
                description="Welcome to /future page."
            >
                <Link
                    href="/"
                    className="bg-indigo-500 hover:bg-indigo-400 px-5 py-3 mt-3 inline-block text-white rounded-md"
                >
                    Back to Home page
                </Link>
            </AppHeader>
        </main>
    )
}