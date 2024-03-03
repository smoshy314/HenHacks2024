import { Group } from "../components/ChatView";


   //Represents the props for a group card component.
 
export interface GroupCardProps {
    /**
     * The group object containing information about the group.
     */
    group: Group;
    
    /** Callback function to handle joining a group.     */
    handleGroupJoin: (groupName: string) => void;
    
    /**
     * Callback function to handle clicking on a group.
     */
    handleClickedGroup: (groupName: string) => void;
}