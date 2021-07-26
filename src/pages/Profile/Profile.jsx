import React from "react";
import { Wrap, Articles } from "./profile.style";
import { useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar";
import ProfileList from "../../components/SavedNews/SavedNews";

const Profile = () => {
  const profileList = useSelector((state) => state.newsReducer.profileNews);

  return (
    <Wrap>
      <Navbar />
      <h1>Профиль</h1>
      <Articles>
        {profileList && <ProfileList articles={profileList} />}
      </Articles>
    </Wrap>
  );
};

export default Profile;
