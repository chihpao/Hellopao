"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setShowMenu(false);
    }, [pathname])


    return (
        <nav className={`navbar ${showMenu ? "show-menu" : "hide-menu"} bg-slate-100 h-[56px] w-full fixed z-[1000] shadow-sm px-5`}>
            <div className="flex h-full justify-between items-center">
                <Link className="text-lg font-bold" href="/">My Website</Link>
                <div className="menu bg-slate-100">
                    <Link href="/create-product" className="mr-3 hover:opacity-50 block sm:inline-block">Create Product</Link>
                    <Link href="/chat-with-ai" className="mr-3 hover:opacity-50 block sm:inline-block">Chat with AI</Link>
                    <Link href="" className="mr-3 hover:opacity-50 block sm:inline-block">Login</Link>

                </div>
                <button onClick={() => setShowMenu(!showMenu)}
                    className="menu-btn block sm:hidden rounded-md hover:opacity-70 active:opacity-50"
                >
                    <span className="line"></span>
                </button>
            </div>
        </nav>
    );
}