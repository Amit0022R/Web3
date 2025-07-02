// every page in app router recieves route parameter through params prop
// type of params is a promise that results in object containing dynamic segments as key value pairs
// e.g. /product/1 will result in params = { productId: '1
// nextjs treats folder name in sqaure brackets as a dynamic route
// e.g. /product/1, /product/2, etc. will be treated as dynamic routes

// export default async function ProductDetails({
//     params,
// }: {
//     params: Promise<{ productId: string }>;
// }){
//     const { productId } = await params;
//     // const productId = (await params).productId;
//     return (
//         <h1>Details about product {productId} </h1>
//     )
// }

//  Routing MetaData dynamically

import { Metadata } from 'next';


type Props = {
    params: Promise<{productid: string}>;
} 

export const generateMetadata = async ( { params } : Props) :  Promise<Metadata> => {
        const id = (await params).productid;
        return {
            title: `Product ${id} Details`,
        };
}

export default async function ProductDetails({params}: Props){
    const  productId  = (await params).productid
    // const productId = (await params).productId;
    return (
        <h1>Details about product {productId} </h1>
    )
}