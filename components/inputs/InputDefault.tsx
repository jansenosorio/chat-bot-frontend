import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type InputDefaultProps = ComponentPropsWithoutRef<"input">;
export default function InputDefault({ ...props }: InputDefaultProps) {
  return (
    <input
      type="text"
      className={clsx(
        "input bg-white w-full h-16 rounded-full shadow-2xl",
        "font-manrope text-black text-lg placeholder:text-black/50 placeholder:text-lg placeholder:pl-2"
      )}
      {...props}
    />
  );
}
