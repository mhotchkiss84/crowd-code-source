const remoteURL = 'http://localhost:5002';

export default {
	getPostsByLanguageId(langId) {
		return fetch(`${remoteURL}/posts?languageId=${langId}&_expand=user`).then((result) => result.json());
	},
	getOneLanguage(langId) {
		return fetch(`${remoteURL}/languages/${langId}`).then((result) => result.json());
	},
	getCategories() {
		return fetch(`${remoteURL}/category`).then((result) => result.json());
	},
	newPost(newPost) {
		return fetch(`${remoteURL}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newPost)
		}).then((data) => data.json());
	},
	update(editedPost) {
		return fetch(`${remoteURL}/posts/${editedPost.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedPost)
		}).then((data) => data.json());
	},
	delete(id) {
		return fetch(`${remoteURL}/posts/${id}`, {
			method: 'DELETE'
		}).then((result) => result.json());
	}
};
