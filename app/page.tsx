import { Footer, Header } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 py-4 w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12 flex flex-col gap-4 items-center text-center">
        <p>
          Seja bem-vind@ ao site mais inútil. Eu não sei o que você está fazendo
          aqui, mas sei que você não tem o que fazer(venhamos e convenhamos).
          Aqui estão algumas ferramentas de futilidade para você se divertir(ou
          tentar).a
        </p>
      </main>
      <Footer />
    </>
  );
}
