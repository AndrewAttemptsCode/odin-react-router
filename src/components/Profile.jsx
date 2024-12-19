import { Link, useParams } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";
import Wimpy from "./Wimpy";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Welcome to the profile page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/profile/popeye">Popeye</Link>
          </li>
          <li>
            <Link to="/profile/spinach">Spinach</Link>
          </li>
          <li>
            <Link to="/profile/wimpy">Wimpy</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {name === 'spinach' ? (
        <Spinach />
      ) : name === 'popeye' ? (
        <Popeye />
      ) : name === 'wimpy' ? (
        <Wimpy />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
}

export default Profile;