import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import Styles from '../../../../App.module.css'
import MuiCard from './MuiCard';
import { trackPromise } from 'react-promise-tracker';
import LodingIndecator from '../LodingIndecator';

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    showMoreBtn: {
        backgroundColor: "transparent",
        padding: "10px 15px",
        fontSize: "15px",
        border: "1px solid black",
        display: "flex",
        margin: "auto",
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
    const { pageTitleName, searchValue } = props;

    const [datas, setData] = useState([]);

    const [count, setCount] = useState(8);

    const onClickHandelar = e => {
        setCount(count * 2);
    }

    // let url = "";
    // url = (!searchValue) ? 'http://localhost:8000/' : `http://localhost:8000/getbysearch/:${searchValue}`;

    let url = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        trackPromise(
            Axios.get(url)
                .then((d) => {
                    console.log(d.data);
                    setData(d.data);
                })
                .catch(err => console.error(err)))
    }, [url]);

    return (
        <Container style={{ maxWidth: "90%", marginTop: "100px" }}>
            <div className={classes.root}>
                <p className={Styles.textXl} style={{ margin: "2.25rem 0" }}>{pageTitleName}</p>
                <LodingIndecator />
                {
                    (datas) ?
                        (
                            <>
                                <Grid container spacing={2} style={{ marginBottom: "40px" }}>
                                    {
                                        datas.map((data, index) => (<Grid item xs={12} sm={6} md={3} key={index}>
                                            <MuiCard data={data} />
                                        </Grid>))
                                    }

                                </Grid>
                                <Button disableElevation className={classes.showMoreBtn} onClick={onClickHandelar}>Show More</Button>
                            </>
                        )
                        : (<h1>Hello</h1>)
                }
            </div>

        </Container>
    )
}

export default MainBody
