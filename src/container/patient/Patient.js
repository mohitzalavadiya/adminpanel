import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Patient(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let schema = yup.object().shape({
        name: yup.string().required("required"),
        age: yup.number().required("required").positive().integer(),
        date: yup.number().required("required"),
        address: yup.string().required("required")
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            age: '',
            date: '',
            address: ''
        },
        validationSchema: schema,
        onSubmit: (values, action) => {
            alert(JSON.stringify(values, null, 2));
            action.resetForm()
        },
    });

    const {handleBlur, handleChange, handleSubmit, errors, touched, values} = formikobj;




    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Patient
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Patient</DialogTitle>
                <Formik values={formikobj}>
                <Form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            label="Patient Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <p>{errors.name && touched.name ? errors.name : ''}</p>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="age"
                            label="Patient Age"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.age}
                        />
                        <p>{errors.age && touched.age ? errors.age : ''}</p>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="date"
                            label="Appointment Date"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.date}
                        />
                        <p>{errors.date && touched.date ? errors.date : ''}</p>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="address"
                            label="Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                        />
                        <p>{errors.address && touched.address ? errors.address : ''}</p>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </DialogContent>
                </Form>
                </Formik>
            </Dialog>
        </div>
    );
}

export default Patient;