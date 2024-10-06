"use client";
import classNames from "classnames";
import { useState } from "react";

export default function Example() {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={classNames(`tham tham-e-squeeze tham-w-6`, {
        "tham-active": opened,
      })}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}
