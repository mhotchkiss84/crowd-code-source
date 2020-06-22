const remoteURL = 'http://localhost:5002'

export default {
    authUser(email, password) {
        return fetch(`${remoteURL}/users/?email=${email}&password=${password}`).then(result => result.json())
    }
}