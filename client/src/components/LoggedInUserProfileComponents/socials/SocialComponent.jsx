import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const style ={
  boxStyle:{
    '@media (max-width:480px)':{
     width:"80%"
    },
    width:"35%",
    margin:"0.5rem"
  }
}

const SocialComponent = (props) => {
  const socials = props.socials;
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
      <SingleComponent title="GitHub" icon="fa-brands fa-github" social={socials.github} />
      <SingleComponent title="LinkedIn" icon="fa-brands fa-linkedin" social={socials.linkedin} />
      <SingleComponent title="LeetCode" icon="fa-solid fa-code" social={socials.leetcode} />
      <SingleComponent title="CodeChef" icon="fa-solid fa-code" social={socials.codechef} />
      <SingleComponent title="CodeForces" icon="fa-solid fa-code" social={socials.codeforces} />
      <SingleComponent title="HackerRank" icon="fa-brands fa-hackerrank" social={socials.hackerrank} />
      <SingleComponent title="HackerEarth" icon="fa-solid fa-code" social={socials.hackerearth} />
      <SingleComponent title="GeeksForGeeks" icon="fa-solid fa-code" social={socials.geeksforgeeks} />
    </div>
  );
};

const SingleComponent = (props) => {
  const card = (
    <Link  to={props.social.url}>
      <CardContent >
      <Typography sx={{ color:"black"}} variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          <i
            style={{ color: "black", fontSize: "200%", margin: "0rem 1rem" }}
            className={props.icon}
          ></i>
        </Typography>
        <Typography sx={{ color:"black"}} variant="h5" component="div">
          {props.social.username}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.social.description}
        </Typography>
        <Typography variant="body2">{props.social.link}</Typography>
      </CardContent>
    </Link>
  );
  return (
    <Box sx={style.boxStyle}>
      <Card
        sx={{
          margin: "1rem 0rem 1rem 0rem",
          boxShadow: "10px 5px 5px rgba(255, 255, 0,0.5)",
        }}
        variant="outlined"
      >
        {card}
      </Card>
      {
        // JSON.stringify(props)
      }
    </Box>
  );
};

export default SocialComponent;
