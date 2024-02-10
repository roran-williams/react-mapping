import React from "react";
import Emojies from "./Emoji";
import emojipedia from "../emojipedia";
 
const newEmojies = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  // Add more emoji objects as needed
];

function App() {
  return (
    <div>
      <h1>Emojis</h1>
      <Emojies emojis={emojipedia} />
      <Emojies emojis={newEmojies} />
    </div>
  );
}

export default App;
