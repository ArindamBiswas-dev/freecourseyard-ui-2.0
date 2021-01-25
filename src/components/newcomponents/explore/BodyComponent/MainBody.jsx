import { Button, CircularProgress, Container, Grid, makeStyles } from '@material-ui/core'
import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import Styles from '../../../../App.module.css'
import MuiCard from './MuiCard';

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    showMoreBtn: {
        backgroundColor: "transparent",
        padding: "10px 15px",
        fontSize: "15px",
        border: "1px solid black",
        position: "relative",
        left: "46%",
        marginLeft: "-50px",
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

    const [isCircularShow, setShow] = useState(true);

    const [count, setCount] = useState(12);

    const onClickHandelar = e => {
        setCount(count * 2);
    }

    let url = "";
    url = (!searchValue) ? 'http://localhost:8000/' : `http://localhost:8000/getbysearch/:${searchValue}`;

    useEffect(() => {
        Axios.get(url)
            .then((d) => {
                // console.log(d.data.data)
                setData(d.data.data);
            })
            .then(() => {
                setShow(false)
            })
            .catch(err => console.error(err))

    }, [datas])

    if (isCircularShow) {
        return (<CircularProgress />);
    }
    if(datas.length >= 1){
        return (
            <Container style={{ maxWidth: "90%", marginTop: "100px" }}>

                <div className={classes.root}>
                    <p className={Styles.textXl} style={{ margin: "2.25rem 0" }}>{pageTitleName}</p>
                    <Grid container spacing={2} style={{ marginBottom: "40px" }}>
                        {
                            datas.map((data, index) => (<Grid item xs={12} sm={6} md={3} key={index}>
                                <MuiCard data={data} />
                            </Grid>))
                        }

                    </Grid>
                    <Button disableElevation className={classes.showMoreBtn} onClick={onClickHandelar}>Show More</Button>
                </div>

            </Container>
        )
    }
 
    return (<h1 className={classes.notFound}>No result found  :/</h1>)

}

export default MainBody
