// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import Navbar from "./navbar/Navbar";
import $ from 'jquery';
import { useState } from "react";
import useTheme from "./context";
import Loader from "./loader/Loader";
import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const sticky_navbar = () => {
    var second_navbar = $('.second-navbar');
    window.addEventListener("scroll", function () {
      var elementOffset = second_navbar.offset().top;
      if (elementOffset > 80) {
        $(second_navbar).addClass('sticky')
      }
      else {
        $(second_navbar).removeClass('sticky')
      }
    });
  }


  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const theme = useTheme()
  const [loaded, setLaoded] = useState(false)
  // const [dark_theme, setDark_theme] = useState('dark')

  $("#nav-icon1").on("click", function () {
    $(this).toggleClass("open");
    $("#menu").toggleClass("show");
  });

  useEffect(() => {
    // before loading
    setInterval(() => {
      setLaoded(true)
      sticky_navbar()
    }, 2000);
  })

  return (

    <BrowserRouter>
      {loaded ? (<div className={`App ${theme.theme}`}>
        <Menu />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home cursorVariant={cursorVariant} textEnter={textEnter} textLeave={textLeave} />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>) : <Loader />}
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>
      <h1>AAAAAAAAAAAAa</h1>

    </BrowserRouter>
  );
}

export default App;
