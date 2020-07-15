
describe ('function clone' , () => {
 it ('Should copy object not equal ' , () =>{
    expect(burton).not.equal(burtonClone);
 })
})
describe ('function count' , () =>{
    it('Should count string on object' ,() =>{
        expect(count()).to.equal(7)
    })
})
