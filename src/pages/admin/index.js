import { createProduct, deleteProduct, getProducts, updateProduct } from "@/api/products";
import PageDescription from "@/components/PageDescription";
import ProductItem from "@/components/ProductItem";
import AddNewProductModal from "@/components/modals/AddNewProductModal";
import EditProductModal from "@/components/modals/EditProductModal";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function AdminPage () {

    const[editProduct, setEditProduct] = useState()
    const [isNewProductModalVisible, setIsNewProducttModalVisible] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetchProducts()
    }, []) 

    const handleOnSubmit = async values => {
        const tempProducts = Array.from(products)
        if (!!values._id){
            const updatedProduct = await updateProduct(values);
            const productIndex = tempProducts.findIndex(p => p._id === updatedProduct._id)
            tempProducts[productIndex] = updatedProduct;
        }
        else {
            const newProduct = await createProduct(values);
            tempProducts.push(newProduct);
        }
        setProducts(tempProducts)
    }

    const handleDelete = async id => {
        const isDeleted = await deleteProduct(id);
        if (isDeleted)
            setProducts(prev => prev.filter(p => p._id !== id))
    }

    const fetchProducts = async () => {
        try {
            const products = await getProducts();
            setProducts(products);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <PageDescription 
                title="Admin" 
                description="Here you will be able to add and update your product"
            />

            <div style={{textAlign: 'center', marginBottom: '40px'}}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={ () =>setIsNewProductModalVisible(true) }
                    >
                        Add new product
                </Button>
            </div>
            {projects.map((product) => (
                <ProductItem 
                    key={product._id} 
                    product={product}
                    handleDelete={() => handleDelete(product._id)}
                    handleEdit={() => setEditProduct(product)} 
                />
            ))}
            <AddNewProductModal
                open={ isNewProductModalVisible }
                onClose={ () => setIsNewProductModalVisible(false) }
                onSubmit={ handleOnSubmit }
            />
            <EditProductModal 
                open={ !!editProduct }
                onClose={ () => setEditProduct() }
                onSubmit={ handleOnSubmit }
                product={ editProduct }
            />
        </section>
    );
}