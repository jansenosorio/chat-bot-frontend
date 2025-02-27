import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type InputDefaultProps = ComponentPropsWithoutRef<"input">;
export default function InputDefault({ ...props }: InputDefaultProps) {
  return (
    <input
      type="text"
      className={clsx(
        "input bg-white w-full",
        "font-manrope text-black placeholder:text-black/50"
      )}
      {...props}
    />
  );
}
