import { Button, makeStyles, Snackbar, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Axios from 'axios';
import React, { useState } from 'react'
import MuiAppBar from './appbarComponent/MuiAppBar';
import Footer from './footerComponent/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        width: "60%",
        '& .MuiFormControl-root': {
            width: "100%",
            marginTop: "30px",
        },
        '& .MuiInputBase-input': {
            fontSize: "1.3rem"
        }
    },
    textField: {
        width: "100%",
    },
    heading: {
        fontSize: "70px",
        textAlign: "center",
        marginBottom: "0",
        marginTop: "100px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px",
        },
    },
    submitBtn: {
        marginTop: "30px",
        backgroundColor: "#afaffb",
        padding: "10px 30px",
        fontSize: "15px",
        border: "1px solid black",
        position: "relative",
        left: "46%",
        marginLeft: "-50px",
        fontWeight: "bold"
    }
}))



function SuggestCourse(props) {
    const isAddCourse = props.addCourse;

    const title = (isAddCourse) ? `Add` : `Suggest`;

    const classes = useStyles();

    const [errorObj, seterrorObj] = useState({
        etitle: false,
        einstructor: false,
        ecourseUrl: false,
        edescription: false
    });

    const [valueObj, setvalueObj] = useState({
        title: "",
        instructor: "",
        courseUrl: "",
        description: ""
    });

    const [snackBarOpen, setBar] = useState(false);

    const validate = () => {
        for (const value in valueObj) {
            if (valueObj[value] === "") {

                seterrorObj(prevState => ({
                    ...prevState,
                    [`e${value}`]: true
                }));
                return false;
            }
        }
        return true;
    }

    const sendDataToServer = async () => {
        try {
            setBar(true);
            let res = await Axios.post(`www.google.com`, valueObj);

        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitHandeler = (e) => {
        e.preventDefault();

        console.log("sumit click");

        if (validate()) {
            // send form data
            console.log("No error found...");
            seterrorObj({
                etitle: false,
                einstructor: false,
                ecourseUrl: false,
                edescription: false
            });
            sendDataToServer();

        } else {
            console.log("error happend...");

        }
    }

    const onChangeHandelar = (e) => {
        const { name, value } = e.target;
        setvalueObj(prevState => ({
            ...prevState,
            [name]: value.trim()
        }));
    }

    const handleClose = () => {
        setBar(false);
      };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <div>
            <MuiAppBar />
            <p className={classes.heading}>{title} a Course</p>
            <div className={classes.root}>
                <form onSubmit={onSubmitHandeler}>
                    <div className={classes.textField}>
                        <TextField id="standard-basic" label="Title of Course" defaultValue=""
                            error={(errorObj.etitle) ? true : false} helperText={(errorObj.etitle) ? "This field required" : ""}
                            onChange={onChangeHandelar} name="title" />
                    </div>
                    <div className={classes.textField}>
                        <TextField id="standard-basic" label="Instructor" defaultValue=""
                            error={(errorObj.einstructor) ? true : false} helperText={(errorObj.einstructor) ? "This field required" : ""}
                            onChange={onChangeHandelar} name="instructor" />
                    </div>
                    <div className={classes.textField}>
                        <TextField id="standard-basic" label="Course Url" defaultValue=""
                            error={(errorObj.ecourseUrl) ? true : false} helperText={(errorObj.ecourseUrl) ? "This field required" : ""}
                            onChange={onChangeHandelar} name="courseUrl" />
                    </div>
                    {(!isAddCourse) ?
                        (<div className={classes.textField}>
                            <TextField id="standard-basic" label="Description" defaultValue="" multiline
                                error={(errorObj.edescription) ? true : false} helperText={(errorObj.edescription) ? "This field required" : ""}
                                onChange={onChangeHandelar} name="description" />
                        </div>) :

                        (<div className={classes.textField}>
                            <TextField id="standard-basic" label="Image Url" defaultValue="" multiline
                                error={(errorObj.edescription) ? true : false} helperText={(errorObj.edescription) ? "This field required" : ""}
                                onChange={onChangeHandelar} name="description" />
                        </div>)}

                    <Button disableElevation className={classes.submitBtn} type="submit">Send</Button>
                    <Snackbar open={snackBarOpen} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
                        <Alert severity="success" onClose={handleClose}>
                            {(isAddCourse) ? `Course Added!` : `Request Send!`}
                        </Alert>
                    </Snackbar>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default SuggestCourse        // name, instructor, course url, Brife Description