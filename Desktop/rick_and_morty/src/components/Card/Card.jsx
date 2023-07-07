import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../components/Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorit = (id) => {
    setIsFav(!isFav);
    if (isFav) {
      removeFav(id);
    } else {
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.contain}>
      <button onClick={() => handleFavorit(id)}>{isFav ? "❤️" : "🤍"}</button>

      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p className="ha">{name}</p>
      <p className="ha">{species}</p>
      <p className="ha">{gender}</p>
      <p className="ha">{status}</p>
      <p className="ha">{origin}</p>
      <img src={image} alt="" className="imge" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
