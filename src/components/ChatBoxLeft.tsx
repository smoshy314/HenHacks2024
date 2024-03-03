import React from "react";
import { Group } from "./ChatView";
import { GroupCard } from "./GroupCard";
import { ChatBoxLeftProps } from "../Interfaces/chatBoxLeft";

export function ChatBoxLeft({
  groups, 
  setGroups,
  currentGroup,
  setCurrentGroup,
  setChatView
}: ChatBoxLeftProps): JSX.Element{
    
  function handleGroupJoin(groupName:string){
      const newGroups: Group[] = groups.map((group)=>
        group.name === groupName ? {...group, joined: true} : group
      );
      setGroups(newGroups);
      handleClickedGroup(groupName);
    }
    function handleClickedGroup(groupName:string){
      const groupIndex = groups.findIndex((group)=>group.name === groupName);
      setCurrentGroup(groups[groupIndex]);
      setChatView(true);
    }
    return (
      <div className="ChatViewLeft">
        {groups.map((group)=>
        <GroupCard 
          group={group} 
          handleGroupJoin={handleGroupJoin} 
          handleClickedGroup={handleClickedGroup}
        />
        )}
      </div>
    );
  }