import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { getUser } from '../store/auth/authSlice';
import { Button, Container, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios';
import EducationCardComponent from '../components/profile/EducationCardComponent';
import AddEducationModal from '../components/profile/AddEducationModal';

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
    const [profile, setProfle] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            const fetchProfile = async () => {
                const config = {
                    headers: {
                        "username": user.username
                    }
                }
                const response = await axios.get("https://pro-profile.vercel.app/api/profile/getprofile", config);
                if (response.data.success) {
                    setProfle(response.data.profile)
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
                            bio
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
                            <Typography>Collapsible Group Item #2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography>Collapsible Group Item #3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container> : "plase wait! profile is begin fetched"}
        </Container>
    )
}

export default Profile