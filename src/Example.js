import React from "react";
import "./Example.css";

export default function Example(props) {
  let name = `collapseExample${props.index}`;
  let href = `#${name}`;
  if (props.example) {
    return (
      <div className="Example">
        <div>
          <a
            className="example-button"
            data-bs-toggle="collapse"
            href={href}
            role="button"
            aria-expanded="false"
            aria-controls={name}
          >
            <strong>See example</strong>
          </a>
        </div>
        <div className="collapse" id={name}>
          <div className="examples card card-body">
            <em>{props.example}</em>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
