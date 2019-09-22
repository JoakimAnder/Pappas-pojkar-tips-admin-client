export const tabs = {
    "game":"games", "quiz":"quizes", "question":"questions", "match":"matches", "team":"teams"
}
export function reducer(state, action) {
    switch(action.type) {

        case "SELECT_TAB":
            return {...state, selectedTab: action.payload};
        case "SELECT_OPERATION":
            return {...state, selectedOperation: action.payload};
        case "SELECT_OBJECT":
            state = reducer(state,{type: "SELECT_OPERATION", payload: "edit"});
            state = reducer(state,{type: "SELECT_TAB", payload: action.payload.tab});

            let selectedObject = action.payload.object;
            selectedObject = state[tabs[state.selectedTab]].find(o => o.id === selectedObject.id) || selectedObject;
            return {...state, selectedObject};




        case "ADD_TASK": return {...state, tasks: [...state.tasks, action.task], isLoading: true};
        case "REMOVE_TASK":
            const tasks = [...state.tasks.filter(t => t !== action.task)];
            const isLoading = tasks.length !== 0;
            return isLoading === state.isLoading ? {...state, tasks} : {...state, tasks, isLoading};

        case "GET_ALL":
            console.log("Got Everything");
            return {...state, ...action.payload};

        case "GET_GAMES":
            console.log("Got Games");
            return {...state, games: action.payload};

        case "GET_QUIZES":
            console.log("Got Quizes");
            return {...state, quizes: action.payload};

        case "GET_MATCHES":
            console.log("Got Matches");
            return {...state, matches: action.payload};

        case "GET_QUESTIONS":
            console.log("Got Questions");
            return {...state, questions: action.payload};

        case "GET_TEAMS":
            console.log("Got Teams");
            return {...state, teams: action.payload};

        default: return state;
    }
}