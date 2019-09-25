import axios from "axios"

const baseURL = "http://localhost:8606";

export function validateAdmin( password, onSuccess ) {
    onSuccess()
}

export function createGame(game,  onSuccess = e =>e) {
  return axios.post(baseURL+"/createGame", game)
        .then(data => onSuccess(data.data))
        .catch(console.log)
}

export function createMatch(match, team1ID,team2ID,isTieable,pointsCode,quizId) {
    return axios.post(baseURL+`/createMatch?team1=${team1ID}&team2=${team2ID}&isTieable=${isTieable}&pointsCode=${pointsCode}&quizId=${quizId}`,match)
        .then(response => {
            console.log(response.data)
            return response.data
        })
}

export function createQuestion(question, quizId) {
    return axios.post(baseURL+`createQuestion?quizId=${quizId}`, question)
        .then(response =>{
            console.log(response.data)
            return response.data
        })
}

export function createQuiz(quiz,gameId) {
    return axios.post(baseURL+`/createQuiz?gameId=${gameId}`,quiz)
        .then(response =>{
            console.log(response.data)
            return response.data
        })
}

export function createTeam(team) {

      return   axios.post(baseURL+"/createTeam",team )
            .then(response => {
                return response.data
            }).catch(console.log)

}
