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
import { editExperience } from "../../../store/profile/profileSlice";
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

export default function EditExperienceModal(props) {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [exp, setExp] = useState(props.experience);
  const [date, SetDate] = useState({
    start: dayjs(exp.tenure.start),
    end: dayjs(exp.tenure.end),
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setExp({ ...exp, [id]: value });
  };
  const submitHandler = () => {
    const experienceId = exp._id;
    exp.tenure = date;
    dispatch(editExperience({ experienceId, experience: exp, authToken }));
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
        EDIT Experience
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
            Edit Experience
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
                value={exp.company}
                name="company"
                id="company"
                label="company"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={exp.position}
                name="position"
                id="position"
                label="position"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={exp.grade}
                name="grade"
                id="grade"
                label="grade"
                variant="filled"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  margin: "auto",
                  marginTop: "1rem",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ margin: "0rem 0.5rem 0rem 0.5rem" }}
                    format="DD-MM-YYYY"
                    label="start Date"
                    value={date.start}
                    onChange={(newValue) =>
                      SetDate({ ...date, ["start"]: newValue })
                    }
                  />
                  <DatePicker
                    sx={{ margin: "0rem 0.5rem 0rem 0.5rem" }}
                    format="DD-MM-YYYY"
                    label="End Date"
                    value={date.end}
                    onChange={(newValue) =>
                      SetDate({ ...date, ["end"]: newValue })
                    }
                  />
                </LocalizationProvider>
              </div>
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={exp.description}
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
