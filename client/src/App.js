import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Search from "./Components/Search/Search";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Demo/> */}
        <Container
          maxWidth="false"
          sx={{
            margin: "0",
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
          }}
        >
          {/* <Demo/> */}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
