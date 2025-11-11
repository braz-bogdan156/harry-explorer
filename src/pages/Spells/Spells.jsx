import { fetchSpells } from "../../api/spells";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Spells.module.css";

export default function Spells() {
  const { data: spells, loading, error } = useFetch(fetchSpells);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <ul className={styles.list}>
      {spells.map((spell, i) => (
        <li key={i}>
          <strong>{spell.name}</strong>: {spell.description}
        </li>
      ))}
    </ul>
  );
}
