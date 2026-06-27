const data = [
    {
        id: 1, 
        fullName: "John Doe",
        designation: "Software Engineer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque."
    }, 
    {
        id: 2, 
        fullName: "Riyasha Doe",
        designation: "Product Manager",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJ4IZbkwwyJD4dq7MObC7x1gpYN0xVkTOV_X9T9ZCMQ&s=10",
        description: " ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque."
    }, 
    {
        id: 3,
        fullName: " Smith",
        designation: "UX Designer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10",
        description: "dolor sit amet consectetur adipisicing elit. Voluptas, eaque."
    }, {
        id: 4,
        fullName: "Tony",
        designation: "Data Scientist",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ucAqGFVdC68ZnKRc49l8sozcYZL9ZBkQVHHX0MikXQ&s=10",
        description: " amet consectetur adipisicing elit. Voluptas, eaque."
    }

]


let currentUserReview = 0 ; 
const image = document.querySelector(".image img");
console.log(image)
const title = document.querySelector(".contents .title");
const designation = document.querySelector(".contents .designation");
const description = document.querySelector(".review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const surpriseMeBtn = document.querySelector(".surprise-btn");

document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault();
    showUserReview(currentUserReview);

})
 function showUserReview(currentUserReview){
    const item = data[currentUserReview];
    image.src = item.image;
    title.innerHTML = item.fullName;
    designation.innerHTML = item.designation;
    description.innerHTML = item.description;
 }
 
prevBtn.addEventListener("click", function(){
    currentUserReview--;
    if(currentUserReview < 0){
        currentUserReview = data.length - 1;
    }
    showUserReview(currentUserReview);
})
nextBtn.addEventListener("click", function(){
    currentUserReview++;
    if(currentUserReview >= data.length){
        currentUserReview = 0;
    }
    showUserReview(currentUserReview);
})
surpriseMeBtn.addEventListener("click", function(){
    currentUserReview = Math.floor(Math.random() * data.length);
    console.log(currentUserReview);
    showUserReview(currentUserReview);
})