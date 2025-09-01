import { getNewToken } from './getNewToken';

export async function registration(formData) {
  const newToken = await getNewToken()
    .then((data) => data.json())
    .then((data) => data.token);

  return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, {
    method: 'POST',
    headers: {
      Token: newToken,
    },
    body: formData,
  });
}
