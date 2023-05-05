import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Navbar from "./components/Navbar.jsx"

import Alert from "./components/Alert.jsx"
import Profile from "./pages/Profile.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import store from "./store/store.js"
import Navbar2 from './components/Navbar2.jsx';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {// <Navbar />
          }
          <Navbar2 />
          <Alert />
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
    </div>
  );
}

export default App;
