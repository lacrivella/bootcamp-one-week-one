import { isCorrect } from './functions.js';
const myButton = document.getElementById('action-button');


myButton.onclick = () => {
  alert('this is my quiz');
  const myConfirmation = confirm('do you want to take the quiz?');
  console.log(myConfirmation);

  const userAnswer = prompt('am I awesome?');
  const santizedUserAnswer = userAnswer.toLowerCase().trim();

  const userIsCorrect = isCorrect(santizedUserAnswer);

  if(userIsCorrect) {
    alert('yaaas');
  } else {
    alert('boo');
  }
};