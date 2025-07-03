import Link from "next/link";

export default function Home() {
    return (

        <>
       <h1> Home Page sir!</h1>
       
       <button>
       <Link  href="/blog">Blog</Link>
       </button>
       <button>
       <Link  href="/product">Product</Link>
       </button>
    </>
    )
}