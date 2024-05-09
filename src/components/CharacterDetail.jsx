import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetail = ({characterId}) => {
    const [characterDetail, setCharacterDetail] = useState();

    const PUBLIC_KEY = "6216d5a391b451b7eff5d5b213f97523";
    const HASH_KEY = "1b53898a95fd9ee6fb2350401ab15999";

    useEffect(() =>{
        console.log("Fetching details for ID:", characterId); 
        if (characterId){
            const fetchCharacterDetails = async () =>{
            const baseURL = "https://gateway.marvel.com/v1/public/characters";
            const url = `${baseURL}/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}&limit=20`;
            const response = await axios.get(url);
                console.log(response);
            if (response && response.data) {
                setCharacterDetail(response.data.data.results[0]);
                console.log(response.data.data.results[0].id);
                console.log(characterDetail.description)
            }
        };
        fetchCharacterDetails();
    }
}, [characterId]);
    
    
     
    
    return (
      <div className="box">
        {characterDetail && (
          <div>
            <h2>{characterDetail.name}</h2>
            <p>{characterDetail.description || "No description available"}</p>
            <h3>Comics</h3>
            <ul>
              {characterDetail.comics.items.map((comic, index) => (
                <li key={index}>{comic.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
};

export default CharacterDetail;