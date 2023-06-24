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

if (confirmSearch) {
  confirmSearch.addEventListener('click', async (e) => {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ textSearch: searchInput.value }),
    });

    const result = await response.json();
    const { search, admin } = result;
    let html = '';

    search.forEach((way) => {
      html += `
      <div class="card bg-white p-4" id=${way.id}>
      <a href='/description/${way.id}' class="group">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src='/images/${way.picture_data}'}
          alt='${way.title}'}
          class="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 class="mt-1 text-lg font-medium text-gray-900">
        ${way.title}
      </h3>
      <p class="mt-4 text-sm text-gray-700">${way.city}</p>
      <p class="mt-4 text-sm text-gray-700">${way.way_length}км</p>
      <br />
    </a>         
      `;

      if (admin === true) {
        html += `
        <div>
                  <div>
                    ${'✮'.repeat(Math.round(way.avr))}
                    ${'☆'.repeat(Math.floor(5 - way.avr))}
                  </div>
                  <button
                    type="button"
                    class="adminDel flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Удалить
                    </button>
                  </div>
        </div>`;
      } else {
        html += '</div>';
      }
    });

    cont.innerHTML = html;
  });
}

if (refreshSearch) {
  refreshSearch.addEventListener('click', async (e) => {
    if (searchInput.value !== '') {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ textSearch: '' }),
      });

      const result = await response.json();
      const { search, admin } = result;
      let html = '';

      search.forEach((way) => {
        html += `
        <div class="card bg-white p-4" id=${way.id}>
        <a href='/description/${way.id}' class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src='/images/${way.picture_data}'}
            alt='${way.title}'}
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-1 text-lg font-medium text-gray-900">
          ${way.title}
        </h3>
        <p class="mt-4 text-sm text-gray-700">${way.city}</p>
        <p class="mt-4 text-sm text-gray-700">${way.way_length} км</p>
        <br />
      </a>         
        `;

        if (admin === true) {
          html += `
          <div>
                    <div>
                      ${'✮'.repeat(Math.round(way.avr))}
                      ${'☆'.repeat(Math.floor(5 - way.avr))}
                    </div>
                    <button
                      type="button"
                      class="adminDel flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Удалить
                      </button>
                    </div>
          </div>`;
        } else {
          html += '</div>';
        }
      });

      cont.innerHTML = html;
    }
  });
}
