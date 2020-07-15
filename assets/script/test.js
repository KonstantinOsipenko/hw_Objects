
describe ('function clone' , () => {
 it ('Should copy object not equal ' , () =>{
    expect(burton).not.equal(burtonClone);
 })
})
describe ('function count' , () =>{
    it('Should count string on object' ,() =>{
        function count () {
            let counter = 0;
            for( let key in burton){
                if(typeof burton[key] == 'string'){
                 counter++;
                }
            }
            return counter
        }
        expect(count()).to.equal(6)
    })
})