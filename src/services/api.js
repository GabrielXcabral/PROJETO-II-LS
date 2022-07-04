const server = 'https://novas-artes.gabrielx7.repl.co';

const create = async (food) => {
  const res = await fetch(`${server}/foods`, {
    method: 'post',
    body: JSON.stringify(food),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
};

const readAll = async () => {
  const res = await fetch(`${server}/foods`);

  return await res.json();
};

const api = { create, readAll };

export default api;
