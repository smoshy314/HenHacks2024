import React from "react";
import { Chat } from "./ChatView";
import Card from 'react-bootstrap/Card';

interface MessagesOutputProps {
    chatlog: Chat[];
}
/**
 * Renders the chat messages in the chat box.
 *
 * @param {MessagesOutputProps} props - The component props.
 * @param {Chat[]} props.chatlog - The array of chat messages.
 * @returns {JSX.Element} The rendered chat messages.
 */
export function MessagesOutput({chatlog}:MessagesOutputProps): JSX.Element {
    return (
        <div className="chatContainer">
            {chatlog.map((chat) =>
                chat.username === "YOU" ? (
                    <div className="message">
                        <div className="youUser">{chat.username}</div>
                        <Card body className="chatbubbleYOU">{chat.message}</Card>
                        <br></br>
                    </div>
                ) : (
                    <div className="message">
                        <div className="otherUser">{chat.username}</div>
                        <Card body className="chatbubbleOTHER">{chat.message}</Card>
                        <br></br>
                    </div>
                )
            )}
        </div>
    );
}
