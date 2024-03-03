import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ChatView.css';
import { ChatBoxLeft } from './ChatBoxLeft';
import { ChatBoxRight } from './ChatBoxRight';
import groupData from '../data/groupData.json';

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

export const blankChat: Chat = {
  username: "",
  message: ""
}

export const blankGroup: Group = {
  name: "",
  img: "",
  joined: false,
  chatlog: [blankChat]
};

export function ChatView(): JSX.Element{
  const [testGroups, setTestGroups] = useState<Group[]>(groupData);
  const [currentGroup, setCurrentGroup] = useState<Group>(blankGroup);
  const [chatView, setChatView] = useState<boolean>(false);
  return (
    <div className="ChatView">
      <ChatBoxLeft
        groups={testGroups}
        setGroups={setTestGroups}
        currentGroup={currentGroup}
        setCurrentGroup={setCurrentGroup}
        setChatView={setChatView}
      />
      {chatView && <ChatBoxRight group={currentGroup} groups={testGroups} setCurrentGroup={setCurrentGroup} setGroups={setTestGroups}/>}
    </div>
  );
}