import { useState, FormEvent, ChangeEvent } from "react";

interface SeachBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SeachBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm.trim());
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-slate-500 p-5 ">
      <div className="relative flex justify-center">
        <form className="max-w-screen-lg w-full" onSubmit={handleSubmit}>
          <div className="relative flex items-center">
            <input
              type="search"
              className=" w-full rounded-xl p-1"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
            />

            <button className="absolute inset-y-0 right-0">
              <div
                className="
                    flex items-center pr-3 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
