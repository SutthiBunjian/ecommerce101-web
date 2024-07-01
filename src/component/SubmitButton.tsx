interface SubmitButtonProps{
    onClick:() => void;

}

export default function SubmitButton({onClick}: SubmitButtonProps){

    return(
        <button type="submit" className="bg-slate-400 w-24 rounded-xl" onClick={onClick}>Submit</button>
    );
}