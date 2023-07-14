import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Typography,
  Modal,
  Button,
  Box,
  TextField,
  FormControl,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Container } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { addAchievement, addExperience } from "../../../store/profile/profileSlice";
import { toast } from "react-toastify";
import {
  setMessage,
  setMessageNull,
} from "../../../store/application/applicationSlice";

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

export default function AddAchievementModal() {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [achieve, setAchieve] = useState({
    index: null,
    title: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setAchieve({ ...achieve, [id]: value });
  };
  const submitHandler = () => {
    const number = new Number(achieve.index);
    setAchieve({ ...achieve, ["index"]: number });
    dispatch(addAchievement({ authToken: authToken, achievement: achieve }));
    setOpen(false);
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
        ADD ACHIEVEMENT
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
            Add Achievement
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
                value={achieve.index}
                name="index"
                id="index"
                label="index"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={achieve.title}
                name="title"
                id="title"
                label="title"
                variant="filled"
              />

              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={achieve.description}
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
