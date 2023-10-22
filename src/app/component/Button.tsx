import React, { ButtonHTMLAttributes } from "react";
import { experimental_useFormStatus } from "react-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { children, disabled, ...rest } = props;
  const { pending } = experimental_useFormStatus();

  return (
    <button {...rest} disabled={disabled || pending}>
      {pending ? "Loading..." : children}
    </button>
  );
}
