import Image from "next/image";
import { useMemo } from "react";
import module from "./not-found.module.scss";

export default function Page() {
  const startWords: Array<string> = ["Calma", "Que isso", "Eita", "Coé"];
  const endWords: Array<string> = [
    "mermão",
    "javascripto",
    "calabreso",
    "linguiço",
  ];

  const content = useMemo<string>(
    () =>
      `${startWords[Math.floor(Math.random() * startWords.length)]} ${
        endWords[Math.floor(Math.random() * endWords.length)]
      }`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className={module.content}>
      <Image src={"/public/Icon.png"} width={256} height={256} alt="Icon" />
      <h1>{content}</h1>
    </div>
  );
}
