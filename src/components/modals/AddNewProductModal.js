import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ProductForm from "../forms/ProductForm";

export default function AddNewProductModal ({ open, onClose, onSubmit }) {

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Adding a new product...
            </DialogTitle>
            <DialogContent>
                <ProductForm onSubmit={onSubmit}/>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    type="reset"
                    form='product-form'
                >
                    Clear form
                </Button>
                <Button
                    variant="contained"
                    type="submit"
                    form="product-form"
                    onClick={onClose}
                >
                    Add product
                </Button>
            </DialogActions>
        </Dialog>
    )
}