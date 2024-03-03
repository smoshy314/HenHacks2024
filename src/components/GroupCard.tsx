import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GroupCardProps } from '../Interfaces/groupCard';


export function GroupCard({
    group,
    handleGroupJoin,
    handleClickedGroup
}: GroupCardProps): JSX.Element {
    const [shown, setShown] = useState<boolean>(false);

    return (
        <div className="GroupCard" 
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}>
            <h1>{group.name}</h1>
            <div className="GroupJoinCard">
                <img className="img-format" src={group.img} alt="Group Icon" onClick={() => handleClickedGroup(group.name)}/>
                {!group.joined && <Button onClick={() => handleGroupJoin(group.name)}>Join Group</Button>}
            </div>
            <br></br>
            {shown && (
                <div>
                    Click my profile or the "Join Group" button to be added to the chat!
                </div>
            )}
        </div>
    );
}
