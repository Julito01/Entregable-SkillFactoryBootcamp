const baseURL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', getFirstUsers);

async function getFirstUsers(e) {
  e.preventDefault();
  const res = await fetch(`${baseURL}/users/firsts`, { method: 'GET' });
  const users = await res.json();
  displayData(users);
}
