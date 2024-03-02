import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './ChatView.css';
import { ChatBoxLeft } from './ChatBoxLeft';

export interface Chat {
  username: string;
  message: string;
}

export interface Group {
  name: string;
  img: string;
  joined: boolean;
  chatlog: Chat[]
}

export function ChatView(): JSX.Element{
  const [testGroups, setTestGroups] = useState<Group[]>([{name: "Test Group", img: "/Images/dog.jpg", joined: false, chatlog: []}]);
  const [currentGroup, setCurrentGroup] = useState<Group | undefined>();
  return (
    <div className="ChatView">
      <ChatBoxLeft
        groups={testGroups}
        setGroups={setTestGroups}
        currentGroup={currentGroup}
        setCurrentGroup={setCurrentGroup}
      />
    </div>
  );
}