// every page in app router recieves route parameter through params prop
// type of params is a promise that results in object containing dynamic segments as key value pairs
// e.g. /product/1 will result in params = { productId: '1
// nextjs treats folder name in sqaure brackets as a dynamic route
// e.g. /product/1, /product/2, etc. will be treated as dynamic routes

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string }>;
}){
    const { productId } = (await params);
    return (
        <h1>Details about product {productId} </h1>
    )
}


