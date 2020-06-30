const remoteURL = 'http://localhost:5002'

export default{
    getAll(){
        return fetch(`${remoteURL}/languages`).then((result) => result.json())
    }
}