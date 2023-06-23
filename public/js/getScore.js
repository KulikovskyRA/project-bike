const radioButtons = document.querySelectorAll('.radioButtonRaiting');

const ArrRadioButtons = [...radioButtons];

ArrRadioButtons.map((el) => {
  el.addEventListener('click', ((e) => {
    console.log('clicked', e.target.value);
  }));
});

console.log(ArrRadioButtons);
