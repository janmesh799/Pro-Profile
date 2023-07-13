import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Navbar from "./components/Navbar.jsx"
import Profile from "./pages/Profile.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import store from "./store/store.js"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </Provider>

      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
  );
}

export default App;
