export const fetchCharacters = async () => {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  if (!res.ok) throw new Error("Failed to load characters");
  return res.json();
};