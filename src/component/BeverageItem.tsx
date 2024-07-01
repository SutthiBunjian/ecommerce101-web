import { dummyData } from "../data/items";
import MenuItem from "./MenuItem";
import { useState } from "react"
import { Item } from "../types/Item";

interface BeveragesItemProps{
    onSelectedChange: (item: Item, selected:boolean) =>void;
}

export default function BeverageItem({onSelectedChange}:BeveragesItemProps){
const [items,setItems] = useState(dummyData);



    function setItemSelected(item:Item, selected: boolean){
    setItems((prevItems) => 
        prevItems.map(prevItem => (
        prevItem.id === item.id ? 
        {...prevItem,selected} : prevItem
    )))
    onSelectedChange(item,selected)
}

return(
   <>
   <div className="bg-red-600 p-5">
        <div className="mx-auto w-full max-w-screen-lg">
                <h3 className="text-xl">Beverage: </h3>

                        <div className="">
                            {items.filter(item =>item.type === "beverage").map((item)=>(
                            <MenuItem
                            key={item.id}
                            item ={item}
                            onSelectedChange={(selected) => setItemSelected(item, selected)}
                            />
                            ))}
                        
                        </div>
            </div>   
    </div>             
    </>
       
);

}