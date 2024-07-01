import { Item } from "../types/Item";

interface MenuItemProps{
    item:Item;
    onSelectedChange :(selected:boolean) => void;
    onSearch?:(name:string)=> void;
}

export default function MenuItem({item,onSelectedChange}:MenuItemProps){
    
    return(
        <div>
            <label className="my-1 flex items-center gap-2 border rounded-lg bg-white hover:bg-slate-200">
                <input
                type="checkbox"
                checked={item.selected}
                onChange={(e) => onSelectedChange(e.target.checked)}
                />
                <span className={item.selected? "line-through":""}>
                    {item.name}
                    {item.option}
                </span>
            </label>
        </div>
    );
}