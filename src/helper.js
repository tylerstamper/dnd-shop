
const Helper = {
    generateShopItemCounts(data){
        let newData = {
            Varies: data.varies > 0 ? Math.floor(Math.random() * data.varies) + 1 : 0,
            Common: data.common > 0 ? Math.floor(Math.random() * data.common) + 1 : 0,
            Uncommon: data.uncommon > 0 ? Math.floor(Math.random() * data.uncommon) + 1 : 0,
            Rare: data.rare > 0 ? Math.floor(Math.random() * data.rare) + 1 : 0,
            'Very Rare': data.veryRare > 0 ? Math.floor(Math.random() * data.veryRare) + 1 : 0,
            Legendary: data.legendary > 0 ? Math.floor(Math.random() * data.legendary) + 1 : 0,
            Artifact: data.artifact > 0 ? Math.floor(Math.random() * data.artifact) + 1 : 0,
        };
        return newData;
    },
    //beginning of fetch chain if else prevents pssthrough calls
    fetchItemsBroad(){
        if(localStorage.length === 361){
            console.log('data already in localstore')
            return;
        }
        else{
            console.log('data being gathered for localstore');
            fetch('https://www.dnd5eapi.co/api/magic-items')
            .then(res => {
                return res.json()
            })
            .then((res) => {
                this.fetchItemsIndividual(res);
            })
            .catch(function(e){
                console.log(e.message);
            })
        }
    },
    fetchItemsIndividual(res){
        for(let i = 0; i < res.results.length; i++){
            fetch('https://www.dnd5eapi.co' + res.results[i].url)
            .then(function(res){
                return res.json();
            })
            .then(function(res){
                localStorage[res.name] = JSON.stringify(res);
            })
        }
        console.log('data gathered');
    },
    sortItemsForShop(){
        let data = {
            'Varies': [],
            'Common': [],
            'Uncommon': [],
            'Rare': [],
            'Very Rare': [],
            'Legendary': [],
            'Artifact': []
        };
        for(let i = 0; i < localStorage.length; i++){
            let item = localStorage.getItem(localStorage.key(i));
            item = JSON.parse(item);
            data[item.rarity.name].push(item);
        }
        return data;
    },
    //check counts gather random items equal to counts from items
    generateShop(counts, items){
        let shop = {};
        let pushArray = [];
        Object.keys(counts).forEach(key => {
            pushArray = [];
            if(counts[key] > 0){
                for(let i = 0; i < counts[key]; i++){
                    let num = Math.floor(Math.random() * items[key].length);
                    console.log(items[key].length);
                    console.log(items[key][num]);
                    if(!pushArray.includes(items[key][num])){
                        pushArray.push(items[key][num]);
                    }
                    else{
                        return;
                        console.log('found dupe in array');
                    }
                }
                shop[key] = pushArray;
            }else{
                return;
            }
            console.log(pushArray);
        })
        return shop;
    },

};
export default Helper;
