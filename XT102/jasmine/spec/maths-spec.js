
describe("testing maths functionality",()=>{
    it("should print greetings",()=>{
        console.log("test env set ");
    });
    it("should return 6",()=>{
        let res=add(3,3);
        expect(res).toBe(6);
    });
});