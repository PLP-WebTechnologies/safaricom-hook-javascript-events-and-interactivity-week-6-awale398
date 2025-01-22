
// Import Modal HTML
fetch('components/modal.html')
.then((response) => response.text())
.then((html) => {
  document.getElementById('modalContainer').innerHTML = html;
  importModalLogic();
});

// Toggle Background Color
const toggleBgButton = document.getElementById('toggleBgButton');
let isBlue = false;
toggleBgButton.addEventListener('click', () => {
document.body.style.backgroundColor = isBlue ? 'white' : 'lightblue';
isBlue = !isBlue;
});

// Slider for Text Size
const slider = document.getElementById('slider');
const dynamicText = document.getElementById('dynamicText');
slider.addEventListener('input', () => {
dynamicText.style.fontSize = slider.value + 'px';
});


function importModalLogic() {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
  
    openModalButton.addEventListener('click', () => {
      modal.classList.add('show');
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }
  