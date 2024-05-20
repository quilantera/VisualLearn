interface ButtonActionProps {
    bgColor?: "blue"|"red"|"green"|"yellow"|"purple";
    text: string;
    size?: "small"|"medium"|"large"|"extra";
    Icon?: React.ElementType;
    handleClick: ()=> void;
    buttonRef?: React.RefObject<HTMLButtonElement>;
}
export function ButtonAction( {bgColor="blue", text, Icon, size="medium", handleClick,buttonRef}:ButtonActionProps){
    const getTextSize =(size: string)=>{
        switch (size){
            case "small":
                return "text-lg ";
            case "medium":
                return "text-xl";
            case "large":
                return "text-2xl";
            case "extra":
                return "text-3xl";
            default:
                return "text-xl";
        }
    }
    const getColor = (bgColor: string)=>{
        switch (bgColor){
            case "red":
                return "bg-red-800 hover:bg-red-900 text-white";
            case "yellow":
                return "bg-yellow-800 hover:bg-yellow-900 text-white";
            case "purple":
                return "bg-purple-800 hover:bg-purple-950 text-white";
            case "green":
                return "bg-green-800 hover:bg-green-950 text-white";
            case "blue":
            default:
             return "bg-blue-900 hover:bg-blue-950 text-white";
            
        }
    }
    return (
        <button  
            ref={buttonRef}
            type="button" 
            onClick={()=>{handleClick()}}
            className={`h-fit self-end rounded-md  ${getColor(bgColor)} ${getTextSize(size)}  text-shadow px-[24px] py-[8px] font-normal duration-300 ease-in-out dark:border-2 dark:border-white dark:bg-black dark:font-semibold dark:hover:bg-white dark:hover:text-black`}
        >
           {Icon && <Icon/> }
            <h2>{text}</h2>
        </button>
    )
}