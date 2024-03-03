import React from "react";
import { Chat } from "./ChatView";

interface MessagesOutputProps {
    chatlog: Chat[];
}
export function MessagesOutput({chatlog}:MessagesOutputProps): JSX.Element {
    return (
        <>
            {chatlog.map((chat) =>
                chat.username === "YOU" ? (
                    <div className="message">
                        <p>{chat.message}</p>
                    </div>
                ) : (
                    <div className="message">
                        <p>{chat.username}</p>
                        <p>{chat.message}</p>
                    </div>
                )
            )}
        </>
    );
}
