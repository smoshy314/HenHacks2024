import React from 'react';
import { Button } from 'react-bootstrap';
import { GroupCardProps } from '../Interfaces/groupCard';


export function GroupCard({
    group,
    handleGroupJoin,
    handleClickedGroup
}: GroupCardProps): JSX.Element {
    
    return (
        <div className="GroupCard">
            <h1>{group.name}</h1>
            <div className="GroupJoinCard">
                <img className="img-format" src={group.img} alt="Group Icon" onClick={() => handleClickedGroup(group.name)}/>
                <Button onClick={() => handleGroupJoin(group.name)}>Join Group</Button>
            </div>
            <br></br>
        </div>
    );
}
