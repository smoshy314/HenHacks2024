import React from "react";
import { Group } from "./ChatView";
import { GroupCard } from "./GroupCard";
import { ChatBoxLeftProps } from "../Interfaces/chatBoxLeft";

/**
 * Renders the left side of the chat box, displaying a list of groups.
 * @param {Object} props - The component props.
 * @param {Group[]} props.groups - The array of groups to be displayed.
 * @param {Function} props.setGroups - The function to update the groups array.
 * @param {Group} props.currentGroup - The currently selected group.
 * @param {Function} props.setCurrentGroup - The function to update the currently selected group.
 * @param {Function} props.setChatView - The function to update the chat view.
 * @returns {JSX.Element} The rendered component.
 */
export function ChatBoxLeft({
  groups, 
  setGroups,
  currentGroup,
  setCurrentGroup,
  setChatView
}: ChatBoxLeftProps): JSX.Element{
    
  /**
   * Handles joining a group.
   * @param {string} groupName - The name of the group to join.
   */
  function handleGroupJoin(groupName:string){
      const newGroups: Group[] = groups.map((group)=>
        group.name === groupName ? {...group, joined: true} : group
      );
      setGroups(newGroups);
      handleClickedGroup(groupName);
    }
    
    /**
     * Handles clicking on a group.
     * @param {string} groupName - The name of the clicked group.
     */
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