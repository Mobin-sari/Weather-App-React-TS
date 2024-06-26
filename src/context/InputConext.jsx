import { ChangeEvent, createContext, useContext, useState } from "react";

const inputContextData = createContext(undefined);

function InputConext({ children }) {
  const [search, setSearch] = useState("berlin");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <inputContextData.Provider value={{ search, handleInputChange }}>
      {children}
    </inputContextData.Provider>
  );
}

const useInput = () => {
  const cityOfSearched = useContext(inputContextData);
  return cityOfSearched;
};

export { useInput };
export default InputConext;
