import * as dao from "./Dao";

let dispatch = () => {};
export function setDispatch(dispatcher) {
    dispatch = dispatcher;
}

// region API Calls

let i = 0;
function createTask() {
    return i++;
}

function APIRequest(process, then=e=>e) {
    const task = createTask();
    dispatch({type: "ADD_TASK", task});
    return process()
        .then(data => {
            dispatch({type: "REMOVE_TASK", task});
            return data;
        })
        .then(then)
}

// region Create

export function createGame(game) {
    return APIRequest(() => dao.createGame(game), getGames)
}

export function createQuiz(quiz) {
    return APIRequest(() => dao.createQuiz(quiz), getQuizes)
}

export function createMatch(match) {
    return APIRequest(() => dao.createMatch(match), getMatches)
}

export function createQuestion(question) {
    return APIRequest(() => dao.createQuestion(question), getQuestions)
}

export function createTeam(team) {
    return APIRequest(() => dao.createTeam(team), getTeams)
}

// endregion

// region Get

export function getAll() {
    return APIRequest(dao.getAll, o => dispatch({type: "GET_ALL", payload: o}))
}

export function getGames() {
    return APIRequest( dao.getGames, o => dispatch({type: "GET_GAMES", payload: o}))
}

export function getQuizes() {
    return APIRequest( dao.getQuizes, o => dispatch({type: "GET_QUIZES", payload: o}))
}

export function getMatches() {
    return APIRequest( dao.getMatches, o => dispatch({type: "GET_MATCHES", payload: o}))
}

export function getQuestions() {
    return APIRequest( dao.getQuestions, o => dispatch({type: "GET_QUESTIONS", payload: o}))
}

export function getTeams() {
    return APIRequest( dao.getTeams, o => dispatch({type: "GET_TEAMS", payload: o}))
}

// endregion

// region Edit

export function editGame(game) {
    return APIRequest( () => dao.editGame(game), o => dispatch({type: "GET_GAMES", payload: o}))
}

export function editQuiz(quiz) {
    return APIRequest( () => dao.editQuiz(quiz), o => dispatch({type: "GET_QUIZES", payload: o}))
}

export function editMatch(match) {
    return APIRequest( () => dao.editMatch(match), o => dispatch({type: "GET_MATCHES", payload: o}))
}

export function editQuestion(question) {
    return APIRequest( () => dao.editQuestion(question), o => dispatch({type: "GET_QUESTIONS", payload: o}))
}

export function editTeam(team) {
    return APIRequest( () => dao.editTeam(team), o => dispatch({type: "GET_TEAMS", payload: o}))
}

// endregion

// endregion

export function setTab(tab) {
    dispatch({type: "SELECT_TAB", payload: tab});
}

export function setOperation(operation) {
    dispatch({type: "SELECT_OPERATION", payload: operation});
}

export function setObject(object, tab) {
    dispatch({type: "SELECT_OBJECT", payload: {object, tab}});
}