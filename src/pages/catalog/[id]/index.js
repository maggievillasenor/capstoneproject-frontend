import { Button, Grid, Box, Chip } from "@mui/material";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import PageDescription from "@/components/PageDescription";
import { getProduct, getProducts } from "@/api/products";

function Product({ product }) {
  return (
    <>
      <NextSeo
        title={product.name}
        description={product.description}
        price={product.price}
        openGraph={{
          title: "Title",
          description: "Description of the product",
          price: "589.00",
          image:
            "https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg",
          type: "websites",
        }}
      ></NextSeo>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        rowGap={2}
      >
        <PageDescription
          title={product.name}
          description={product.description}
          price={product.price}
        />
        
        <Box>
          <Image
            src={product.imageUrl}
            width={500}
            height={500}
            alt="Image product"
          />
        </Box>
        <h1>Description</h1>
        <Box>
          <span>${product.description}</span>
        </Box>
        <h1>Price</h1>
        <Box>
          <span>${product.price}</span>
        </Box>
        <Box textAlign="center">
          <Button variant="contained" size="large">
            Add to Cart
          </Button>
        </Box>
        <Link href="/catalog">
          <Button variant="contained" size="large">
            Go back
          </Button>
        </Link>
      </Grid>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const products = await getProducts();
    const paths = products.map((product) => {
      return { params: { id: product._id.toString() } };
    });
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const product = await getProduct(params.id);

    return {
      props: {
        product,
      },
      revalidate: 5,
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default Product;