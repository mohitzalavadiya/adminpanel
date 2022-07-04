import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Edit from '@mui/icons-material/Edit';

function Patient(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [alertopen, setAlertOpen] = React.useState(false);
    const [deletedata, setdeletedata] = useState([]);
    const [update, setUpdate] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm()
        setUpdate(false)
    };

    const handleAlertOpen = () => {
        setAlertOpen(true);
    };

    const handlealertClose = () => {
        setAlertOpen(false);
    };

    let schema = yup.object().shape({
        name: yup.string().required("required"),
        age: yup.number().required("required").positive().integer(),
        dateofbirth: yup.number().required("required"),
        address: yup.number().required("required")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            dateofbirth: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: (values, action) => {
            action.resetForm()
            if (update) {
                Dataupdate(values)
            } else {
                Datainsert(values)
            }

            handleClose()
            loaddata()
        },
    });
    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formik;

    const Datainsert = (values) => {
        const databack = JSON.parse(localStorage.getItem("patient"))

        let id = Math.floor(Math.random() * 1000);

        let iddata = {
            id: id,
            ...values
        }

        if (databack === null) {
            localStorage.setItem("patient", JSON.stringify([iddata]));
        } else {
            databack.push(iddata);
            localStorage.setItem("patient", JSON.stringify(databack))
        }
    }

    const loaddata = () => {
        const localdata = JSON.parse(localStorage.getItem("patient"));

        if (localdata !== null) {
            setData(localdata)
        }
    }

    useEffect(() => {
        loaddata()
    }, [])

    const Deletefun = () => {
        const localdata = JSON.parse(localStorage.getItem("patient"))

        const Ddata = localdata.filter((f) => f.id !== deletedata)

        setData(Ddata)
        localStorage.setItem("patient", JSON.stringify(Ddata))
        handlealertClose()
    }
    const Edit = (params) => {
        handleClickOpen()
        setUpdate(true)
        formik.setValues(params.row)
    }
    const Dataupdate = (values) => {
        const localdata = JSON.parse(localStorage.getItem("patient"))

        const updata = localdata.map((l) => {
            if (l.id === values.id) {
                return values
            } else {
                return l;
            }
        })

        localStorage.setItem("patient", JSON.stringify(updata));

        loaddata();
        handleClose()
        setUpdate(false)
    }
    const columns = [
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'age', headerName: 'Age', width: 170 },
        { field: 'dateofbirth', headerName: 'Date of birth', width: 170 },
        { field: 'address', headerName: 'Address', width: 170 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => Edit(params)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => { handleAlertOpen(); setdeletedata(params.id) }}>
                        <DeleteIcon />
                    </IconButton>
                </>

            )
        }
    ];

    return (
        <div>
            <p>patient</p>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    patient details
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
                    <DialogTitle>Add Patient Details</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>

                                <TextField
                                    margin="dense"
                                    name="name"
                                    label="name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <p>{errors.name && touched.name ? errors.name : ''} </p>

                                <TextField
                                    margin="dense"
                                    name="age"
                                    label="Age"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.age}
                                />
                                <p>{errors.age && touched.age ? errors.age : ''} </p>


                                <TextField
                                    margin="dense"
                                    name="dateofbirth"
                                    label="Date of Birth"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.dateofbirth}
                                />
                                <p>{errors.dateofbirth && touched.dateofbirth ? errors.dateofbirth : ''} </p>


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
                                <p>{errors.address && touched.address ? errors.address : ''} </p>


                                <DialogActions>
                                    <Button type='submit'>Cancel</Button>
                                    {
                                        update ?
                                            <Button type='submit'>Update</Button>
                                            :
                                            <Button type='submit'>Submit</Button>
                                    }

                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>
                </Dialog>

                <div>

                    <Dialog
                        open={alertopen}
                        onClose={handlealertClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Are You Sure"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handlealertClose}>No</Button>
                            <Button onClick={Deletefun} >
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div >
    );
}

export default Patient;