import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type InputDefaultProps = ComponentPropsWithoutRef<"textarea">;
export default function InputDefault({ ...props }: InputDefaultProps) {
  return (
    <textarea
      className={clsx(
        "input bg-white w-full h-16 rounded-full shadow-2xl resize-none",
        "font-manrope text-black text-lg placeholder:text-black/50 placeholder:text-lg placeholder:pl-2 pt-4"
      )}
      {...props}
    />
  );
}
