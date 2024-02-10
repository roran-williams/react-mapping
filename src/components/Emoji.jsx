import React from "react";

function Emoji(props) {
  return (
    <div className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={props.name}>
            {props.emoji}
          </span>
          <span className="emoji-name">{props.name}</span>
        </dt>
        <dd className="emoji-meaning">{props.meaning}</dd>
      </div>
    </div>
  );
}

export default function Emojies(props) {
  return (
    <div>
      {props.emojis.map((emoji) => (
        <div key={emoji.id}>
          <Emoji
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        </div>
      ))}
    </div>
  );
}
