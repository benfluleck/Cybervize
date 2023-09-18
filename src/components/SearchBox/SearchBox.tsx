import { FC, useState, useEffect } from 'react';

interface SearchBoxProps {
  handleFormChange?: (e: string) => void;
  searchValue? : string;
}

const SearchBox: FC<SearchBoxProps> = ({ handleFormChange, searchValue }) => {
  const [searchInput, setSearchInput] = useState(searchValue);


  useEffect(()=> {
      handleFormChange(searchInput)
  },[searchInput])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput( value );
  };

  
  return (
    <div className="w-full">
      <h2 className="text-3xl mb-4 font-bold">Search</h2>
      <input
        type="search"
        value={searchInput}
        onChange={handleChange}
        className="border-solid border-slate-400 border h-20 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none sm:text-ellipsis overflow-hidden"
        placeholder="You can search by drug name or disease"
      />
    </div>
  );
};

export default SearchBox;
