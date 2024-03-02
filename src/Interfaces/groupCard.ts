import { Group } from "../components/ChatView";

export interface GroupCardProps {
    group: Group;
    handleGroupJoin: (groupName: string) => void;
    handleClickedGroup: (groupName: string) => void;
}