import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ItemActions from "./itemActions";

export default function ProductItem({ product, handleDelete, handleEdit }) {
    
    return (
        <Grid container spacing={6} sx={{ pb: "40px" }}>
            <Grid item md={6}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "100%" }}
                />
            </Grid>
            <Grid item md={6}>
                <Stack spacing={4}>
                    <h3>{product.name}</h3>
                    <div>{product.description}</div>
                    <div>{product.price}</div>
                    <ItemActions 
                        id={product._id}
                        onDelete={ handleDelete }
                        onEdit={ handleEdit }
                    />
                </Stack>
            </Grid>
        </Grid>
  );
}