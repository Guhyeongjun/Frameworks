
import { FaStar } from "react-icons/fa";

const Star=({selected=false,onSelect=f=>f})=>{
    return (
        <FaStar 
            color={selected?"red":"grey"} 
            size="3em"
            onClick={onSelect}
            //()=>setSelectedStars(i)
            //()=>setSelectedStars(0)
            //()=>setSelectedStars(1)
            //()=>setSelectedStars(2)
        />
    )
}

export default Star;