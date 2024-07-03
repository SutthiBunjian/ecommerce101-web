import BeverageItem from "../component/BeverageItem.tsx";
import ClearButton from "../component/ClearButton.tsx";
import FilteredItem from "../component/FilteredItem.tsx";
import JuiceItem from "../component/JuiceItem.tsx";
import PageTab from "../component/PageTab.tsx";
import SearchBar from "../component/Searchbar.tsx";
import SnackItem from "../component/SnackItem.tsx";
import SubmitButton from "../component/SubmitButton.tsx";
import useTodo from "../hooks/useTodos.ts";

function OrderHome(){
    const {
        handleSelectedChange,
        saveSelectedItem,
        deleteItems,
        handleSearch,
    } = useTodo();

    return(
        <>
        <PageTab/>
        <SearchBar onSearch={handleSearch}/>
        <FilteredItem  onSelectedChange={handleSelectedChange}/>
        <hr/>
        <BeverageItem onSelectedChange={handleSelectedChange}/>
        <hr/>
        <SnackItem onSelectedChange={handleSelectedChange}/>
        <hr/>
        <JuiceItem onSelectedChange={handleSelectedChange}/>
        <hr/>
        <div className="mx-auto w-full max-w-screen-lg">
        <SubmitButton onClick={saveSelectedItem}/>
        <ClearButton onClick={deleteItems}/>
        </div>
       
        </>

    );
}
export default OrderHome;