import React, {useContext, useState} from 'react';
import {StateContext, ListContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import SearchableList from "../../SearchableList";

const EditQuestion = props => {
    const {selected, dispatch} = useContext(StateContext);
    const lists = useContext(ListContext);
    const question = selected.object;

    const [slogan, sloganBond] = useInput(question.slogan);
    const [pointsCode, pointsCodeBond] = useInput(question.pointsCode);
    const [answerType, answerTypeBond] = useInput(question.answerType);
    const [alternatives, setAlts] = useState(question.alternatives);
    const [alternative, altBond, altReset] = useInput();
    const [results, setResults] = useState(question.results);
    const [result, resultBond, resultReset] = useInput();
    const [quiz, setQuiz] = useState(question.quiz)


    return (
        <div>
            <div>
                <label>ID:</label>
                <input disabled={true} value={question.id}/>
            </div>

            <div>
                <label>slogan:</label>
                <input {...sloganBond}/>
            </div>

            <div>
                <label>pointsCode:</label>
                <input {...pointsCodeBond} />
            </div>

            <div>
                <label>answerType:</label>
                <input {...answerTypeBond} />
            </div>

            <div>
                <label>quiz:</label>
                <SearchableList
                    list={lists.quiz}
                    mapping={(q, i) =>
                        <button
                            key={i}
                            className={(q.id === quiz.id ? "selected" : "")}
                            onClick={() => {
                                if(q.id === quiz.id) {
                                    dispatch({type: "SELECT_OBJECT", payload: {object: q, tab: "quiz"}})
                                } else {
                                    setQuiz(q)
                                }
                            }}
                        >
                            {`${q.id}. ${q.name}`}
                        </button>}
                />
            </div>

            <div>
                <label>alternatives:</label>
                {alternatives.map((a,i) =>
                    <div key={i}>
                        {a}
                        <button onClick={() => setAlts(alternatives.filter((_, i1) => i !== i1))}>
                            X
                        </button>
                    </div>
                )}
                <input
                    {...altBond}
                    placeholder={"Add alternative"}
                    onKeyPress={e => e.charCode === 13 && setAlts([...alternatives, altReset()])}
                />
                <button onClick={() => {
                    setAlts([...alternatives, altReset()])
                }}>+</button>
            </div>

            <div>
                <label>results:</label>
                {results.map((a,i) =>
                    <div key={i}>
                        {a}
                        <button onClick={() => setResults(results.filter((_, i1) => i !== i1))}>
                            X
                        </button>
                    </div>
                )}
                <input
                    {...resultBond}
                    placeholder={"Add result"}
                    onKeyPress={e => e.charCode === 13 && setResults([...results, resultReset()])}
                />
                <button onClick={() => {
                    setResults([...results, resultReset()])
                }}>+</button>
            </div>
        </div>
    );
};

export default EditQuestion;