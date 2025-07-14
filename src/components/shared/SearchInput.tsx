import search from "../../assets/icons/search.svg";

const SearchInput = () => {
   return (
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-full">
         <input
            type="text"
            placeholder="جستجوی محصولات"
            className="bg-transparent focus:outline-none text-sm text-gray-500 w-full placeholder:text-gray-400"
         />
         <img
            src={search}
            alt="search logo"
         />
      </div>
   );
};

export default SearchInput;
