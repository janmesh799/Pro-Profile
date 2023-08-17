import React, { useEffect } from "react";
import SearchProfileBar from "../components/SearchProfileBar";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/application/applicationSlice";
import { getProfile } from "../store/profile/profileSlice";
import { getUser } from "../store/auth/authSlice";
import SearchedProfile from "../components/SearchedProfile";
import RandomProfile from "./RandomProfile";

const Home = () => {
  const { authToken, user } = useSelector((state) => state.auth);
  const param = new URLSearchParams(useLocation().search);
  const username = param.get("username");
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(username);
    if (authToken && !user) {
      console.log("dispatched getuser");
      dispatch(getUser(authToken));
      console.log("finished");
    }
    dispatch(setPage("home"));
    if (!(username === "" || username === null)) {
      dispatch(getProfile(username));
    }
  }, [dispatch, username, authToken, user]);

  return (
    <div style={{ margin: "0.5rem" }}>
      {username === "" || username === null ? (
        <>
          <SearchProfileBar />
          <RandomProfile />
        </>
      ) : (
        <SearchedProfile />
      )}
    </div>
  );
};

export default Home;
