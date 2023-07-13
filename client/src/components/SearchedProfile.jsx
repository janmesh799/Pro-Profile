import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import BioComponent from './SearchedProfileComponents/BioComponent';
import EducationComponent from './SearchedProfileComponents/EducationComponent';
import ProjectsComponent from './SearchedProfileComponents/ProjectsComponent';
import AchievementsComponent from './SearchedProfileComponents/AchievementsComponent';
import ExperienceComponent from './SearchedProfileComponents/ExperienceComponent';
import SkillsComponent from './SearchedProfileComponents/SkillsComponent';
import SocialsComponent from "./SearchedProfileComponents/SocialsComponents"
import { useSelector } from 'react-redux';



const SearchedProfile = () => {
    const { isFound } = useSelector(state => state.profile);
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
    if (!isFound) {
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

                <BioComponent element={currentElement} />
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
                        {currentElement === ELEMENTS.EDUCATION && <EducationComponent />}
                        {currentElement === ELEMENTS.PROJECTS && <ProjectsComponent />}
                        {currentElement === ELEMENTS.ACHIEVEMENTS && <AchievementsComponent />}
                        {currentElement === ELEMENTS.SKILLS && <SkillsComponent />}
                        {currentElement === ELEMENTS.EXPERIENCE && <ExperienceComponent />}
                        {currentElement === ELEMENTS.SOCIALS && <SocialsComponent />}


                    </Container>
                </div>
            </>
        )

    }
}

export default SearchedProfile