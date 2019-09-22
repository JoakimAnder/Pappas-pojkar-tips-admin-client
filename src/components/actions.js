import * as dao from "./Dao";

let i = 0;
function createTask() {
    return i++;
}

function createRequest(dispatch, process, then=e=>e) {
    return o => {
        const task = createTask()
        dispatch({type: "ADD_TASK", task});
        return process(o)
            .then(data => {
                dispatch({type: "REMOVE_TASK", task});
                return data;
            })
            .then(then)
    }
}

export function createGame(dispatch) {
    return createRequest(dispatch, dao.createGame, getGames(dispatch))
}

export function createQuiz(dispatch) {
    return createRequest(dispatch, dao.createQuiz, getQuizes(dispatch))
}

export function createMatch(dispatch) {
    return createRequest(dispatch, dao.createMatch, getMatches(dispatch))
}

export function createQuestion(dispatch) {
    return createRequest(dispatch, dao.createQuestion, getQuestions(dispatch))
}

export function createTeam(dispatch) {
    return createRequest(dispatch, dao.createTeam, getTeams(dispatch))
}

export function getAll(dispatch) {
    return createRequest(dispatch, () => dao.getAll(), o => dispatch({type: "GET_ALL", payload: o}))
}

export function getGames(dispatch) {
    return createRequest(dispatch, () => dao.getGames(), o => dispatch({type: "GET_GAMES", payload: o}))
}

export function getQuizes(dispatch) {
    return createRequest(dispatch, () => dao.getQuizes(), o => dispatch({type: "GET_QUIZES", payload: o}))
}

export function getMatches(dispatch) {
    return createRequest(dispatch, () => dao.getMatches(), o => dispatch({type: "GET_MATCHES", payload: o}))
}

export function getQuestions(dispatch) {
    return createRequest(dispatch, () => dao.getQuestions(), o => dispatch({type: "GET_QUESTIONS", payload: o}))
}

export function getTeams(dispatch) {
    return createRequest(dispatch, () => dao.getTeams(), o => dispatch({type: "GET_TEAMS", payload: o}))
}

export function editGame(dispatch) {
    return createRequest(dispatch, dao.editGame, o => dispatch({type: "GET_GAMES", payload: o}))
}

export function editQuiz(dispatch) {
    return createRequest(dispatch, dao.editQuiz, o => dispatch({type: "GET_QUIZES", payload: o}))
}

export function editMatch(dispatch) {
    return createRequest(dispatch, dao.editMatch, o => dispatch({type: "GET_MATCHES", payload: o}))
}

export function editQuestion(dispatch) {
    return createRequest(dispatch, dao.editQuestion, o => dispatch({type: "GET_QUESTIONS", payload: o}))
}

export function editTeam(dispatch) {
    return createRequest(dispatch, dao.editTeam, o => dispatch({type: "GET_TEAMS", payload: o}))
}

