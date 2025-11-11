import { useLocation } from "react-router-dom";
import styles from "./CharacterDetails.module.css";

export default function CharacterDetails() {
  const { state } = useLocation();
  if (!state) return <p>No character data</p>;

  return (
    <div className={styles.wrapper}>
      <img src={state.image} alt={state.name} />
      <div>
        <h1>{state.name}</h1>
        <p><strong>House:</strong> {state.house}</p>
        <p><strong>Actor:</strong> {state.actor}</p>
        <p><strong>Date of Birth:</strong> {state.dateOfBirth}</p>
      </div>
    </div>
  );
}
