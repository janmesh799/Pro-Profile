import { useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
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
import { editAchievement } from "../../../store/profile/profileSlice";
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

export default function EditAchievementModal(props) {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [achieve, setAchieve] = useState(props.achievement);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setAchieve({ ...achieve, [id]: value });
  };
  const submitHandler = () => {
    const achievementId = achieve._id;
    dispatch(
      editAchievement({ achievementId, achievement: achieve, authToken })
    );
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
        EDIT Achievement
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
            Edit Achievement
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
                label="index (only integer)"
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
                Edit
              </Button>
            </FormControl>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
