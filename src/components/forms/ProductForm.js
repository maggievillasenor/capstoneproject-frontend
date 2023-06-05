import * as yup from 'yup';
import { Box, Chip, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";


export default function ProductForm ({ onSubmit, editValues }) {

    const defaultValues = {
        name: "",
        imageUrl: "",
        description: "",
        price: "",        
    }
    
    const productFormSchema = yup.object().shape({
        name: yup.string().required('You need to add a name.'),
        imageUrl: yup.string().required(),
        description: yup.string().required(),
        price: yup.string().required(),
    })

    const { control, watch, reset, handleSubmit } = useForm({
        defaultValues: editValues || defaultValues,
        resolver: yupResolver(productFormSchema),
        mode: 'all',
    })

    const imageUrlValue = watch('imageUrl')

    return (
        <form
            id='product-form'
            onReset={() => reset(defaultValues)}
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: '24px' }}
        >
            <Grid container spacing={ 4 }>
                <Grid item sx={8}>
                    <Controller 
                        control={ control }
                        name='name'
                        render={ ({ field, fieldState }) =>(
                            <TextField
                                {...field}
                                label='Product Name'
                                variant='outlined'
                                fullWidth
                                error={ !!fieldState.error }
                                helperText={ fieldState.error?.message }
                            >
                            </TextField>
                        )}
                    >
                    </Controller>
                </Grid>
                <Grid item xs={12}>
                    <Controller 
                        control={ control }
                        name='description'
                        render={ ({ field, fieldState }) =>(
                            <TextField
                                {...field}
                                label='Description'
                                variant='outlined'
                                fullWidth
                                multiline
                                minRows={2}
                                maxRows={2}
                                error={ !!fieldState.error }
                                helperText={ fieldState.error?.message }
                            >
                            </TextField>
                        )}
                    >
                    </Controller>
                </Grid>
                <Grid item xs={12} >
                    <Controller 
                        control={ control }
                        name='price'
                        render={ ({ field, fieldState }) =>(
                            <TextField
                                {...field}
                                label='Price'
                                variant='outlined'
                                fullWidth
                                multiline
                                minRows={5}
                                maxRows={5}
                                error={ !!fieldState.error }
                                helperText={ fieldState.error?.message }
                            >
                            </TextField>
                        )}
                    >
                    </Controller>
                </Grid>
                <Grid item xs={12} >
                    <Controller 
                        control={ control }
                        name='imageUrl'
                        render={ ({ field, fieldState }) =>(
                            <TextField
                                {...field}
                                label='Image URL'
                                variant='outlined'
                                fullWidth
                                error={ !!fieldState.error}
                                helperText={ fieldState.error?.message}
                                >
                            </TextField>
                        )}
                    >
                    </Controller>
                </Grid>
                {
                    imageUrlValue && 
                    <Grid item xs={12}>
                        <img
                            src={imageUrlValue}
                            alt='product-image'
                            style={{ width: '100%' }}
                        />
                    </Grid>
                }
            </Grid>
        </form>
    )
}