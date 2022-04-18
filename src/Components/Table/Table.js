import { useEffect, useState } from 'react';
import Row from '../Row/Row';
import './Table.css';

function Table(props){
    
    const [showing, setShowing] = useState(false);

    useEffect(() => {
        if(props.data !== null && props.name !== null){
            setShowing(true);
        }
        else{
            setShowing(false);
        }
    },[props.data])

    const showFullData = (item) => {
        alert(JSON.stringify(item));
    }

    return(
        <div className='table-container' id='shop'>
            {showing ? 
            <table className='Table'>
                <thead className='table-header'>
                    <tr>
                        <th colSpan={3}>{props.name && props.name}</th>
                    </tr>
                    <tr>
                        <th>Item</th>
                        <th>Rarity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {props.data && props.data.Varies !== undefined ? props.data && props.data.Varies.map(item => {
                        return <Row onClick={(item) => showFullData(item)} key={item.index} item={item}/>
                    })
                    :
                    <></>}
                    
                    {props.data && props.data.Common !== undefined ? props.data && props.data.Common.map(item => {
                        return <Row key={item.index} item={item}/>
                    })
                    :
                    <></>}
                    
                    {props.data && props.data.Uncommon !== undefined ? props.data && props.data.Uncommon.map(item => {
                        return <Row key={item.index} item={item}/>
                    })
                    :
                    <></>}
                    
                    {props.data && props.data.Rare !== undefined ? props.data && props.data.Rare.map(item => {
                        return <Row key={item.index} item={item}/>
                    })
                    :
                    <></>}
                    
                    {props.data && props.data['Very Rare'] !== undefined ? props.data && props.data['Very Rare'].map(item => {
                        return <Row key={item.index} item={item}/>
                    })
                    :
                    <></>}
                    
                    {props.data && props.data.Legendary !== undefined ? props.data && props.data.Legendary.map(item => {
                        return <Row key={item.index} item={item}/>
                    })
                    :
                    <></>}
                    
                    {props.data && props.data.Artifact !== undefined ? props.data && props.data.Artifact.map(item => {
                        return <Row key={item.index} item={item}/>
                    })
                    :
                    <></>}
                </tbody>
            </table>
            :
            <></>
            }
        </div>
    );
}
export default Table;