const contain = document.querySelector('.contain');
const containFavor = document.querySelector('.containFavor');

contain.addEventListener('click', async (e) => {
  if (
    e.target.tagName === 'BUTTON' &&
    e.target.className.includes('deleteButtonCycleRoute')
  ) {
    const cycleRouteId = e.target.dataset.cyclerouteid; // находит по id
    // console.log(cycleRouteId);
    const response = await fetch(`/profile/myway/${cycleRouteId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Что-то не так, не могу удалить');
    }
  }
});

containFavor.addEventListener('click', async (e) => {
  if (
    e.target.tagName === 'BUTTON' &&
    e.target.className.includes('deleteButtonFavor')
  ) {
    const favorCycleRouteId = e.target.dataset.favorcyclerouteid;

    const response = await fetch(`/profile/myway/favor/${favorCycleRouteId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Что-то не так, не могу удалить');
    }
  }
});

// //* список избранного
// deleteBtnFavor?.addEventListener('click', async (e) => {
//   e.preventDefault();
//   // console.log('del');
//   const favorCycleRouteId = deleteBtnFavor.dataset.favorcyclerouteid; // находит по id
//   //console.log(favorCycleRouteId);
//   const response = await fetch(`/profile/myway/favor/${favorCycleRouteId}`, {
//     method: 'DELETE',
//   });
//   // console.log(response);
//   if (response.status === 200) window.location.href = '/profile/myway';
// });

// //* список созданных пользователем
// deleteBtn?.addEventListener('click', async (e) => {
//   e.preventDefault();
//   // console.log('del11111');
//   const cycleRouteId = deleteBtn.dataset.cyclerouteid; // находит по id
//   // console.log(cycleRouteId);
//   const response = await fetch(`/profile/myway/${cycleRouteId}`, {
//     method: 'DELETE',
//   });
//   // console.log(response);
//   if (response.status === 200) window.location.href = '/profile/myway';
// });
