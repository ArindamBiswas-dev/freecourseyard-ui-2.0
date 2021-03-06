import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Styles from "../../../../App.module.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { UserContext } from "../../../../App";
import axios from "axios";

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
      transform: "translateY(-5px)",
    },
    "& .MuiCardContent-root": {
      height: "150px",
    },
  },
  media: {
    paddingTop: "50%",
  },
  teacherLogoDiv: {
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    textAlign: "center",
    backgroundColor: "#C6E9F4",
    marginRight: "10px",
    fontSize: "27px",
    fontWeight: "600",
  },
  cardBtn: {
    width: "40%",
    textAlign: "end",
    padding: "10px 15px",
    backgroundColor: "white",
    fontWeight: "bold",
    transition: "0.8s",
    position: "relative",
    "&:hover": {
      backgroundColor: "#C4C4C4",
    },
  },
});

function MuiCard(props) {
  const classes = useStyles({});
  const { data } = props;
  const [isFev, setFev] = useState(false);
  const user = useContext(UserContext);
  const onFavoriteClick = async (e) => {
    if (user.token) {
      try {
        await axios.post(
          `https://freecourseyard-backend.glitch.me/setfavorite`,
          {
            token: user.token,
            courseId: data._id,
            addToFavorite: !isFev,
          }
        );
        setFev(!isFev);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("Log In / Sign Up to use this feature");
    }
  };

  useEffect(() => {
    if (user.token) {
      async function checkFev() {
        try {
          // console.log("within useEffect");
          let res = await axios.get(
            `https://freecourseyard-backend.glitch.me/isfavorite?token=${user.token}&courseId=${data._id}`
          );
          if (res.data.status === "ok") setFev(true);
        } catch (error) {
          console.log(error);
        }
      }
      checkFev();
    }
  }, [user.token, data._id]);

  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea style={{ backgroundColor: "white" }}>
        <CardMedia image={data.imageUrl} className={classes.media} />
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
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "auto",
        }}
      >
        <IconButton onClick={onFavoriteClick}>
          <FavoriteIcon style={{ color: isFev ? `blue` : `gray` }} />
        </IconButton>
        <Button
          className={classes.cardBtn}
          disableElevation
          href={data.courseUrl}
          component="a"
          target="blank"
          endIcon={<ArrowForwardIcon style={{ color: "#0B4CF3" }} />}
        >
          Preview
        </Button>
      </CardActions>
    </Card>
  );
}

export default MuiCard;
