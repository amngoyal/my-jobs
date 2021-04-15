import React from "react";
import { Navbar, NavbarContent } from "./styles";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/user/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  postJob: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
  },
  avatarContainer: {
    cursor: "pointer",
    marginLeft: "50px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: "10px",
    backgroundColor: "#D9EFFF",
    color: "#303F60",
  },
  headerEnd: {
    display: "flex",
    alignItems: "center",
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleLogout = (event) => {
    props.logoutUser();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    props.history.push("/login");
    setOpen(false);
  };

  return (
    <Navbar>
      <NavbarContent>
        <Link to="/">
          <h1>
            My<span>Jobs</span>
          </h1>
        </Link>
        <div className={classes.headerEnd}>
          {props.recruiter ? (
            <Link to="/post-job" className={classes.postJob}>
              Post a Job
            </Link>
          ) : null}
          {props.candidate ? (
            <Link to="/applied-jobs" className={classes.postJob}>
              Applied Jobs
            </Link>
          ) : null}

          <div
            className={classes.avatarContainer}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Avatar className={classes.avatar}>
              {props.user.data.name[0].toUpperCase()}
            </Avatar>
            <AiFillCaretDown />
          </div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
