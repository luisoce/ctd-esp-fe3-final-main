import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { name, username, id } = item;

  const { dispatch } = useContextGlobal();
  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: item });
  };

  return (
    <div className="card">
      <Link to={"/detail/" + id}>
        <div>
          <img src="../../public/images/doctor.jpg" alt="Doctor" width={210} />
          <h3>{name}</h3>
          <h4>
            {id} - {username}
          </h4>
        </div>
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
