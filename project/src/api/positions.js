export function getPositions() {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
  ).then((data) => data.json());
}
