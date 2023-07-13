import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import store from "./store/store.js";
import { HashLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [loading, setLoading] = useState(true);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
        <HashLoader
          cssOverride={{
            display: `${store.getState().auth.isLoading ? "block" : "none"}`,
            margin: "auto",
            position: "absolute !important",
            background: "none",
            top: "10% !important",
          }}
          color="#5271FF"
        />
      </Provider>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
