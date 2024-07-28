// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import NavBar from "./components/NavBar";
// import Team from "./pages/Team";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="team" element={<Team />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Team from "./pages/Team";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BackgroundColorHandler />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="team" element={<Team />} />
        </Routes>
      </div>
    </>
  );
}

const BackgroundColorHandler = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/team":
        document.documentElement.style.backgroundColor = "#f7f8fb";
        break;
      case "/":
        document.documentElement.style.backgroundColor = "#ffffff"; // Default background color for home
        break;
      default:
        document.documentElement.style.backgroundColor = "#ffffff"; // Default background color for other routes
        break;
    }
  }, [location]);

  return null;
};

export default App;
