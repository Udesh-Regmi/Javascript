// Activity 4 : Use third Party module
// Task 6: Install a third party module (eg, lodash ) using npm . Import and use the function from this module script
const lodash = require('lodash')
const arr = [
    {name:'John',age:20},
    {name:'Tom',age:0},
    {name:'Peter',age:41},
    {name:'Mary',age:2},
    {name:'Mike',age:1},
]
const sortedArr = lodash.sortBy(arr,'age')
const findzeroage= lodash.find(arr, {age:0})

//Delete arr array
arr.splice(0,arr.length)

exports.arr=arr
exports.sortedArr=sortedArr
exports.findzeroage=findzeroage