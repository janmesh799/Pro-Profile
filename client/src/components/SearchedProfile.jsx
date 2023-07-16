import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EducationCard from "./SearchedProfileComponents/EducationCard";
import ExperienceCard from "./SearchedProfileComponents/ExperienceCard";
import ProjectCard from "./SearchedProfileComponents/ProjectCard";
import AchievementCard from "./SearchedProfileComponents/AchievementCard";
import SocialCards from "./SearchedProfileComponents/SocialCards";

const SearchedProfile2 = () => {
  const profile = useSelector((state) => state.profile);
  if (!profile.isFound)
    return (
      <div>
        <Typography> No profile found</Typography>
        <Link to="/">Find Another</Link>
      </div>
    );
  return (
    <div>
      <section>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Basic Details
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "0 15%" }}>
          <p style={{ width: "40%" }}>
            <b>Name: </b> &nbsp;{profile.bio.name}
          </p>
          <p style={{ width: "40%" }}>
            <b>About: </b> &nbsp;{profile.bio.about}
          </p>
          <p style={{ width: "40%" }}>
            <b>Email: </b> &nbsp;{profile.bio.email}
          </p>
          <p style={{ width: "40%" }}>
            <b>Gender: </b> &nbsp;{profile.bio.gender}
          </p>
          <p style={{ width: "40%" }}>
            <b>Phone: </b> &nbsp;{profile.bio.contact.phone}
          </p>
          <p style={{ width: "40%" }}>
            <b>Place: </b> &nbsp;{profile.bio.contact.place}
          </p>
        </div>
      </section>
      {profile.education.length > 0 ? (
        <section style={{ textAlign: "center" }}>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            Education
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {profile.education.map((edu) => {
              return <EducationCard education={edu} />;
            })}
          </div>
        </section>
      ) : (
        <section></section>
      )}
      {profile.experience.length > 0 ? (
        <section style={{ textAlign: "center" }}>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            Experience
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {profile.experience.map((exp) => {
              return <ExperienceCard experience={exp} />;
            })}
          </div>
        </section>
      ) : (
        <section></section>
      )}
      {profile.experience.length > 0 ? (
        <section style={{ textAlign: "center" }}>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            Project
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {profile.project.map((proj) => {
              return <ProjectCard project={proj} />;
            })}
          </div>
        </section>
      ) : (
        <section></section>
      )}
      {profile.experience.length > 0 ? (
        <section style={{ textAlign: "center" }}>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            Achievement
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {profile.achievement.map((achieve) => {
              return <AchievementCard achievement={achieve} />;
            })}
          </div>
        </section>
      ) : (
        <section></section>
      )}
      
      <section style={{ textAlign: "center" }}>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Socials
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <SocialCards socials={profile.socials} />
        </div>
      </section>
    </div>
  );
};

export default SearchedProfile2;
