interface ClearButtonProps{
    onClick:() => void;
}

export default function ClearButton({onClick}:ClearButtonProps){
    return(
        <button type="submit" className="bg-pink-400 w-24 rounded-xl" onClick={onClick}>Clear</button>
    );
}