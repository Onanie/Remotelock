export function fetchUsers() {
  return fetch("http://192.168.8.107:4000/api/users").then((res) => res.json());
}
export function fetchDevices(searchText) {
  return fetch(`http://192.168.8.107:4000/api/devices${searchText}`).then((res) => res.json());
}