import { dummyData } from "../data/items";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { Item } from "../types/Item";

interface SnackItemProps{
    onSelectedChange: (item:Item, selected:boolean) =>void;
}

export default function SnackItem({onSelectedChange} : SnackItemProps){

    const [items,setItems] = useState(dummyData);

    function setItemSelected(item:Item , selected: boolean){
        setItems((prevItems) => prevItems.map(prevItem => (
            prevItem.id === item.id ? {...prevItem,selected} : prevItem
        )))
        onSelectedChange(item,selected)
    }
    
return(
    <div className="bg-cyan-400 p-7">
        <div className="mx-auto w-full max-w-screen-lg">
            <h3 className="text-xl">Snack: </h3>
   
                <div>
                    <div>
                        {items.filter(item =>item.type === "snack").map((item)=>(
                        <MenuItem
                        key={item.id}
                        item ={item}
                        onSelectedChange={(selected) => setItemSelected(item, selected)}
                        />
                        ))}
                    
                    </div>
                </div>
        </div>
    </div>
);

}