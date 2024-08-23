"use client";

import { Footer, Header } from "@/components";
import module from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CategoryCard } from "@/components";

export default function Home() {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main className={module.main}>
        <p>
          Seja bem-vind@ ao site mais inútil. Eu não sei o que você está fazendo
          aqui, mas sei que você não tem o que fazer(venhamos e convenhamos).
          Aqui estão algumas ferramentas de futilidade para você se divertir(ou
          tentar).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8">
          <CategoryCard src="/public/dev.png" className="col-span-1">
            4DEVS
          </CategoryCard>
          <CategoryCard src="/public/toolkit.webp" className="col-span-1">
            Ferramentas
          </CategoryCard>
        </div>
      </main>
      <Footer />
    </>
  );
}
