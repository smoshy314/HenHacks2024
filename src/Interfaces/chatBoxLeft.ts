/**
 * Represents the props for the ChatBoxLeft component.
 */
import { Group } from "../components/ChatView";

export interface ChatBoxLeftProps {
    
     // An array of Group objects representing the groups in the chat.
    groups: Group[];

    
      //A function to update the groups in the chat.
    setGroups: (group: Group[]) => void;

    
      //The currently selected group in the chat.
     
    currentGroup: Group;

     // A function to update the currently selected group in the chat.
     setCurrentGroup: (group: Group) => void;

    // A function to toggle the chat view.
    setChatView: (chatView: boolean) => void;
}
