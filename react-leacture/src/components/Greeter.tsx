import React from "react";

// 1. ts에서는 props사용시 반드시 타입을 명시해주어야한다.
interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello! {person}</h1>;
}

export default Greeter;
