# Activity 4 : Use third Party module
##  Task 6: Install a third party module (eg, lodash ) using npm . Import and use the function from this module script
In module file
```js
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
```
In main file
```js
const {sortedArr, findzeroage} = require('../Activity4/Task6.js')
console.log(sortedArr)
console.log(sortedArr.map(x=>x.name))
console.log(findzeroage)
```
## Task 7: Install a third party module (eg. axios)using npm . import and use this module to make a network request to the script. 
In module file
```js
const axios= require('axios')
async function fetchData(username){
try{
    const response = await axios.get(`https://api.github.com/users/${username}`)
console.log(`Github follower for the ${username} is `,response.data.followers)
}catch(err){
    console.error('Error occurred while getting data', err)
}
}
module.exports = fetchData; 
 ```
In main file
```js
const fetchData= require('../Activity4/Task7.js')
console.log(fetchData('Udesh-Regmi'))
```