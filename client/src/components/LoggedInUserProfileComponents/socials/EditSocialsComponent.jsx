import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import {
  Typography,
  Modal,
  Button,
  Box,
  TextField,
  FormControl,
} from "@mui/material";
import { Container } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { editSocials } from "../../../store/profile/profileSlice";
import { toast } from "react-toastify";
const style = {
  "@media (max-width: 480px)": {
    width: "75vw",
  },
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25vw",
  bgcolor: "background.paper",
  border: "2px solid none",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  width: "100%",
  margin: "auto",
  marginTop: "0.75rem",
};

export default function EditSocialsComponent(props) {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [platform, setPlatform] = useState("");
  const [github, setGithub] = useState(props.socials.github);
  const [linkedin, setLinkedin] = useState(props.socials.linkedin);
  const [codechef, setCodechef] = useState(props.socials.codechef);
  const [leetcode, setLeetcode] = useState(props.socials.leetcode);
  const [codeforces, setCodeforces] = useState(props.socials.codeforces);
  const [hackerearth, setHackerEarth] = useState(props.socials.hackerearth);
  const [hackerrank, setHackerrank] = useState(props.socials.hackerrank);
  const [geeksforgeeks, setGeeksforgeeks] = useState(
    props.socials.geeksforgeeks
  );
  const handleChange = (event) => {
    setPlatform(event.target.value);
  };
  const submitHandler = () => {
    const newSocials = {
      github,
      linkedin,
      leetcode,
      codechef,
      codeforces,
      hackerearth,
      hackerrank,
      geeksforgeeks,
    };
    dispatch(editSocials({ socials: newSocials, authToken }));
    handleClose();
    toast("Socials Edited. wait! window is refreshing");
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  return (
    <div style={{ display: "flex", margin: "auto 0rem auto 0rem" }}>
      <Button
        sx={{ margin: "0rem 0rem 1rem 0rem" }}
        variant="contained"
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        EDIT Socials
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-label="modal-modal-title"
        aria-describe="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Edit Socials
          </Typography>
          <Container>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <InputLabel id="demo-simple-select-label">Platform</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={platform}
                label="Platform"
                onChange={handleChange}
              >
                <MenuItem value={1}>GitHub</MenuItem>
                <MenuItem value={2}>LinkedIn</MenuItem>
                <MenuItem value={3}>LeetCode</MenuItem>
                <MenuItem value={4}>CodeChef</MenuItem>
                <MenuItem value={5}>CodeForces</MenuItem>
                <MenuItem value={6}>HackerRank</MenuItem>
                <MenuItem value={7}>HackerEarth</MenuItem>
                <MenuItem value={8}>GeeksForGeeks</MenuItem>
              </Select>
              {platform === 1 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setGithub({ ...github, ["username"]: e.target.value });
                    }}
                    value={github.username}
                    name="gitUsername"
                    id="gitUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setGithub({ ...github, ["description"]: e.target.value });
                    }}
                    value={github.description}
                    name="gitDescription"
                    id="gitDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setGithub({ ...github, ["url"]: e.target.value });
                    }}
                    value={github.url}
                    name="gitUrl"
                    id="gitUrl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              {platform === 2 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setLinkedin({
                        ...linkedin,
                        ["username"]: e.target.value,
                      });
                    }}
                    value={linkedin.username}
                    name="LinkedinUsername"
                    id="LinkedinUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setLinkedin({
                        ...linkedin,
                        ["description"]: e.target.value,
                      });
                    }}
                    value={linkedin.description}
                    name="LinkedinDescription"
                    id="LinkedinDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setLinkedin({ ...linkedin, ["url"]: e.target.value });
                    }}
                    value={linkedin.url}
                    name="LinkedinUrl"
                    id="LinkedinUrl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              {platform === 3 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setLeetcode({
                        ...leetcode,
                        ["username"]: e.target.value,
                      });
                    }}
                    value={leetcode.username}
                    name="LeetcodeUsername"
                    id="LeetcodeUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setLeetcode({
                        ...leetcode,
                        ["description"]: e.target.value,
                      });
                    }}
                    value={leetcode.description}
                    name="LeetcodeDescription"
                    id="LeetcodeDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setLeetcode({
                        ...leetcode,
                        ["url"]: e.target.value,
                      });
                    }}
                    value={leetcode.url}
                    name="LeetcodeUrl"
                    id="LeetcodeUrl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              {platform === 4 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setCodechef({
                        ...codechef,
                        ["username"]: e.target.value,
                      });
                    }}
                    value={github.username}
                    name="CodechefUsername"
                    id="CodechefUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setCodechef({
                        ...codechef,
                        ["description"]: e.target.value,
                      });
                    }}
                    value={codechef.description}
                    name="CodechefDescription"
                    id="CodechefDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setCodechef({ ...codechef, ["url"]: e.target.value });
                    }}
                    value={codechef.url}
                    name="CodechefUrl"
                    id="CodechefUrl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              {platform === 5 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setCodeforces({
                        ...codeforces,
                        ["username"]: e.target.value,
                      });
                    }}
                    value={codeforces.username}
                    name="CodeforcesUsername"
                    id="CodeforcesUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setCodeforces({
                        ...codeforces,
                        ["description"]: e.target.value,
                      });
                    }}
                    value={codeforces.description}
                    name="CodeforcesDescription"
                    id="CodeforcesDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setCodeforces({ ...codeforces, ["url"]: e.target.value });
                    }}
                    value={codeforces.url}
                    name="codeForcesUrl"
                    id="codeForcesUrl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              {platform === 6 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setHackerrank({
                        ...hackerrank,
                        ["username"]: e.target.value,
                      });
                    }}
                    value={hackerrank.username}
                    name="HackerRankUsername"
                    id="HackerRankUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setHackerrank({
                        ...hackerrank,
                        ["description"]: e.target.value,
                      });
                    }}
                    value={hackerrank.description}
                    name="hackerRankDescription"
                    id="hackerRankDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setHackerrank({ ...hackerrank, ["url"]: e.target.value });
                    }}
                    value={hackerrank.url}
                    name="hackerrankUrl"
                    id="hackerrankUrl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              {platform === 7 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setHackerEarth({
                        ...hackerearth,
                        ["username"]: e.target.value,
                      });
                    }}
                    value={hackerearth.username}
                    name="hackerearthUsername"
                    id="hackerearthUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setHackerEarth({
                        ...hackerearth,
                        ["description"]: e.target.value,
                      });
                    }}
                    value={hackerearth.description}
                    name="hackerearthDescription"
                    id="hackerearthDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setHackerEarth({
                        ...hackerearth,
                        ["url"]: e.target.value,
                      });
                    }}
                    value={hackerearth.url}
                    name="hackerearthurl"
                    id="hackerearthurl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              {platform === 8 && (
                <section>
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setGeeksforgeeks({
                        ...geeksforgeeks,
                        ["username"]: e.target.value,
                      });
                    }}
                    value={geeksforgeeks.username}
                    name="geeksforgeeksUsername"
                    id="geeksforgeeksUsername"
                    label="username"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setGeeksforgeeks({
                        ...geeksforgeeks,
                        ["description"]: e.target.value,
                      });
                    }}
                    value={geeksforgeeks.description}
                    name="geeksforgeeksDescription"
                    id="geeksforgeeksDescription"
                    label="description"
                    variant="filled"
                  />
                  <TextField
                    sx={inputStyle}
                    onChange={(e) => {
                      setGeeksforgeeks({
                        ...geeksforgeeks,
                        ["url"]: e.target.value,
                      });
                    }}
                    value={geeksforgeeks.url}
                    name="geeksforgeeksUrl"
                    id="geeksforgeeksUrl"
                    label="url"
                    variant="filled"
                  />
                </section>
              )}
              <Button
                onClick={submitHandler}
                type="submit"
                color="secondary"
                sx={{ width: "30%", margin: "auto", marginTop: "1.5rem" }}
                variant="contained"
              >
                Edit
              </Button>
            </FormControl>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
