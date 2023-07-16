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
import { toast } from "react-toastify";
import { editBio } from "../../../store/profile/profileSlice";
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

export default function EditBio(props) {
  const [bio, setBio] = useState(props.bio);

  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnChange = (e) => {
    setBio({ ...bio, [e.target.id]: e.target.value });
  };

  const submitHandler = () => {
    console.log(bio);
    dispatch(editBio({bio, authToken}));
    handleClose();
    toast("Bio Edited. wait! window is refreshing");
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "auto 0rem auto 0rem",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{ margin: "0rem 0rem 1rem 0rem" }}
        variant="contained"
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        EDIT Bio
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
            Edit Bio
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
                value={bio.name}
                name="name"
                id="name"
                label="Name"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={bio.about}
                name="about"
                id="about"
                label="About"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={(e) => {
                  const place = bio.contact.place;
                  setBio({
                    ...bio,
                    ["contact"]: { place: place, phone: e.target.value },
                  });
                }}
                value={bio.contact.phone}
                name="phone"
                id="phone"
                label="Phone"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={(e) => {
                  const phone = bio.contact.phone;
                  setBio({
                    ...bio,
                    ["contact"]: { place: e.target.value, phone: phone },
                  });
                }}
                value={bio.contact.place}
                name="place"
                id="place"
                label="Place"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={bio.email}
                name="email"
                id="email"
                label="Email"
                variant="filled"
              />
              <TextField
                sx={inputStyle}
                onChange={handleOnChange}
                value={bio.gender}
                name="gender"
                id="gender"
                label="Gender"
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
