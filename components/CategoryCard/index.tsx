"use client";

import { ButtonHTMLAttributes, useReducer } from "react";
import module from "./index.module.scss";
import Image from "next/image";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  src: string;
};

export function CategoryCard({ src, className, children, ...props }: Props) {
  const [hovered, setHovered] = useReducer((state: boolean) => {
    return !state;
  }, false);

  return (
    <button
      onMouseEnter={setHovered}
      onMouseLeave={setHovered}
      className={`${module.card} ${className}`}
      {...props}
    >
      <Image
        src={src}
        alt="Alt for CategoryCard"
        width={1600}
        height={900}
        className={`${module["background-image"]} ${!hovered && "grayscale"}`}
      />
      <div className={module.cover}></div>
      <strong>{children}</strong>
    </button>
  );
}
