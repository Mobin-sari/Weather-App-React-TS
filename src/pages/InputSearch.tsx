import { useInput } from "../context/InputConext";
import { WrapperSearch } from "../styles/styled";

function InputSearch() {
  const { search, handleInputChange }: any | undefined = useInput();

  return (
    <div className="mt-7 ml-64 w-full flex">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Write a city name exmple: Tehran"
        className="w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <WrapperSearch>
        <p> {search}</p>
      </WrapperSearch>
    </div>
  );
}

export default InputSearch;
