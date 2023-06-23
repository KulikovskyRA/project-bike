const cont = document.querySelector('.cont');

cont.addEventListener('click', async (e) => {
  if (
    e.target.tagName === 'BUTTON' &&
    e.target.className.includes('adminDel')
  ) {
    const card = e.target.closest('.card');

    const response = await fetch('/admin', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: card.id }),
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Что-то не так, не могу удалить');
    }
  }

  if (
    e.target.tagName === 'BUTTON' &&
    e.target.className.includes('adminAppr')
  ) {
    const card = e.target.closest('.card');

    const response = await fetch('/admin', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: card.id }),
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Что-то не так, не могу одобрить');
    }
  }
});

const searchInput = document.querySelector('.searchInput');
const confirmSearch = document.querySelector('.confirmSearch');

const refreshSearch = document.querySelector('.refreshSearch');

confirmSearch.addEventListener('click', async (e) => {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ textSearch: searchInput.value }),
  });

  const result = await response.json();
  // console.log(result.search);
  const { search, admin } = result;
  // console.log(admin);
  let html = '';

  search.forEach((way) => {
    html += `
      <div class="card" id={way.id}>
        <h5>${way.title}</h5>
        <img src="" alt=${way.picture_data} />
        <div>
        ${way.city} ${'*'.repeat(Math.round(way.avr))}${'0'.repeat(
      Math.floor(5 - way.avr)
    )}
        </div>
        <div>${way.way_length}</div>
        <div>${way.way_data}</div>
        <a href='/description/${way.id}'}>Перейти в ${way.id}</a>            
      </div>`;

    if (admin === true) {
      html += `
        <button type="button" class="adminDel">
                Админ удаляет
        </button>`;
    }
  });

  cont.innerHTML = html;
});

refreshSearch.addEventListener('click', async (e) => {
  if (searchInput.value !== '') {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ textSearch: '' }),
    });

    const result = await response.json();
    // console.log(result.search);
    const { search, admin } = result;
    // console.log(admin);
    let html = '';

    search.forEach((way) => {
      html += `
      <div class="card" id={way.id}>
        <h5>${way.title}</h5>
        <img src="" alt=${way.picture_data} />
        <div>
        ${way.city} ${'*'.repeat(Math.round(way.avr))}${'0'.repeat(
        Math.floor(5 - way.avr)
      )}
        </div>
        <div>${way.way_length}</div>
        <div>${way.way_data}</div>
        <a href='/description/${way.id}'}>Перейти в ${way.id}</a>            
      </div>`;

      if (admin === true) {
        html += `
        <button type="button" class="adminDel">
                Админ удаляет
        </button>`;
      }
    });

    cont.innerHTML = html;
  }
});
