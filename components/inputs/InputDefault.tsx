import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type InputDefaultProps = ComponentPropsWithoutRef<"input">;
export default function InputDefault({ ...props }: InputDefaultProps) {
  return (
    <input
      type="text"
      className={clsx(
        "input bg-blue-200 border border-blue-500 w-full",
        "font-manrope text-black placeholder:text-black/50"
      )}
      {...props}
    />
  );
}
