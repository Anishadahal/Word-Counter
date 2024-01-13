import { useState } from "react";

export const Textarea = () => {
  const [text, setText] = useState("");
  return (
    <textarea
      className="textarea"
      onChange={(e) => {
        const newText = e.target.value;
        setText(newText);
      }}
      placeholder="Enter your text"
      spellCheck="false"
      value={text}
    />
  );
};
