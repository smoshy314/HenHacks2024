import React, { useState } from "react";
import { Group } from "./ChatView";
import { Chat } from "./ChatView";
import groupText from "../data/groupData.json";

export function ChatBoxRight(group: Group): JSX.Element{
    const AMT: Group = groupText[0];
    
    return (
      <div className="ChatView">
        
        <div className='chat-container'>Testing</div>
      </div>
    );
  }