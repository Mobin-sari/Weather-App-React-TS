import { useInput } from "../context/InputConext";

function InputSearch() {
  const { search, handleInputChange } = useInput();

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      {search}
    </div>
  );
}

export default InputSearch;
