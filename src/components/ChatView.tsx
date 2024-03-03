import React, { useState } from 'react';
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

export function ChatView(): JSX.Element{
  const [testGroups, setTestGroups] = useState<Group[]>(groupData as Group[]);
  const [currentGroup, setCurrentGroup] = useState<Group>({name: "", img: "", joined: false, chatlog: []});
  return (
    <div className="ChatView">
      <ChatBoxLeft
        groups={testGroups}
        setGroups={setTestGroups}
        currentGroup={currentGroup}
        setCurrentGroup={setCurrentGroup}
      />
      <ChatBoxRight group={currentGroup} groups={testGroups} setGroups={setTestGroups}/> 
    </div>
  );
}