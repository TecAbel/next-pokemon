import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  title?: string;
}
export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  title,
}) => {
  return (
    <div dark-mode="dark" className="h-screen bg-gray-100 dark:bg-black">
      <Head>
        <title>{title || "Pokémon"}</title>
        <meta name="author" content="Abelardo Aqui"></meta>
        <meta name="description" content={`Info sobre pokémon ${title}`}></meta>
        <meta name="keywords" content={`${title}, pokémon, pokedex`}></meta>
      </Head>

      <main>
        <Navbar />
        <div className="container mx-auto py-3 px-4 md:px-0">{children}</div>
      </main>
    </div>
  );
};
