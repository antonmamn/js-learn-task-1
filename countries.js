const countriesList = require('./countries.json')

function getCountries(data) {

    let array = [];
    for (const country of Object.entries(data)) {
        array.push({name: country[1], code: country[0]})
    }
    // const array = Object.entries(countriesList).map(([x, y]) => ({ name: value, code :key }));
    return array
}

let countriesFormatedList=getCountries(countriesList)

function searchCountry(name){
    for (let i = 0; i < countriesFormatedList.length; i++) {
        if(countriesFormatedList[i].name===name) {
            return countriesFormatedList[i]

        }
    }
    // return countriesFormatedList.filter(x=>x.name===name)
}
function sortCountries(data){
    data.sort((a,b)=>{
        if (a.name>b.name) {return 1}
        else if  (b.name>a.name) {return -1}
        else {return 0}
    })
    return data
}
console.log( sortCountries(countriesFormatedList))