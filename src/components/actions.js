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
    game = {
        name: game.name,
        timeLockedDown: game.timeLockedDown
    };
    return APIRequest(() => dao.createGame(game), getGames)
}

export function createQuiz(quiz) {
    quiz = {
        name: quiz.name,
        game: {
            id: quiz.game.id
        }
    };
    return APIRequest(() => dao.createQuiz(quiz), getQuizes)
}

export function createMatch(match) {
    const pointsCode = match.pointsCode;
    const isTieable = match.isTieable;
    const quizID = match.quiz.id;
    match = {
        name: match.name,
        channel: match.channel,
        date_time: match.date_time,
        teams: [
            {id: match.teams[0].id},
            {id: match.teams[1].id}
        ]
    };
    return APIRequest(() => dao.createMatch(match, isTieable, pointsCode, quizID), getMatches)
}

export function createQuestion(question) {
    const quizID = question.quiz.id;
    question = {
        slogan: question.slogan,
        pointsCode: question.pointsCode,
        answerType: question.answerType,
        alternatives: question.alternatives,
        results: question.results,
    };
    return APIRequest(() => dao.createQuestion(question, quizID), getQuestions)
}

export function createTeam(team) {
    team = {
        name: team.name,
        flag: team.flag
    };
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
    game = {
        id: game.id,
        name: game.name,
        timeLockedDown: game.timeLockedDown,
        timeEnded: game.timeEnded
    };
    return APIRequest( () => dao.editGame(game), o => dispatch({type: "GET_GAMES", payload: o}))
}

export function editQuiz(quiz) {
    quiz = {
        id: quiz.id,
        name: quiz.name,
        game: {
            id: quiz.game.id
        }
    };
    return APIRequest( () => dao.editQuiz(quiz), o => dispatch({type: "GET_QUIZES", payload: o}))
}

export function editMatch(match) {
    match = {
        id: match.id,
        name: match.name,
        channel: match.channel,
        date_time: match.date_time,
        teams: [
            {id: match.teams[0].id},
            {id: match.teams[1].id}
        ]
    };
    return APIRequest( () => dao.editMatch(match), o => dispatch({type: "GET_MATCHES", payload: o}))
}

export function editQuestion(question) {
    const quizID = question.quiz.id;
    question = {
        id: question.id,
        slogan: question.slogan,
        answerType: question.answerType,
        alternatives: question.alternatives,
        results: question.results,
    };
    return APIRequest( () => dao.editQuestion(question, quizID), o => dispatch({type: "GET_QUESTIONS", payload: o}))
}

export function editTeam(team) {
    team = {
        id: team.id,
        name: team.name,
        flag: team.flag,
        refTeam: (team.refTeam ? {id: team.refTeam.id} : null)
    };
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