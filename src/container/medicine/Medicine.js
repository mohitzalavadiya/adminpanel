import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';

function Medicine(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
const Datainti = (values) => {

    const databack = JSON.parse(localStorage.getItem('medicine' ));

    if(databack === null){
        localStorage.setItem('medicine', JSON.stringify([values]))
    }else{
        databack.push(values)
        localStorage.setItem('medicine', JSON.stringify(databack))
    }

}

    let schema = yup.object().shape({
        name: yup.string().required("required"),
        email: yup.string().email().required("required"),
        quantity: yup.string().required("required"),
        expiry: yup.string().required("required"),
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            quantity: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: (values, action) => {
            Datainti(values);
            action.resetForm()
            handleClose()
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formikobj;

    return (
        <div>
            <p>Medicine</p>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Medicine
                </Button>
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
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email ? <p>{errors.email}</p> : ''}
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