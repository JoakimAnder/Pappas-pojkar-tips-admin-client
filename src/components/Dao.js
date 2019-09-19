import axios from "axios"

const baseURL = "http://localhost:8606";

export function validateAdmin( password, onSuccess ) {
    onSuccess()
}

export function createGame(game, onSuccess) {
    axios.post(baseURL+"/createGame", game)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function createMatch(match, onSuccess) {

}

export function createQuestion(question, onSuccess) {

}

export function createQuiz(quiz, onSuccess) {

}

export function createTeam(team, onSuccess) {

}
