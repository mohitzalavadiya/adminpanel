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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Medicine(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState(false);
    const [alertdata, setAlertdata] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Datainti = (values) => {

        const databack = JSON.parse(localStorage.getItem('medicine'));

        let id = Math.floor(Math.random() * 1000);

        const datain = {
            id: id,
            ...values
        }

        if (databack === null) {
            localStorage.setItem('medicine', JSON.stringify([datain]))
        } else {
            databack.push(datain)
            localStorage.setItem('medicine', JSON.stringify(databack))
        }

    }

    const localdata = () => {
        const datap = JSON.parse(localStorage.getItem("medicine"));
        if (datap !== null) {
            setData(datap);
        }
    }

    useEffect(() => {
        localdata()
    }, []);

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
    const detelefun = () => {
        const localdatadelete = JSON.parse(localStorage.getItem("medicine"))

        const deletedata = localdatadelete.filter((p) => p.id !== alertdata)

        setData(deletedata);

        localStorage.setItem("medicine", JSON.stringify(deletedata))
        setAlert(false)
    }

    const alertopen = (params) => {
        setAlert(true);
        setAlertdata(params);

    }
    const alertclose = () => {
        setAlert(false)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'price', headerName: 'Price', width: 170 },
        { field: 'quantity', headerName: 'Quantity', width: 170 },
        { field: 'expiry', headerName: 'Expiry', width: 170 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => (
                <IconButton aria-label="delete" onClick={() => {alertopen(); setAlertdata(params.id)}}>
                    <DeleteIcon />
                </IconButton>
            )
        }
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

                <div>

                    <Dialog
                        open={alert}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={alertclose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Are You Sure?"}</DialogTitle>
                        <DialogActions>
                            <Button onClick={alertclose}>No</Button>
                            <Button onClick={detelefun}>Yes</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>

        </div>
    );
}

export default Medicine;