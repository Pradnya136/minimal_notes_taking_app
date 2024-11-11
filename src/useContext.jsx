import  { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Imported PropTypes

const SetContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

const Provider = ({ children }) => {
  const [selected, setSelected] = useState("");
  const [notes, setNotes] = useState([]);

  const valueToShare = {
    notes,
    setNotes,
    selected,
    setSelected,
  };

  return (
    <SetContext.Provider value={valueToShare}>
      {children}
    </SetContext.Provider>
  );
};


Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useNotesContext = () => {
  return useContext(SetContext);
};

export { Provider };
// eslint-disable-next-line react-refresh/only-export-components
export default useNotesContext;
