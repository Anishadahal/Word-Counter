import { useState } from "react";
import { Warning } from "./Warning";

export const Textarea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed.");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed.");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
      />
      <Warning warningText={warningText} />
    </div>
  );
};
