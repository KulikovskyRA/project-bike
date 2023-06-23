const btnFeedback = document.querySelector('#buttonLeaveFeedback');
//console.log(btnFeedback);
const formFeedback = document.querySelector('#formFeedback');
//console.log(formFeedback);
const inputClear = document.querySelector('.input_clear');
const reviewAll = document.querySelector('.review_all');

const radioButtons = document.querySelectorAll('.radioButtonRaiting');

const ArrRadioButtons = [...radioButtons];

let score = 0;
ArrRadioButtons.map((el) => {
  el.addEventListener('click', ((e) => {
    score = parseInt(e.target.value);
  }));
});

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

formFeedback.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const data = { [ e.target.text_body.name ]: e.target.text_body.value, score };
  // console.log(data);
  const path = window.location.pathname;
  //console.log(path);
  const wayId = path.match(/\d+$/gm)[ 0 ];
  //console.log(wayId);
  
  try {
    const response = await fetch(
      `http://localhost:3000/description/newrev/${wayId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    //console.log(response);
    const res = await response.json();
    console.log(res);
    
    if (response.status === 200) {
      const approve = document.createElement('p');
      approve.innerText = 'Ваш отзыв отправлен';
      formFeedback.prepend(approve);
      setTimeout(() => {
        approve.remove();
      }, 2000);
      
      //const rewData = await fetch(`http://localhost:3000/description/newrew/7`);
      const rewData = await fetch(
        `http://localhost:3000/description/newrev/${res.id}`
      );
      
      const result = await rewData.json();
      console.log(result);
      
      const liEl = document.createElement('li');
      liEl.innerHTML = `${result.text_body}<p>${
        result.User.username
      }</p><span>${new Date(result.createdAt).toLocaleString()}</span>
      `;
      reviewAll.prepend(liEl);
      inputClear.value = '';
    } else {
      const warning = document.createElement('p');
      warning.innerText = 'Что-то пошло не так... Попробуйте ещё раз';
      formFeedback.prepend(warning);
      setTimeout(() => {
        warning.remove();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
});
