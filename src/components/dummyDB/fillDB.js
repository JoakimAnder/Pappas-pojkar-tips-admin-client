import axios from "axios";
import * as dao from "../Dao";

let baseURL = "http://localhost:8606/create";



const game = {
    name: "VM-Tipset 2022 Qatar",
    timeLockedDown: 1234
}

const quizzes = [
    {
        name: "Group Stage",
    },
    {
        name: "Ghost Quiz"
    }
]


const matches =[
    {
        channel: "Tv4",
        date_time: 20220601
    },
    {
        channel: "Tv4",
        date_time: 20220602
    },
    {
        channel: "Tv4",
        date_time: 20220603
    },
    {
        channel: "Tv4",
        date_time: 20220604
    },
    {
        channel: "Tv4",
        date_time: 20220605
    },
    {
        channel: "Tv4",
        date_time: 20220606
    },
    {
        channel: "Tv4",
        date_time: 20220607
    },
    {
        channel: "Tv4",
        date_time: 20220608
    },
    {
        channel: "Tv4",
        date_time: 20220609
    },
    {
        channel: "Tv4",
        date_time: 20220610
    },
    {
        channel: "Tv4",
        date_time: 20220611
    },
    {
        channel: "Tv4",
        date_time: 20220612
    },
    {
        channel: "Tv4",
        date_time: 20220613
    },
    {
        channel: "Tv4",
        date_time: 20220614
    },
    {
        channel: "Tv4",
        date_time: 20220615
    },
    {
        channel: "Tv4",
        date_time: 20220616
    },
    {
        channel: "Tv4",
        date_time: 20220616
    }

]

const groupTeams = [
    {
        name: "Ryssland",
        flag:""
    },
    {
        name: "Saudiarabien",
        flag:""
    },
    {
        name: "Egypten",
        flag:""
    },
    {
        name: "Uruguay",
        flag:""
    },
    {
        name: "Marocko",
        flag:""
    },
    {
        name: "Iran",
        flag:""
    },
    {
        name: "Portugal",
        flag:""
    },
    {
        name: "Spanien",
        flag:""
    },
    {
        name: "Frankrike",
        flag:""
    },
    {
        name: "Australien",
        flag:""
    },
    {
        name: "Argentina",
        flag:""
    },
    {
        name: "Island",
        flag:""
    },
    {
        name: "Peru",
        flag:""
    },
    {
        name: "Danmark",
        flag:""
    },
    {
        name: "Kroatien",
        flag:""
    },
    {
        name: "Nigeria",
        flag:""
    },
    {
        name: "Costa Rica",
        flag:""
    },
    {
        name: "Serbien",
        flag:""
    },
    {
        name: "Tyskland",
        flag:""
    },
    {
        name: "Mexico",
        flag:""
    },
    {
        name: "Brasilien",
        flag:""
    },
    {
        name: "Schweiz",
        flag:""
    },
    {
        name: "Sverige",
        flag:""
    },
    {
        name: "Sydkorea",
        flag:""
    },
    {
        name: "Belgien",
        flag:""
    },
    {
        name: "Panama",
        flag:""
    },
    {
        name: "Tunisen",
        flag:""
    },
    {
        name: "England",
        flag:""
    },
    {
        name: "Colombia",
        flag:""
    },
    {
        name: "Japan",
        flag:""
    },
    {
        name: "Polen",
        flag:""
    },
    {
        name: "Senegal",
        flag:""
    }
    ]
const qhostTeams = [
    {
        name: "A1",
        flag: ""
    },
    {
        name: "B2",
        flag: ""
    },
    {
        name: "C1",
        flag: ""
    },
    {
        name: "D2",
        flag: ""
    },
    {
        name: "B1",
        flag: ""
    },
    {
        name: "A2",
        flag: ""
    },
    {
        name: "D1",
        flag: ""
    },
    {
        name: "C2",
        flag: ""
    },
    {
        name: "E1",
        flag: ""
    },
    {
        name: "F2",
        flag: ""
    },
    {
        name: "G1",
        flag: ""
    },
    {
        name: "H2",
        flag: ""
    },
    {
        name: "F1",
        flag: ""
    },
    {
        name: "E2",
        flag: ""
    },
    {
        name: "H1",
        flag: ""
    },
    {
        name: "G2",
        flag: ""
    },
    {
        name: "W49",
        flag: ""
    },
    {
        name: "W50",
        flag: ""
    },
    {
        name: "W53",
        flag: ""
    },
    {
        name: "W54",
        flag: ""
    },
    {
        name: "W51",
        flag: ""
    },
    {
        name: "W52",
        flag: ""
    },
    {
        name: "W55",
        flag: ""
    },
    {
        name: "W56",
        flag: ""
    },
    {
        name: "W57",
        flag: ""
    },
    {
        name: "W58",
        flag: ""
    },
    {
        name: "W59",
        flag: ""
    },
    {
        name: "W60",
        flag: ""
    },
    {
        name: "W61",
        flag: ""
    }
]




