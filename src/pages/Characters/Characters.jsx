import { Link } from "react-router-dom";
import { fetchCharacters } from "../../api/characters";
import { useFetch } from "../../hooks/useFetch";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Characters.module.css";

export default function Characters() {
  const { data: characters, loading, error } = useFetch(fetchCharacters);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!characters.length) return <p>No characters found</p>;

  return (
    <div className={styles.grid}>
      {characters.map((c, i) => (
        <Link to={`/characters/${i}`} state={c} key={i}>
          <CharacterCard character={c} />
        </Link>
      ))}
    </div>
  );
}
