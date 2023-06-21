const deleteBtn = document.querySelector('#deleteButtonCycleRoute');
const deleteBtnFavor = document.querySelector('#deleteButtonFavor');
//console.log(deleteBtn);
//console.log(deleteBtnFavor);

//* список избранного
deleteBtnFavor?.addEventListener('click', async (e) => {
  e.preventDefault();
  // console.log('del');
  const favorCycleRouteId = deleteBtnFavor.dataset.favorcyclerouteid; // находит по id
  //console.log(favorCycleRouteId);
  const response = await fetch(`/profile/myway/favor/${favorCycleRouteId}`, {
    method: 'DELETE',
  });
  // console.log(response);
  if (response.status === 200) window.location.href = '/profile/myway';
});

//* список созданных пользователем
deleteBtn?.addEventListener('click', async (e) => {
  e.preventDefault();
  // console.log('del11111');
  const cycleRouteId = deleteBtn.dataset.cyclerouteid; // находит по id
  // console.log(cycleRouteId);
  const response = await fetch(`/profile/myway/${cycleRouteId}`, {
    method: 'DELETE',
  });
  // console.log(response);
  if (response.status === 200) window.location.href = '/profile/myway';
});
