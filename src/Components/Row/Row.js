import { useEffect, useState } from "react";

function Row(props){

    const [price, setPrice] = useState('0');

    useEffect(() => {
    }, [])

    return(
        <tr>
            <td onClick={() => props.onClick(props.item)}>{props.item && props.item.name}</td>
            <td>{props.item &&  props.item.rarity.name}</td>
            <td><input type='text' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
        </tr>
    );
}

export default Row;