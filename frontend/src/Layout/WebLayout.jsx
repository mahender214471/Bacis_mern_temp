import React from 'react'
import Header from './Header';
import Footer from './Footer';
export default function WebLayout({ children }) {
    return (
        <main className='w-full h-[100vh] overflow-auto'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}
