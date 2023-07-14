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
import { addExperience } from "../../../store/profile/profileSlice";
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

export default function AddExperienceModal() {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const { message, isMessage } = useSelector((state) => state.application);
  const [exp, setExp] = useState({
    company: "",
    position: "",
    tenure: {
      start: "",
      end: "",
    },
    grade: "",
    description: "",
  });
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
    exp.tenure.start = date.start;
    exp.tenure.end = date.end;
    dispatch(addExperience({ authToken: authToken, experience: exp }));
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
        ADD EXPERIENCE
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
            Add Experience
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
                Add
              </Button>
            </FormControl>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
