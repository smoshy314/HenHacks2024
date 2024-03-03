import React, { useState, useEffect } from "react";

export interface TextProps {
    text: string
}

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
      <button onClick={Play}>{stopped ? "Resume" : "Play"}</button>
      <button onClick={Pause}>Pause</button>
      <button onClick={Stop}>Stop</button>
    </div>
  );
};

export default TextToSpeech;
