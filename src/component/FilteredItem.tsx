import React, { useState } from 'react';
import MenuItem from './MenuItem';
import SearchBar from './Searchbar';
import { dummyData } from '../data/items';
import { Item } from '../types/Item';

interface FilteredItemProps {
    onSelectedChange: (item: Item, selected: boolean) => void;
}

const FilteredItem: React.FC<FilteredItemProps> = ({ onSelectedChange }) => {
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);

    const handleSearch = (searchTerm: string) => {
        const filtered = dummyData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredItems(filtered);
    };

    return (
    
            <div className="mx-auto w-full max-w-screen-lg">
                <h3 className="text-xl">Filtered Items: </h3>
                <SearchBar onSearch={handleSearch} />
                <div className='bg-green-300 p-4'>
                    {filteredItems.map((item) => (
                        <div key={item.id}>
                            <MenuItem
                                item={item}
                                onSelectedChange={(selected) => onSelectedChange(item, selected)}
                            />
                        </div>
                    ))}
                </div>
            </div>

    );
};

export default FilteredItem;
