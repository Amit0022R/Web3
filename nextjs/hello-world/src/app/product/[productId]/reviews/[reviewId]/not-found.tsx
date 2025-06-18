"use client";

import { usePathname } from "next/navigation";
// usePathname() is a React hook provided by Next.js (App Router) that lets you get the current URL path in your component.                              
export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2]; // Extract productId from the path
    const reviewId = pathname.split('/')[4]; // Extract reviewId from the path
    return (
        <div>
            <h2> Review {reviewId} not found for product {productId} </h2>
        </div>
    );
}

// This file is used to render a custom 404 page in a Next.js application.
// NotFound component doesnot receive any props.