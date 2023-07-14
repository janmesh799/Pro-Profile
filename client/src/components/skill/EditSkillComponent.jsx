import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Modal,
  Button,
  Box,
  TextField,
  FormControl,
} from "@mui/material";
import { Container } from "@mui/system";
import { toast } from "react-toastify";
import { editSkills } from "../../store/profile/profileSlice";

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
const arrayToString = (arr) => {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] + ", ";
  }
  return res.substring(0, res.length - 2);
};
const EditSkillComponent = (props) => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [skill, setSkill] = useState(arrayToString(props.skills));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitHandler = () => {
    // dispatch(editProject({ projectId, project: proj, authToken }));
    // newSkills = skills.split(",");
    dispatch(editSkills({ skills:  skill.trim() ===''?[]:skill.split(","), authToken }));
    handleClose();
    toast("edited! wait window is refreshing");
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
  return (
    <div>
      <Button
        sx={{ margin: "0rem 0rem 1rem 0rem" }}
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        EDIT SKILLS
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Edit SKILL
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
                onChange={(e) => {
                  setSkill(e.target.value);
                }}
                value={skill}
                name="skill"
                id="skill"
                label="skills (separated by commas)"
                variant="filled"
              />
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
};

export default EditSkillComponent;
