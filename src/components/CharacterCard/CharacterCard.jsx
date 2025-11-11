import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }) {
  return (
    <div className={styles.card}>
      <img src={character.image || "/no-image.jpg"} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.house || "Unknown House"}</p>
    </div>
  );
}
