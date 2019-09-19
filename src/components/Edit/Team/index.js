import React from 'react';

const EditTeam = props => {
    const team = props.selected.object;
    return (
        <div>
            <div>
                <p style={{display: "inline-block"}}>ID:</p>
                <input
                    value={team.id}
                />
            </div>
            <div>
                <p style={{display: "inline-block"}}>name:</p>
                <input
                    value={team.name}
                />
            </div>
            <div>
                <p style={{display: "inline-block"}}>flag:</p>
                <input
                    value={team.flag}
                />
            </div>

        </div>
    );
};

export default EditTeam;