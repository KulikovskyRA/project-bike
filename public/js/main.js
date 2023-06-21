const cont = document.querySelector('.cont');

cont.addEventListener('click', async (e) => {
  if (
    e.target.tagName === 'BUTTON' &&
    e.target.className.includes('adminDel')
  ) {
    const card = e.target.closest('.card');
    // console.log(card);

    const response = await fetch('/admin', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: card.id }),
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Что-то не так');
    }
  }
});
