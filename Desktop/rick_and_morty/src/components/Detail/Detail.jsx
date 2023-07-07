import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams(); //en app definimos la ruta de detail con /detail/:id. Y en card link detail/:{id}.
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con este ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h2>{character && character.name} </h2>
      <h2>{character && character.species}</h2>
      <h2>{character && character.gender}</h2>
      <h2>{character && character.status}</h2>
      <h2>{character && character.origin && character.origin.name}</h2>
      <img
        src={character && character.image}
        alt={character && character.name}
      />
    </div>
  );
};

export default Detail;
