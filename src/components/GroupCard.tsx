import React from 'react';
import { Button } from 'react-bootstrap';
import { GroupCardProps } from '../Interfaces/groupCard';


export function GroupCard({
    group,
    handleGroupJoin,
    handleClickedGroup,
}: GroupCardProps): JSX.Element {
    
    return (
        <div className="GroupCard">
            <div className='group-card'>
                <h1 onClick={() => handleClickedGroup(group.name)}>{group.name}</h1>
                <img src={group.img} alt="Group Icon"/>
                <Button onClick={() => handleGroupJoin(group.name)}>Join Group</Button>
            </div>
        </div>
    );
}
