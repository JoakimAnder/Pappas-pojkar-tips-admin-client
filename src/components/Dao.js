import axios from "axios"

const baseURL = "http://localhost:8606";

export function validateAdmin( password, onSuccess ) {
    onSuccess()
}



// region Get

export function getAll( onSuccess=e=>e ) {
    const lists = {};
    return Promise.all(
        [
            getGames(d => lists.games = d),
            getQuizes(d => lists.quizes = d),
            getMatches(d => lists.matches = d),
            getQuestions(d => lists.questions = d),
            getTeams(d => lists.teams = d)
        ]
    )
        .then(() => onSuccess(lists))
        .catch(console.log)
}

export function getGames( onSuccess=e=>e ) {
    return axios.get(baseURL+"/getGames")
        .then(data => onSuccess(data.data))
        .catch(console.log)
}


export function getQuizes( onSuccess=e=>e ) {
    return axios.get(baseURL+"/getQuizes")
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function getMatches( onSuccess=e=>e ) {
    return axios.get(baseURL+"/getMatches")
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function getQuestions( onSuccess=e=>e ) {
    return axios.get(baseURL+"/getQuestions")
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function getTeams( onSuccess=e=>e ) {
    return axios.get(baseURL+"/getTeams")
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

// endregion

// region Create

export function createGame(game, onSuccess=e=>e) {
    return axios.post(baseURL+"/createGame", game)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function createMatch(match, isTieable, pointsCode, quizID, onSuccess=e=>e) {
    return axios.post(baseURL+`/createMatch?isTieable=${isTieable}&pointsCode=${pointsCode}&quizId=${quizID}`, match
    )
        .then(data => onSuccess(data.data))
        .catch(console.log)
}


export function createQuestion(question, quizID, onSuccess=e=>e) {
    return axios.post(baseURL+`/createQuestion?quizId=${quizID}`, question)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function createQuiz(quiz, onSuccess=e=>e) {
    return axios.post(baseURL+`/createQuiz?gameId=${quiz.game.id}`, {name: quiz.name})
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function createTeam(team, onSuccess=e=>e) {
    return axios.post(baseURL+"/createTeam", team)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

// endregion

// region Edit

export function editGame(game, onSuccess=e=>e) {
    return axios.put(baseURL+"/editGame", game)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function editMatch(match, onSuccess=e=>e) {
    return axios.put(baseURL+"/editMatch", match)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function editQuestion(question, quizID, onSuccess=e=>e) {
    return axios.put(baseURL+"/editQuestion?quizID="+quizID, question)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function editQuiz(quiz, onSuccess=e=>e) {
    return axios.put(baseURL+"/editQuiz", quiz)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function editTeam(team, onSuccess=e=>e) {
    return axios.put(baseURL+"/editGame", team)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

// endregion