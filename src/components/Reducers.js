
export function selectReducer(state, action) {
    switch(action.type) {
        case "SET_TYPE": return {...state, type: action.payload};
        case "SET_TAB": return {...state, tab: action.payload};
        case "SET_OBJECT": return {...state, object: action.payload};
        case "SELECT_OBJECT": return {...state, object: action.payload.object, tab: action.payload.tab};
        case "SET_ALL": return {...state, ...action.payload};
        default: return state;
    }
}

export function listReducer(state, action) {
    switch(action.type) {
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

        case "SELECT_OBJECT":
            console.log(state);
            return state;

        default: return state;
    }
}