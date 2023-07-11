const {add,error,promiseTest,app} = require("../index");
const supertest = require("supertest")


// For addition value result
test('toBe',()=>{
    expect(add(1,2)).toBe(3)
})


// For addition value less than
test('toBeLessThan',()=>{
    expect(add(1,2)).toBeLessThan(7)
})



// For string addition match
test('toMatch',()=>{
    expect(add("Hello","Workd")).toMatch(/Hello/)
})

// describe("I am block",()=>{
//     test("I am executing in a block",()=>{
//         expect(()=> error()).toThrow("I am new error")
//     })
//     test("toThrow",()=>{
//         expect(()=> error()).toThrow("I am new error")
//     })
// });

test('promiseTest',()=>{
    promiseTest(1,2).then(data =>{
        expect(data).toBe("+ve")
    }).catch(err =>{
        expect(err).toBe("-ve")
    })
})

test("Test Get Users Api",async()=>{
    //Check if api return users array
    await supertest(app).get("/users").expect(200).then(result=>{
        expect(result && result.body && result.body.users && Array.isArray(result.body.users))
        done();
    })
})