import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom"; // keep UI in sinc with URL
import { NavHaskLink, HaskLink } from "react-router-hash-link";
import { useState } from "react"; // Track data or properties from this function
// import something like resume from assets

export function Header() {}
const [isActive, setActive] = useState(false);
function toggleTheme() {
  let html = document.getElementsByTagName("html")[0];
  html.classList.toggle("light");
}
function closeMenu() {
  setActive(false);
}
