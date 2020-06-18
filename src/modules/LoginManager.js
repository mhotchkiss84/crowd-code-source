const remoteURL = 'http://localhost:5002'

export default {
    get(id) {
        return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
    }
}