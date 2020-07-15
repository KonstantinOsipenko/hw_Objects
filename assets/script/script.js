let snowBoard = (gender,style,size,width,deflection,flexibility,name) =>{
    return{
    gender : gender,
    style : style,
    size : size,
    width : width,
    deflection : deflection,
    flexibility : flexibility,
    name : name
} 
};
let burton = snowBoard('male','freeride',156,'standart','rocker','twin','burton');
console.log(burton);
let burtonClone = {};
function clone () {
    for ( let key in burton) {
        burtonClone[key] = burton[key] 
    }
    return burtonClone;
}
const cloneBurton = JSON.parse(JSON.stringify(burton));
console.log(cloneBurton)
function count () {
    let counter = 0;
    for( let key in burton){
        if(typeof burton[key] == 'string'){
         counter++;
        }
    }
    return counter
}
console.log(count());

let burtonArray = Object.values(burton);
let newArr = [];
function stringBurton(array){
    for(let i=0; i< array.length; i++){
    if(typeof array[i] != "string"){
            continue;
    }else {
        newArr.push(array[i]); }
}
console.log('всего ' + newArr.length + ' строк');
}
stringBurton(burtonArray);