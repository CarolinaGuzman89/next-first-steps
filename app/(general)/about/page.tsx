import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Información de about',
    keywords: ["About Page", "información"]
};


export default function AboutPage() {
    return (
        <>
            <span className='text-3xl'>About Page</span>
        </>
    )
}
