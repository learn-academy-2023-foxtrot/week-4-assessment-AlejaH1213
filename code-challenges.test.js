// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("arrFunc", () =>{
  it("removes the first item from the array and shuffles the remaining items.", () =>{
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(arrFunc(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(arrFunc(colors2)).toEqual(expect.arrayContaining([
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"]))
  })
})
// Good failure: ReferenceError: arrFunc is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// name: arrFunc
// input: an array 
// output: same array but without the first value and with the rest of the items in different order
// process: to remove the first value I'm going to use shift() and then I'm going to tell it to return that array but with the values sorted
const arrFunc = (array) => {
  array.shift()
  return array.sort()
}

// TEST PASSED.
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
// a) Create a test with expect statements for each of the variables provided.
describe("tallyFunc", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
     // Expected output: -31
    expect(tallyFunc(votes1)).toEqual((11))
    expect(tallyFunc(votes2)).toEqual((-31))
  })
})
// Good failure: ReferenceError: tallyFunc is not defined
// b) Create the function that makes the test pass.
// Pseudo code:
// name: tallyFunc
// input: an object that contains up votes and downvotes
// output: the end tally of the votes and downvotes
// process: first I'm going to put the object as the parameter of the function
// then im going to create a new variable called totalVotes that will store the operation of substracting downvotes from the upvotes, and then im going to return the new variable that I created. 
// I would like to know if there is another way to make this function more reusable, if there is another key word i can use in line 77 to access the values inside the object because right now im calling the specific name "upVotes" and "downVotes" to make the function work 

const tallyFunc = (object) => {
    let totalVotes = object.upVotes - object.downVotes
  return totalVotes
}
// TEST PASSED
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDuplicateFunc", () =>{
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
//     // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

    expect(noDuplicateFunc(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// Good failure: ReferenceError: noDuplicateFunc is not defined

// b) Create the function that makes the test pass.
// Pseudo code:
// name: noDuplicateFunc
// input: two arrays as arguments
// output: one array with no duplicate values.
// process: since the function is taking two arrays but i only need to return one array im going to join both arrays into one array im going to create a new variable called mergedArr to store it and im going to join both arrays with .concat
// after that im going to  update the new variable with the result of the .filter and inside filter im going to go through the new array and remove the duplicate values, to do that I'll have to pass the index  in the filter parameter and then compare the indexOf value with index to determine if they are the same and then leave only one of them
const noDuplicateFunc = (arr1, arr2) => {
  let mergedArr = arr1.concat(arr2)
  mergedArr = mergedArr.filter((value, index) => {

    return mergedArr.indexOf(value) === index
  } )
  return mergedArr
}
// TEST PASSED
//stretch: using spread operator 
// pseudocode: instead of using the concat ill use the spread operator to create the mergedArray
const noDuplicateFuncSpread = (arr1, arr2) => {
  let mergedArr = [...arr1, ...arr2]
    mergedArr = mergedArr.filter((value, index) => {
    
      return mergedArr.indexOf(value) === index
    } )
    return mergedArr
  }
// this also works but I dont see the point of replacing concat with the spread so maybe im not using it right 
