import { getProducts } from "@/api/products";
import PageDescription from "@/components/PageDescription";
import ProductItem from "@/components/ProductItem";

export default function CatalogPage ({products}) {
    return (
    <section>
        <PageDescription 
            title="Shop Now" 
            description=""
        />

        {products.map((product) => (
            <ProductItem key={product._id} product={product} />
        ))}
    </section>);
}

export async function getServerSideProps(){
    const products = await getProducts();
  
    return {
        props: {
            products,
        },
    };
}