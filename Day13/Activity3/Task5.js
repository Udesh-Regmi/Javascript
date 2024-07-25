// Activity 3: Importing Entire module
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. 

let mongodbConnection = true; 
function dataFetch(category){
    console.log(`Fetching data for  ${category}`)

}
module.exports= {
    mongodbConnection, 
    dataFetch
}