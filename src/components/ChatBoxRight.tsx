import React, { useState } from "react";
import { Group } from "./ChatView";
import { Chat } from "./ChatView";
import { Form, Button } from "react-bootstrap";
import { MessagesOutput } from "./ChatBoxMessage";

export interface ChatBoxRightProps {
    group: Group,
    groups: Group[],
    setCurrentGroup: (grp: Group) => void,
    setGroups: (group: Group[]) => void
}

/**
 * Renders the right side of the chat box component.
 * @param group - The current group being displayed.
 * @param groups - The list of all groups.
 * @param setCurrentGroup - A function to set the current group.
 * @param setGroups - A function to set the list of groups.
 * @returns The JSX element representing the right side of the chat box.
 */
export function ChatBoxRight({group, groups, setCurrentGroup, setGroups}:ChatBoxRightProps): JSX.Element{
    const [currentMessage, setCurrentMessage] = useState<string>("");

    /**
     * Handles the change event of the input field in the form.
     * @param e - The change event.
     */
    function handleFormEdit(e: React.ChangeEvent<HTMLInputElement>){
      setCurrentMessage(e.target.value);
    };

    /**
     * Handles the send message button click event.
     */
    function handleSendMessage(){
      const newChat: Chat = {username: "YOU", message: currentMessage};
      const newChatlog: Chat[] = group.chatlog.concat(newChat);
      const newGroup: Group = {...group, chatlog: newChatlog};
      setGroups(groups.map((g)=>g.name === group.name ? newGroup : g));
      setCurrentGroup(newGroup);
    }

    return (
      <div className="ChatViewRight">
        <MessagesOutput chatlog={group.chatlog}/>
        <Form.Group className="messageType">
          <Form.Control placeholder="Message" value={currentMessage} onChange={handleFormEdit} />
          <Button className="chatSubmit" onClick={handleSendMessage}>➡️</Button>
        </Form.Group>
        <br></br>
      </div>
    );
}
