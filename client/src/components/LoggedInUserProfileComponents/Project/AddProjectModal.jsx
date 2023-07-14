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
import { addProject } from "../../../store/profile/profileSlice";
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
export default function AddProjectModal() {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [tech, setTech] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [proj, setProj] = useState({
    title: "",
    links: {
      github: "",
      live: "",
    },
    technologies: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setProj({ ...proj, [id]: value });
  };
  const submitHandler = () => {
    proj.technologies = tech.split(",");
    proj.links = { github: gitLink, live: liveLink };
    dispatch(addProject({ authToken: authToken, project: proj }));
    setOpen(false);
    toast("project added successfully. wait! window is refreshing");
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
        ADD PROJECT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-aria-labelledby="modal-modal-title"
        aria-aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Add Project
          </Typography>
          <Container>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={proj.title}
                name="title"
                id="title"
                label="title"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={(e) => {
                  setTech(e.target.value);
                }}
                value={tech}
                name="technologies"
                id="technologies"
                label="technologies (seperated by commas)"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={(e) => {
                  setGitLink(e.target.value);
                }}
                value={gitLink}
                name="github_link"
                id="github_link"
                label="github_link"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={(e) => {
                  setLiveLink(e.target.value);
                }}
                value={liveLink}
                name="live_link"
                id="live_link"
                label="live_link"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={proj.description}
                name="description"
                id="description"
                label="description"
                variant="filled"
              />
              <Button
                onClick={submitHandler}
                type="submit"
                color="secondary"
                sx={{ width: "30%", margin: "auto", marginTop: "1.5rem" }}
                variant="contained"
              >
                Add
              </Button>
            </FormControl>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
