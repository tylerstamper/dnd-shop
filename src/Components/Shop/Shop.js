import Form from '../Form/Form';
import Table from '../Table/Table';
import { useEffect, useState } from 'react';

function Shop(){

    const [name, setName] = useState(null);
    const [data, setData] = useState(null);
    
    //takes data generated in a Helper.js call from Form.js and sent back with a callback
    // arg order shop name, shop data
    const handleFormData = (name, data) => {
        setName(name);
        setData(data);
    }

    return(
        <div>
            <Form handleFormData={(counts, items)  => handleFormData(counts, items)}/>
            <Table data={data === null ? null : data} name={name === null ? null : name}/>
        </div>
    );
}

export default Shop;