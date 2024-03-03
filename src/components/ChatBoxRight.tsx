import React, { useState } from "react";
import { Group } from "./ChatView";
import { Chat } from "./ChatView";
import groupText from "../data/groupData.json";
import { Form, Button } from "react-bootstrap";
import { MessagesOutput } from "./ChatBoxMessage";

export interface ChatBoxRightProps {
  group?: Group,
  groups: Group[],
  setGroups: (group: Group[]) => void;};

export function ChatBoxRight({group, groups, setGroups}:ChatBoxRightProps): JSX.Element{
    const [currentMessage, setCurrentMessage] = useState<string>(""); 
    
    function handleFormEdit(e: React.ChangeEvent<HTMLInputElement>){
      setCurrentMessage(e.target.value);
    };

    function handleSendMessage(){
      const newChat: Chat = {username: "YOU", message: currentMessage};
      const newChatlog: Chat[] = group.chatlog.concat(newChat);
      const newGroup: Group = {...group, chatlog: newChatlog};
      setGroups(groups.map((g)=>g.name === group.name ? newGroup : g));
    }
    return (
      <div className="ChatView">
        <Form.Group>
          <Form.Control placeholder="Message" value={currentMessage} onChange={handleFormEdit} />
        </Form.Group>
        <Button onClick={handleSendMessage}>➡️</Button>
        <MessagesOutput chatlog={group.chatlog}/>

      </div>
    );
}
