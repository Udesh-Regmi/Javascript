// Activity 4 : Use third Party module
//Task 7: Install a third party module (eg. axios)using npm . import and use this module to make a network request to the script. 
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