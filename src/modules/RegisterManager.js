const remoteURL = 'http://localhost:5002';

export default {
	checkEmail(email) {
		return fetch(`${remoteURL}/users/?nonCaseEmail=${email}`).then((result) => result.json());
	},
	checkUserName(userName) {
		return fetch(`${remoteURL}/users/?nonCaseUserName=${userName}`).then((result) => result.json());
	},
	post(newUser) {
		return fetch(`${remoteURL}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		}).then((data) => data.json());
	}
};
