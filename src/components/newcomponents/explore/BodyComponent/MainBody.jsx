import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Styles from '../../../../App.module.css'
import MuiCard from './MuiCard';
import LodingIndecator from '../LodingIndecator';

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    showMoreBtn: {
        backgroundColor: "transparent",
        padding: "10px 15px",
        fontSize: "15px",
        border: "1px solid black",
        display: "flex",
        margin: "auto",
        marginTop: "30px",
        fontWeight: "bold"
    },
    notFound: {
        marginTop: "30vh",
        marginBottom: "70vh",
        textAlign: "center"
    }
})

function MainBody(props) {
    const classes = useStyles();

    const { pageTitleName, courses, onNextPageReq } = props;

    const [pageNumber, setPageNumber] = useState(1);

    const onClickHandelar = (e) =>{
        setPageNumber(pageNumber + 1);
        onNextPageReq(pageNumber);
    }

    return (
        <Container style={{ maxWidth: "90%", marginTop: "100px", height: "100%" }}>
            <div className={classes.root}>
                <p className={Styles.textXl} style={{ margin: "2.25rem 0" }}>{pageTitleName}</p>
                {
                    (courses) ?
                        (
                            <>
                                <Grid container spacing={2} style={{ marginBottom: "40px" }}>
                                    {
                                        courses.map((data, index) => (<Grid item xs={12} sm={6} md={3} key={index}>
                                            <MuiCard data={data} />
                                        </Grid>))
                                    }
                                </Grid>
                            </>
                        )
                        : (
                            
                            <h1>No Result Found</h1>
                        )
                }
                <LodingIndecator />
                <Button disableElevation className={classes.showMoreBtn} onClick={onClickHandelar}>Show More</Button>
            </div>

        </Container>
    )
}

export default MainBody
