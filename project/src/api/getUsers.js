export function getUsers(q) {
  const url = q
    ? q
    : `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`;
  return fetch(url).then((data) => data.json());
}
