import React from 'react';
import { Button } from 'react-bootstrap';
import './ChatView.css';

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
  return (
    <div className="ChatView">
      
      <div className='chat-container'>Testing</div>
    </div>
  );
}