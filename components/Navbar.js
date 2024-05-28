"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

    return (
        <nav className={`navbar ${showMenu ? "show-menu" : ""} bg-slate-100 h-[56px] w-full fixed z-[1000] shadow-sm px-5`}>
            <div className="flex h-full justify-between items-center">
                <div className={`menu ${showMenu ? "block" : "hidden"} sm:flex bg-slate-100`}>
                    <Link href="/create-product" className="mr-3 hover:opacity-50 block">Create Product</Link>
                    <Link href="/chat-with-ai" className="mr-3 hover:opacity-50 block">Chat with AI</Link>
                    <Link href="/login" className="mr-3 hover:opacity-50 block">Login</Link>
                </div>
                <div className="flex-grow"></div>
                <Link className="text-lg font-bold pr-5" href="/">FUN</Link>
                <button onClick={() => setShowMenu(!showMenu)}
                    className="menu-btn block rounded-md hover:opacity-70 active:opacity-50"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </nav>
    );
}
