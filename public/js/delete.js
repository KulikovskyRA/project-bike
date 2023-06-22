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
