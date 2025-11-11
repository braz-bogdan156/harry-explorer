export const fetchSpells = async () => {
  const res = await fetch("https://hp-api.onrender.com/api/spells");
  if (!res.ok) throw new Error("Failed to load spells");
  return res.json();
};