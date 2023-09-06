

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pagina de precios de mis servicios',
    keywords: ["Pricing Page", "información"]
};

export default function PricingPage() {
    return (
        <>
            <span className='text-3xl'>Pricing Page</span>
        </>
    )
}
