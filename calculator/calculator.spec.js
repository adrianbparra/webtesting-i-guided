const { add } = require('./calculator.js');

// test away!

describe("arithmatic functions", () =>{
    describe("add", () =>{
        it("should return the sum of 2 numbers", ()=>{
            expect(add(2,2)).toBe(4);
        })

        it("should throw an exception if the params are not numbers", () => {
            expect(()=>{add("blue", 3)}).toThrow()
            expect(()=>{add(3, "green")}).toThrow()
        })

        it("should be a 0 if no prams are included", () =>{
            const expected = 0;

            const actualresult = add()
            expect(actualresult).toBe(expected)
        })


        it("should return param if only one is provided",  () => {
            const expected = 4;

            const actualresult = add(4);

            expect(actualresult).toBe(expected)
        })

        it("should return addition when arg is an array", () =>{
            const expected = 12
            const actualresult=  add([3,5,4])

            expect(actualresult).toBe(expected)
        })
    })
})