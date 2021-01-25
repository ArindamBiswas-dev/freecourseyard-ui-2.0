import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'
import Styles from '../../../../App.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
    card: {
        maxWidth: "100%",
        height: "420px",
        // marginTop: "15px",
        transition: "all 0.5s",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "&:hover": {
            // boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
            boxShadow: "rgba(0,0,0,0.3) 0px 25px 50px -12px",
            transform: "translateY(-5px)"
        },
        '& .MuiCardContent-root':{
            height: "150px"
        }
    },
    media: {
        paddingTop: "50%"
    },
    teacherLogoDiv: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        textAlign: "center",
        backgroundColor: "#C6E9F4",
        marginRight: "10px",
        fontSize: "27px",
        fontWeight: "600"
    },
    cardBtn: {
        width: "40%",
        textAlign: "end",
        padding: "10px 15px",
        backgroundColor: "white",
        fontWeight: "bold",
        transition: "0.8s",
        position: "relative",
        // bottom: "-55px",
        "&:hover": {
            backgroundColor: "#C4C4C4",
        }
    }
})

function MuiCard(props) {
    const classes = useStyles({});

    const { data } = props;

    return (
        <Card className={classes.card} variant="outlined">
            <CardActionArea style={{ backgroundColor: "white" }}>
                <CardMedia
                    image={data.imageUrl}
                    className={classes.media}
                />
                <CardContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className={classes.teacherLogoDiv}>
                            <p style={{ marginTop: "6px" }}>T</p>
                        </div>
                        <p className={Styles.textLg}>{data.instructor}</p>
                    </div>
                    <p className={Styles.textSmall}>{data.title}</p>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", marginTop: "auto" }}>
                <Button className={classes.cardBtn} disableElevation  href={data.courseUrl} component="a" target="blank"
                endIcon={<ArrowForwardIcon style={{ color: "#0B4CF3" }}/>}>
                    Preview
                </Button>
            </CardActions>
        </Card>
    )
}

export default MuiCard