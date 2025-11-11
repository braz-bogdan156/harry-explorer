import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/spells">Spells</NavLink>
    </nav>
  );
}
