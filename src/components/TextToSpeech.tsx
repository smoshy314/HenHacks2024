import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export interface TextProps {
    text: string
}

/**
 * Renders the text to speech component.
 * @param text - The text to be spoken.
 * @returns The JSX element representing the text to speech component.
 */
export function TextToSpeech({text}:TextProps): JSX.Element {
    const [stopped, setStopped] = useState<boolean>(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance>({} as SpeechSynthesisUtterance);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const voiced = new SpeechSynthesisUtterance(text);
        setUtterance(voiced);

        return () => {
            synth.cancel();
        };
    }, [text]);

    function Play() {
        const synth = window.speechSynthesis;
        if (stopped) {
            synth.resume();
        }
        synth.speak(utterance);
        setStopped(true);
    }

    function Pause() {
        const synth = window.speechSynthesis;
        synth.pause();
        setStopped(true);
    }

    function Stop() {
        const synth = window.speechSynthesis;
        synth.cancel();
        setStopped(false);
    }

  return (
    <div>
      <Button className="play-button" onClick={Play}>{stopped ? "Resume" : "Play"}</Button>
      <Button onClick={Pause}>Pause</Button>
      <Button onClick={Stop}>Stop</Button>
    </div>
  );
};

export default TextToSpeech;
