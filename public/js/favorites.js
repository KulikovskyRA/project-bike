const favor = document.querySelector('#favorite');

async function ff() {
  const response = await fetch(`/description/route/check`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: favor.dataset.userid,
      way_id: favor.dataset.onewayid,
    }),
  });
  const result = await response.json();
  //console.log(result);
  // console.log(favor.dataset.onewayid);
  // console.log(favor.dataset.userid);
  if (result.status === true) {
    favor.innerText = 'В избранном';
  } else {
    favor.innerText = 'Добавить в избранное';
  }
}

ff();

favor.addEventListener('click', async (e) => {
  // console.log('ee');
  const response = await fetch(`/description/route/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: favor.dataset.userid,
      way_id: favor.dataset.onewayid,
    }),
  });
  const result = await response.json();
  console.log(result);
  // console.log(favor.dataset.onewayid);
  // console.log(favor.dataset.userid);
  if (result.status === true) {
    favor.innerText = 'В избранном';
  } else {
    favor.innerText = 'Добавить в избранное';
  }
});
