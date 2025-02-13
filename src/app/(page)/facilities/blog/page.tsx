import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import MainArticle from "@/app/_components/client-components/blog/MainArticle";
import SquareArticle from "@/app/_components/client-components/blog/SquareArticle";
import { articleBlogData } from "@/app/assets/user-data";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="px-16">
        <div className="mt-10 w-full">
          <h1 className="text-text-60 text-3xl">Article Blog</h1>
        </div>
        <div className="mt-10 flex flex-col gap-10">
          {articleBlogData
            .filter((article) => article.mainArticle)
            .map((article) => (
              <MainArticle
                key={article.slug}
                title={article.title}
                description={article.description}
                image={article.thumbnailImage as unknown as string}
                altImage={article.thumbnailAltText}
                slug={article.slug}
              />
            ))}
          <div className="grid grid-cols-3 gap-10 mt-10 mb-20">
            {articleBlogData
              .filter((article) => !article.mainArticle)
              .map((article) => (
                <SquareArticle
                  key={article.slug}
                  title={article.title}
                  image={article.thumbnailImage as unknown as string}
                  altImage={article.thumbnailAltText}
                  slug={article.slug}
                />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
