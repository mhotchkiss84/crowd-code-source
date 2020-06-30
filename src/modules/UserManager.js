const remoteURL = `http://localhost:5002`

export default {
	getUsers() {
		return fetch(`${remoteURL}/users`).then((result) => result.json());
	}
};
