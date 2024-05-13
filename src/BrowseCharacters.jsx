import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BrowseCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const PUBLIC_KEY = "6216d5a391b451b7eff5d5b213f97523";
  const HASH_KEY = "1b53898a95fd9ee6fb2350401ab15999";

  useEffect(() => {
    const fetchCharacters = async () => {
      const baseURL = "https://gateway.marvel.com/v1/public/characters";
      const url = `${baseURL}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}&limit=20`;
      try {
        const response = await axios.get(url);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.log("Failed to fetch characters", error);
      }
    };

    fetchCharacters();
  }, []);
  const handleCharacterSelect = (id) => {
    console.log("Selected Character ID:", id);
    setSelectedCharacterId(id);
  };

  return (
    <div>
      <div className="characters-grid">
        {characters.map((character) => (
          <div
            className="character-item"
            key={character.id}
            onClick={() => handleCharacterSelect(character.id)}
          >
            <h2>{character.name}</h2>
            <img
              className="character-img"
              src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`}
              alt={character.name}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
      {selectedCharacterId && (
        <CharacterDetail characterId={selectedCharacterId} />
      )}
    </div>
  );
};

export default BrowseCharacters;
