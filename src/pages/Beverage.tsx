import BeverageItem from "../component/BeverageItem";
import ClearButton from "../component/ClearButton";
import PageTab from "../component/PageTab";
import SearchBar from "../component/Searchbar";
import SubmitButton from "../component/SubmitButton";
import useTodo from "../hooks/useTodos";

export default function Beverage(){
    const {
        handleSelectedChange,
        saveSelectedItem,
        deleteItems,
        handleSearch
    } = useTodo();
    
    return(
        <div>
            <PageTab/>
            <SearchBar onSearch={handleSearch}/>
            <BeverageItem onSelectedChange={handleSelectedChange}/>
            <div className="mx-auto w-full max-w-screen-lg">
            <SubmitButton onClick={saveSelectedItem}/>
            <ClearButton onClick={deleteItems}/>
            </div>
        </div>
    );
}
