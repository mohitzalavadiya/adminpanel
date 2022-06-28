import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';

function Medicine(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

const Datainti = (values) => {

    const databack = JSON.parse(localStorage.getItem('medicine' ));

    let id = Math.floor(Math.random()*1000);

   const datain = {
    id : id,
    ...values
   }

    if(databack === null){
        localStorage.setItem('medicine', JSON.stringify([datain]))
    }else{
        databack.push(datain)
        localStorage.setItem('medicine', JSON.stringify(databack))
    }

}

    const localdata = () => {
        const datap = JSON.parse(localStorage.getItem("medicine"));
        if(datap === null){
            return
        }
        setData(datap);
    }

    useEffect( () => {
        localdata()
    },[]);

    let schema = yup.object().shape({
        name: yup.string().required("required"),
        price: yup.number().required("required"),
        quantity: yup.number().required("required"),
        expiry: yup.number().required("required"),
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: (values, action) => {
            Datainti(values);
            action.resetForm()
            handleClose()
            localdata()
        },
    });

    const columns = [
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'price', headerName: 'Price', width: 170 },
        { field: 'quantity', headerName: 'Quantity', width: 170 },
        { field: 'expiry', headerName: 'Expiry', width: 170 }
        
      ];
      
      
    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formikobj;

    return (
        <div>
            <p>Medicine</p>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Medicine
                </Button>
                <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

                <Dialog fullWidth open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicine</DialogTitle>
                    <Formik values={formikobj}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent >
                                <TextField
                                    margin="dense"
                                    name="name"
                                    label="Medicine name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name ? <p>{errors.name}</p> : ''}
                                <TextField
                                    margin="dense"
                                    name="price"
                                    label="Price"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.price && touched.price ? <p>{errors.price}</p> : ''}
                                <TextField
                                    margin="dense"
                                    name="quantity"
                                    label="quantity"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.quantity}
                                />
                                {errors.quantity && touched.quantity ? <p>{errors.quantity}</p> : ''}

                                <TextField
                                    margin="dense"
                                    name="expiry"
                                    label="expiry"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.expiry}
                                />
                                {errors.expiry && touched.expiry ? <p>{errors.expiry}</p> : ''}

                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit' >submit</Button>
                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>
                </Dialog>
            </div>

        </div>
    );
}

export default Medicine;