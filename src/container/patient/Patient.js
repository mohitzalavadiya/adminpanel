import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, insert, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';

function Patient(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const insertdata = (values) => {
        const localdata = JSON.parse(localStorage.getItem("patient"))

        if(localdata === null){
            localStorage.setItem("patient", JSON.stringify([values]))
        }
        else{
            localdata.push(values)
            localStorage.setItem("patient", JSON.stringify(localdata))
        }
    }

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
            // alert(JSON.stringify(values, null, 2));
            action.resetForm()
            insertdata(values)
        },
    });

    const {handleBlur, handleChange, handleSubmit, errors, touched, values} = formikobj;
    const columns = [
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'age', headerName: 'Age', width: 170 },
        { field: 'date', headerName: 'Date', width: 170 },
        { field: 'address', headerName: 'Address', width: 170 },
        
      ];
      

    return (
        <div>
            <p>Patient</p>
            <Button variant="outlined" onClick={handleClickOpen}>
                Patient
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
                <DialogTitle>Patient</DialogTitle>
                <Formik values={formikobj}>
                <Form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
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