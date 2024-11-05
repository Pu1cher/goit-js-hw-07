function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const inputValue = refs.input.value;
  if (inputValue < 1 || inputValue > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }


  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.appendChild(box);
  }

  refs.input.value = '';
}
function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}

