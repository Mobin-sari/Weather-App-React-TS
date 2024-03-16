import { ChangeEvent, createContext, useContext, useState } from "react";

interface InputValueContextType {
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const inputContextData = createContext<InputValueContextType | undefined>(
  undefined
);

function InputConext({ children }: JSX.ElementChildrenAttribute) {
  const [search, setSearch] = useState<string>("tehran");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
