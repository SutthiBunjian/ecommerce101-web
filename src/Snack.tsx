import ClearButton from "./component/ClearButton";
import PageTab from "./component/PageTab";
import SearchBar from "./component/Searchbar";
import SnackItem from "./component/SnackItem";
import SubmitButton from "./component/SubmitButton";
import useTodo from "./hooks/useTodos";

export default function Snack(){
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
            <SnackItem onSelectedChange={handleSelectedChange}/>
            <div className="mx-auto w-full max-w-screen-lg">
            <SubmitButton onClick={saveSelectedItem}/>
            <ClearButton onClick={deleteItems}/>
            </div>
        </div>
    );
}