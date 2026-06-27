const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalHidden = document.querySelector('.hidden');
const modalShow = document.querySelector('.show');

const mainContainerImg = document.querySelector('.main-container img');
openModalBtn.addEventListener('click', () => {
  modalHidden.className = 'show';
  modalShow.className = 'hidden';
  mainContainerImg.style.filter = 'blur(30px)';
}); 

closeModalBtn.addEventListener('click', () => {
  modalHidden.className = 'hidden';
  modalShow.className = 'show';
  mainContainerImg.style.filter = 'none';
});