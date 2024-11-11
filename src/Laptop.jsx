import "./Laptop.css";
import User_group from "../src/components/User_group/User_group";
import  Notes_group from "../src/components/Notes_group/Notes_group";

import Notes_L from "./components/Notes/Notes_L";
import UseContext from "./useContext";

function Laptop() {
  const { selected } = UseContext();

  return (
    <div className="laptop">
      <User_group />
      {selected.length > 0 ? <Notes_L /> : <Notes_group />}
    </div>
  );
}

export default Laptop;
