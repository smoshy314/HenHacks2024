import { Group } from "../components/ChatView";

export interface ChatBoxLeftProps {
    groups: Group[];
    setGroups: (group: Group[]) => void;
    currentGroup: Group;
    setCurrentGroup: (group: Group) => void;
    setChatView: (chatView: boolean) => void;
}
