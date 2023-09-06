
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Información de contacto',
    keywords: ["Contact Page", "información"]
};

export default function ContactPage() {
    return (
        <>
            <span className='text-3xl'>Contact Page</span>
        </>
    )
}
