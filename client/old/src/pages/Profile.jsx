import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Host } from "../constantVariables";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../store/auth/authSlice";
import axios from "axios";
import EducationCard from "../components/loggedIn_user_profile/education/EducationCard.jsx";
import { Container } from "@mui/system";

const Profile = () => {
  const { user, authToken } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !profile) {
      const fetchProfile = async () => {
        const config = {
          headers: {
            username: user.username,
          },
        };
        const response = await axios.get(
          `${Host}/api/profile/getprofile`,
          config
        );
        if (response.data.success) {
          setProfile(response.data.profile);
        } else {
          toast.error("can't fetch profile");
        }
      };
      fetchProfile();
    }
    if (authToken && !user) {
      dispatch(getUser(authToken));
    }
    if (!authToken) {
      toast.warn("Please login ");
      navigate("/login");
    }
  }, [authToken, dispatch, navigate, user, profile]);

  return (
    <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex",flexWrap:"wrap", justifyContent:"center   "}}>
            {profile.education.map((edu) => {
              return <EducationCard education={edu} />;
            })}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </Container>
  );
};

export default Profile;