// export async function fillDB() {
//     let matchList = []
//     let teamNames =[]
//
//     let gameId = 0
//     let quizId = 0
//
//   await  createGame(game)
//         .then(data =>{
//     gameId = data.id
//         })
//
//     for (let i = 0; i <quizzes.length; i++){
//
//     let quiz = quizzes[i]
//   await  createQuiz(quiz,gameId)
//         .then(data =>{
//             quizId = data.id
//
//         }).catch(error => console.log(error))
//
//     }
//
//
//
//
//     for(let i = 0; i< teams.length; i++){
//         let team = teams[i]
//        await    createTeam(team)
//           .then(x => {
//           teamNames.push(x)
//           console.log(x)
//       }).catch(error => console.log(error))
//
//     }
//
//
//     for (let i = 0; i <matches.length ; i++) {
//     let team1 = teamNames[i*2].id
//     let team2 = teamNames[i*2+1].id
//     let isTieable = true;
//     let pointsCode = 1;
//     let match = matches[i];
//
//       await  createMatch(match, team1,team2,isTieable,pointsCode,quizId)
//           .then(z=> {
//               matchList.push(z)
//           }).catch(error => console.log(error))
//         }
//
//
// }


async function createGame2(game) {
    let gameToBe = {
        name: game.name,
        timeLockedDown: game.date
    }
 await dao.createGame(gameToBe)
     .then(data => {
         gameToBe = data
     })

    game.quizes.forEach(q => createQuiz2(q, gameToBe.id))
}

function createQuiz2(quiz, gameId) {
    let quizToBe = {
        name: quiz.name,
        game: {
            id: gameId
        }
    }
    dao.createQuiz(quizToBe)
        .then(data => {
            quizToBe = data
        }).then(()=>{

    quiz.matches.forEach(m => createMatch2(m,quizToBe.id))
    })


}

async function createMatch2(match, quizId) {
    let team1 = match.team1
    let team2 = match.team2
    let isTieable = match.isTieable
    let pointsCode = match.pointsCode

    let matchToBe = {
        channel: match.channel,
        date_time: match.date,
        name: match.name,
        teams: [
            {
             id: ""
            },
            {
                id: ""
            }
        ]
    }

   await createTeam2(team1)
        .then(data =>{
            matchToBe.teams[0].id = data;
        })
   await createTeam2(team2)
        .then(data => {
            matchToBe.teams[1].id = data
        })

   await dao.createMatch(matchToBe, isTieable, pointsCode,quizId)
       .then(()=>console.log("DONE!!"))
}

function createTeam2(team) {
let teamToBe = {
    name: team.name,
    flag: ""
}
return dao.createTeam(teamToBe)
    .then(data => {
        return data.id
    })
}

function createGroupStageTeam(teamIndex) {
    let team ={
     name: groupTeams[teamIndex].name,
     flag : ""
    }
    return team
}

function createGroupStageMatch(matchNr,team1Index,team2Index) {
    let match = {

   name :"Match " +matchNr,
   team1 : createGroupStageTeam(team1Index),
   team2 : createGroupStageTeam(team2Index),
   channel: "Tv4",
   isTieable : true,
   pointsCode : 1,
   date : "2022-06-01T12:30"
    }

    return match

  
}

 function createGroupStageQuiz(){

     let name = "Group Stage"
     let matches = []
     let i = 1;
     for(let groupNr = 0; groupNr < 8; groupNr++){
         for (let team1Index = groupNr *4; team1Index < groupNr*4 +4 ; team1Index++) {
             for (let team2Index = team1Index+1; team2Index <groupNr*4+4 ; team2Index++) {
                 console.log(team1Index,team2Index)
                 matches.push(createGroupStageMatch(i++,team1Index,team2Index))
             }
         }

     }
     let quiz = {
         name, matches
     }
     return quiz
 }

 function createGhostQuiz() {

 }

 function createMyGame(){

    return{
         name: "VM 2022",
             date: "2022-06-01T12:30",
         quizes: [
         createGroupStageQuiz()
     ]
     }
 }

const game22 = {
    name: "VM 2022",
    date: "2022-06-01T12:30",
    quizes: [
        createGroupStageQuiz(),
        createGhostQuiz()
    ]
}
const game2 = {
    name: "VM 2022",
    date: "2022-06-01T12:30",
    quizes: [
        {
            name: "Group Stage",
            matches: [
                {
                    name: "Match 1",
                    team1: {
                        name:"Sweden",
                        flag: ""
                    },
                    team2: {
                        name: "Norway",
                        flag: ""
                    },
                    channel: "tv4",
                    isTieable: true,
                    pointsCode: 1,
                    date: "2022-06-01T12:30"
                },
                {
                    name: "Match 2",
                    team1: {
                        name:"Brazil",
                        flag: ""
                    },
                    team2: {
                        name: "Island",
                        flag: ""
                    },
                    channel: "tv4",
                    isTieable: true,
                    pointsCode: 1,
                    date: "2022-06-01T12:30"
                }
            ]
        },
        {
            name: "Ghost Quiz",
            matches: [
                {
                    name: "Match 3",
                    team1: {
                        name:"A1",
                        flag: ""
                    },
                    team2: {
                        name: "B2",
                        flag: ""
                    },
                    channel: "tv4",
                    isTieable: false,
                    pointsCode: 1,
                    date: "2022-06-01T12:30"
                },
                {
                    name: "Match 4",
                    team1: {
                        name:"C1",
                        flag: ""
                    },
                    team2: {
                        name: "D2",
                        flag: ""
                    },
                    channel: "tv4",
                    isTieable: false,
                    pointsCode: 1,
                    date: "2022-06-01T12:30"
                }
            ]
        }
    ]
}

export function fillDB(){
     createGame2(createMyGame())
   
}
