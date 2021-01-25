import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root1: {
        backgroundColor: "#14142F",
        padding: "40px 20px",
        marginTop: "40px",
        position: "relative",
        bottom: "0",
        height: "100%"
    },
    footerH1: {
        color: "white",
        fontSize: "25px",
        fontWeight: "bold",
        marginTop: "0",
        marginBottom: "0"
    },
    footerH2: {
        color: "white",
        fontSize: "15px",
        fontWeight: "bold",
        marginBottom: "40px"
    },
    hr: {
        width: "100%",
        height: "1.2px",
        backgroundColor: "grey",
        border: "none",
    },
    footerH3: {
        fontSize: "15px",
        fontWeight: "600",
        color: "#A4A4B7"
    }
})

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root1}>
            <p className={classes.footerH1} > FREECOURSEYARD</p>
            <p className={classes.footerH2}>Free learning, Happy Learning | Education beyond University</p>
            <hr className={classes.hr} />
            <Grid container direction="row" justify="space-between" spacing={2}>
                <Grid item xs={6} md={3}>
                    <p className={classes.footerH3} style={{ color: "white" }}>Important Links</p>
                    <a><p className={classes.footerH3}>Popular Choices</p></a>
                    <a><p className={classes.footerH3}>Suggest Course</p></a>
                    <a><p className={classes.footerH3}>Contact Us</p></a>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p className={classes.footerH3} style={{ color: "white" }}>About Us</p>
                    <a><p className={classes.footerH3}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p></a>
                </Grid>
                <Grid item xs={12} md={3}>
                    <p className={classes.footerH3} style={{ color: "white", textAlign: "center" }}>Copyright @ 2020 FREECOURSEYARD</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
