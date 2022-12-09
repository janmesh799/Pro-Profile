import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import BioComponent from './profileComponents/BioComponent';
import EducationComponent from './profileComponents/EducationComponent';
import ProjectsComponent from './profileComponents/ProjectsComponent';
import AchievementsComponent from './profileComponents/AchievementsComponent';
import ExperienceComponent from './profileComponents/ExperienceComponent';
import SkillsComponent from './profileComponents/SkillsComponent';
import SocialsComponent from "./profileComponents/SocialsComponents"



const ProfileComponent = (props) => {
    const username = props.username;
    const [found, setFound] = useState(false)
    const [profile, setProfile] = useState({})
    const ELEMENTS = { EDUCATION: "EDUCATION", PROJECTS: "PROJECTS", ACHIEVEMENTS: "ACHIEVEMENTS", SKILLS: "SKILLS", EXPERIENCE: "EXPERIENCE", SOCIALS: "SOCIALS" };
    const [currentElement, setCurrentElement] = useState(ELEMENTS.EDUCATION)
    // const pages = [ "EDUCATION", "PROJECTS", "ACHIEVEMENTS", "SKILLS"];
    const pages = [

        {
            index: 1,
            name: "EDUCATION",
            color: "#CCE8DB"
        },
        {
            index: 2,
            name: "EXPERIENCE",
            color: "#C1D4E3"
        },
        {
            index: 3,
            name: "PROJECTS",
            color: "#BEB4D6"
        },
        {
            index: 4,
            name: "ACHIEVEMENTS",
            color: "#FADAE2"
        },
        {
            index: 5,
            name: "SKILLS",
            color: "#F8B3CA"
        },
        {
            index: 6,
            name: "SOCIALS",
            color: "#CC97C1"
        }
    ]
    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get(`http://localhost:5000/api/profile/getProfile`, {
                headers: {
                    username: username
                }
            })
            const data = response.data
            if (data.success) {
                setFound(true)
                setProfile(data.profile)
            }

        }
        fetchProfile()
    }, [username])
    if (!found) {
        return (
            <div>
                <h1>
                    Not Found
                </h1>
                <Link to="/">Go Back</Link>
            </div>
        )
    }
    else {
        return (
            <>

                <BioComponent bio={profile.bio} element={currentElement} />
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Container sx={{ display: "flex", flexDirection: "column", width: "12vw", margin: "1rem", height: "100%" }} >
                        {pages.map((page) => {
                            return (
                                <Button
                                    disabled={page.name === currentElement}
                                    sx={{ height: "5vw", backgroundColor: `${page.name === currentElement ? "white" : page.color}`, borderRadius: "0%", border: `${page.name === currentElement ? "2px solid black" : "none"}` }}
                                    key={page.index}
                                    onClick={() => setCurrentElement(page.name)}>
                                    <span style={{ color: "black", textShadow: "1px 1px grey", fontSize: "1rem", textDecoration: `${page.name === currentElement ? "underline" : ""}` }}>
                                        {(page.name === currentElement) ? (<b> {page.name}</b>) : (`${page.name}`)}
                                    </span>

                                </Button>
                            )
                        })}

                    </Container>
                    <Container>
                        {currentElement === ELEMENTS.EDUCATION && <EducationComponent education={profile.education} />}
                        {currentElement === ELEMENTS.PROJECTS && <ProjectsComponent projects={profile.project} />}
                        {currentElement === ELEMENTS.ACHIEVEMENTS && <AchievementsComponent achievements={profile.achievements} />}
                        {currentElement === ELEMENTS.SKILLS && <SkillsComponent skills={profile.skills} />}
                        {currentElement === ELEMENTS.EXPERIENCE && <ExperienceComponent experience={profile.experience} />}
                        {currentElement === ELEMENTS.SOCIALS && <SocialsComponent socials={profile.socials} />}


                    </Container>
                </div>
            </>
        )

    }
}

export default ProfileComponent