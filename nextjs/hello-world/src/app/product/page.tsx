import Link from "next/link";
export default function ProductList(){
    const productId = 4100; // Example product ID, you can change this as needed
    return (
        <div>
            <button><Link href="/" >Home</Link></button>
           <h1>Product List</h1>
           <h3><Link href="/product/1" >Product 1</Link></h3>
           <h3><Link href="/product/2" >Product 2</Link></h3>
           <h3><Link href="/product/3" >Product 3</Link></h3>
           <h3><Link href="/product/4" >Product 4</Link></h3>
           <h3><Link href={`/product/${productId}`} >Product {productId}</Link></h3>
        </div>
    );
}