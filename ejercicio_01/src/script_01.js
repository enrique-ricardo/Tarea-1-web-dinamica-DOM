
const MAX_NUMBER = 4;
const MIN_NUMBER = 1;
const filePath = 'public/img/imagen';

function imageRamdon() {

  const aleatoryNumber=(Math.floor((Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER));
  document.querySelector('#imageWeb').setAttribute('src', `${filePath}${aleatoryNumber}.jpg`);

}

document.querySelector('#imageWeb').addEventListener("click", imageRamdon);

