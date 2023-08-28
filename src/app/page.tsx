import Image from "next/image";
import styles from "./page.module.css";
import { getPageContent, getPageProperties } from "@/utils/notion";
import { Article } from "@/components/article/Article";

export default async function Home() {
  const pages = await getPageProperties();
  const articles = await Promise.all(pages.map(async (page) => await getPageContent(page.id)));

  return (
    <div className="p-8">
      <header className="flex flex-col items-center justify-center text-xg">Notion と Next.js を作るブログ</header>
      <div className="flex flex-col space-y-8">
        {articles.map((article, index) => (
          <Article key={index} content={article} />
        ))}
      </div>
    </div>
  );
}
