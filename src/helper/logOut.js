export default async function logOut() {
  await localStorage.removeItem('auth');
  await localStorage.removeItem('token');
  await localStorage.removeItem('tokenID');
  return;
}
