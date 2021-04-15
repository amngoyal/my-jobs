import React from "react";
import { connect } from "react-redux";
import { PostedJobs, AvailableJobs } from "../";

const Home = (props) => {
  const { user } = props;

  return (
    <div>
      {user.data ? (
        user.data.userRole ? (
          <AvailableJobs />
        ) : (
          <PostedJobs />
        )
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
