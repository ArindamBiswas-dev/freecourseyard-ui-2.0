import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Styles from '../../../../App.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        borderBottom: '1px solid #9e9e9e',
        top: "0",
        position: "-webkit-sticky"
    },
    toolBar: {
        display: 'flex',
        justifyContent: "space-between"
    },
    iconBtn: {
        marginRight: "8px"
    },
    searchInput: {
        padding: "10px 10px",
        border: "1px solid #bdbdbd",
        width: "20%",
        marginRight: "5%",
        transition: "all 0.4s",
        '&:hover': {
            backgroundColor: "#eeeeee",
            border: "1px solid black",
        }
    },
    searchInput2: {
        border: "2px solid blue",
        padding: "10px 10px",
        marginRight: "5%",
        width: "25%",
        transition: "all 0.4s",
    },
    inputStyle: {
        padding: "5px",
        backgroundColor: "transparent",
        outline: "none",
        color: "black",
        border: "none",
        width: "100%",
    },
    drawerRoot: {
        '& .MuiDrawer-paper': {
            width: "75px",
            paddingTop: "0",
            fontSize: "14px",
            textAlign: "center"
        },
        '& .MuiListItem-root': {
            display: "flex",
            flexDirection: "column"
        },
        '& .MuiList-padding': {
            padding: "0"
        },
        '& .drawerListItem': {
            color: "black",
            borderBottom: "1px solid black",
            padding: "5px 10px",
            fontSize: "15px"
        },

        '& .MuiSvgIcon-root': {
            color: "black",
            fontSize: "55px"
        }
    }
})

function MuiAppBar(props) {
    const classes = useStyles();

    const [isBlue, setBlue] = useState(false);

    const [isDrawerOpen, setDrawer] = useState(false);

    const [searchValue, setsearchValue] = useState("");

    const onFocusHandelar = () => {
        setBlue(true);
    }

    const toggelDrawer = (open) => (event) => {
        console.log("clicked")
        setDrawer(open);
    }

    const onChangeHandelar = e => {
        setsearchValue(e.target.value);
        props.onChange(e.target.value);
    }

    const onClickNewPageHandeler = (e) => {
        e.preventDefault();

        window.location.href = '/suggestcourse';
    }

    return (
        <div>
            <AppBar elevation={3} className={classes.root}>
                <Toolbar className={classes.toolBar}>
                    <div style={{ display: "flex" }}>
                        <IconButton edge="start" className={classes.iconBtn} onClick={toggelDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={isDrawerOpen} onClose={toggelDrawer(false)} className={classes.drawerRoot}>
                            <List>
                                <ListItem button className="drawerListItem" component={Link} to="/">
                                    <ListItemIcon>
                                        <ExploreOutlinedIcon />
                                    </ListItemIcon>
                                    <div><p style={{ margin: "0" }}>Explore</p></div>
                                </ListItem>
                                <ListItem button className="drawerListItem" component={Link} to="/popularchoices">
                                    <ListItemIcon>
                                        <FlareOutlinedIcon />
                                    </ListItemIcon>
                                    <div><p style={{ margin: "0" }}>Popular Choices</p></div>
                                </ListItem>
                                <ListItem button className="drawerListItem" component={Link} to="/suggestcourse">
                                    <ListItemIcon>
                                        <ControlPointOutlinedIcon />
                                    </ListItemIcon>
                                    <div><p style={{ margin: "0" }}>Suggest Course</p></div>
                                </ListItem>
                                <ListItem button className="drawerListItem" component="a" href="mailto:www.freecourseyard.com">
                                    <ListItemIcon>
                                        <PermContactCalendarOutlinedIcon />
                                    </ListItemIcon>
                                    <div><p style={{ margin: "0" }}>Contact</p></div>
                                </ListItem>
                            </List>
                        </Drawer>
                        <p className={Styles.textLg} style={{ position: "relative", bottom: "-11px" }}>FREECOURSEYARD</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", alignItems: "center" }}>
                        <div className={(!isBlue) ? classes.searchInput : classes.searchInput2}>
                            <input placeholder="Search..." className={classes.inputStyle} onFocus={onFocusHandelar}
                                onBlur={() => { setBlue(false) }} value={searchValue} onChange={onChangeHandelar} />
                        </div>
                        <div>
                            <IconButton aria-label="delete" style={{ padding: "0", color: "#bdbdbd" }}>
                                <AccountCircleIcon fontSize="large" />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MuiAppBar
