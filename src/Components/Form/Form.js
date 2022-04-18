import { useEffect, useState } from 'react';
import Helper from '../../helper';
import './Form.css';

function Form(props){

    const [shopName, setShopName] = useState('Generated Shop Name...');
    const [varies, setVaries] = useState(0);
    const [common, setCommon] = useState(0);
    const [uncommon, setUncommon] = useState(0);
    const [rare, setRare] = useState(0);
    const [veryRare, setVeryRare] = useState(0);
    const [legendary, setLegendary] = useState(0);
    const [artifact, setArtifact] = useState(0);

    const [formDataCounts, setFormDataCounts] = useState();
    const [formDataItems, setFormDataItems] = useState();

    useEffect(() => {
        if(formDataCounts && formDataItems){
            generateShop();
        }
    }, [formDataCounts, formDataItems])


    const handleChange = (e) => {
        let targetID = e.target.id;
        let targetVal = e.target.value;
        switch(targetID){
            case 'varies':
                setVaries(parseInt(targetVal));
                break;
            case 'common':
                setCommon(parseInt(targetVal));
                break;
            case 'uncommon':
                setUncommon(parseInt(targetVal));
                break;
            case 'rare':
                setRare(parseInt(targetVal));
                break;
            case 'very-rare':
                setVeryRare(parseInt(targetVal));
                break;
            case 'legendary':
                setLegendary(parseInt(targetVal));
                break;
            case 'artifact':
                setArtifact(parseInt(targetVal));
                break;
            default:
                break;
        }
    }

    const handleNameChange = (e) => {
        setShopName(e.target.value);
    }

    //takes the submit button and generates counts for each tier
    //in an object and sends to the shop component props callback
    const handleSubmit = (e) => {
        e.preventDefault();
        if(varies === 0 && common === 0 && uncommon === 0 && rare === 0 && veryRare === 0 && legendary === 0 && artifact === 0){
            alert('Please enter a value in at least one category');
            return;
        }
        else{
            let data = {
                varies: varies,
                common: common,
                uncommon: uncommon,
                rare: rare,
                veryRare: veryRare,
                legendary: legendary,
                artifact: artifact
            };
            let itemData = Helper.sortItemsForShop();
            let numberData = Helper.generateShopItemCounts(data);
            setFormDataCounts(numberData);
            setFormDataItems(itemData);
            let loc = document.getElementById('shop');
            loc.style.height = '100vh';
            loc.style.padding = '1rem 0';
            loc.scrollIntoView({behavior: 'smooth'});
        }
    }

    const generateShop = () => {
        props.handleFormData(shopName, Helper.generateShop(formDataCounts, formDataItems));
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className='Form'>

        <div className='container'>
        <input className='input-name' value={shopName} onChange={(e) => handleNameChange(e)} type='text'/>

            <div>
                <label>1d10 Items of varying rarity</label>
                <select id='varies' onChange={(e) => handleChange(e)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <div>
                <label>1d10 Common Items</label>
                <select id='common' onChange={(e) => handleChange(e)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <div>
                <label>1d10 Uncommon Items</label>
                <select id='uncommon' onChange={(e) => handleChange(e)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <div>
                <label>1d10 Rare Items</label>
                <select id='rare' onChange={(e) => handleChange(e)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <div>
                <label>1d10 Very-Rare Items</label>
                <select id='very-rare' onChange={(e) => handleChange(e)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <div>
                <label>1d10 Legendary Items</label>
                <select id='legendary' onChange={(e) => handleChange(e)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <div>
                <label>1d10 Artifact Items</label>
                <select id='artifact' onChange={(e) => handleChange(e)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <button type='submit'>Generate Shop</button>
        </div>
            
        </form>
    );
}
export default Form;