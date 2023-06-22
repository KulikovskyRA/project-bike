const btnFeedback = document.querySelector('#buttonLeaveFeedback');
//console.log(btnFeedback);
const formFeedback = document.querySelector('#formFeedback');
//console.log(formFeedback);
//* сохраняется изначальный текст кнопки
const btnFeedbackText = btnFeedback.innerText;
//console.log(btnFeedbackText);

btnFeedback.addEventListener('click', (e) => {
  e.preventDefault();
  //console.log('eee');
  if (formFeedback.style.display === 'block') {
    formFeedback.style.display = 'none';
    btnFeedback.innerText = btnFeedbackText;
  } else {
    formFeedback.style.display = 'block';
    btnFeedback.innerText = 'Скрыть';
  }
});
