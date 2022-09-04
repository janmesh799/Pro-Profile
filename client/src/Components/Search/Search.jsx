import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  const [user, setuser] = useState("");
  const handleUser = (e) => {
    setuser(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/profile?${user}`);
  };
  return (
    <div>
      <Typography sx={{ textAlign: "center" }} variant="h3">
        Search for a user profile
      </Typography>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <TextField
            onChange={handleUser}
            value={user}
            id="user"
            label="username"
            variant="filled"
          />
          <Button type="submit" onClick={handleSubmit}>
            <SearchIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
