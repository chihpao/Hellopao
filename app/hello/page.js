import Link from 'next/link';
import AppHeader from '@/components/AppHeader';

// 造訪 /hello 會看到此頁面
export default function Hello() {
    return (
        <main className="">
            <AppHeader
                title="Hello World"
                description="Welcome to /hello page."
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