import React, { useEffect, useState } from 'react'
import { Host } from '../constantVariables'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { getUser } from '../store/auth/authSlice';
import {  Container, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios';
import EducationCardComponent from '../components/LoggedInUserProfileComponents/Education/EducationCardComponent';
import AddEducationModal from '../components/LoggedInUserProfileComponents/Education/AddEducationModal'
import AddExperienceModal from '../components/LoggedInUserProfileComponents/Experience/AddExperienceModal'
import ExperienceCardComponent from '../components/LoggedInUserProfileComponents/Experience/ExperienceCardComponent'
import ProjectCardComponent from '../components/LoggedInUserProfileComponents/Project/ProjectCardComponent'
import AddProjectModal from '../components/LoggedInUserProfileComponents/Project/AddProjectModal'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const Profile = () => {
    const { user, authToken } = useSelector(state => state.auth);
    const [profile, setProfile] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        if (user && !profile) {
            const fetchProfile = async () => {
                const config = {
                    headers: {
                        "username": user.username
                    }
                }
                const response = await axios.get(`${Host}/api/profile/getprofile`, config);
                // const response = await axios.get("https://pro-profile.vercel.app/api/profile/getprofile", config);
                if (response.data.success) {
                    setProfile(response.data.profile)
                }
                else {
                    toast.error("can't fetch profile")
                }
            }
            fetchProfile();
        }
        if (authToken && !user) {
            dispatch(getUser(authToken));
        }
        if (!authToken) {
            toast.warn("Please login ")
            navigate('/login')
        }
    }, [authToken, dispatch, navigate, user, profile])
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Container sx={{ marginTop: "2rem" }}>
            <Typography align='center' variant="h3">Your Profile !</Typography>
            {profile ? <Container style={{ marginTop: "2rem" }}>
                <Typography align='center' variant="h4" fontSize="xl" sx={{ mb: 0.5 }} >
                    <u >  {profile.bio.name}</u>
                </Typography>
                <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography variant='h5'>Bio</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", textAlign: "center" }}>
                            {profile.bio.about}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography variant='h5'>Education</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", textAlign: "center" }}>
                            {profile.education.map((edu) => {
                                return <EducationCardComponent education={edu} />
                            })}
                            <AddEducationModal />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography variant='h5'>Experience</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", textAlign: "center" }}>
                        {profile.experience.map((exp) => {
                            return <ExperienceCardComponent experience={exp} />
                        })}
                        <AddExperienceModal />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography variant='h5'>Projects</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", textAlign: "center" }}>
                    {profile.project.map((proj) => {
                        return <ProjectCardComponent project={proj} />
                    })}
                    <AddProjectModal />
                    </AccordionDetails>
                </Accordion>
                </div>
            </Container> : "plase wait! Your Profile is Being fetched"}
        </Container>
    )
}

export default Profile