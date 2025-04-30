import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { articleBlogData } from "@/app/assets/user-data";
import SquareArticle from "@/app/_components/client-components/blog/SquareArticle";

export default async function DetailsBlog(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;

  const {
    slug
  } = params;

  const article = articleBlogData.find((article) => article.slug === slug);

  let Article = null;
  try {
    Article = (await import(`@/app/_contents/${slug}.mdx`)).default;
  } catch {}

  if (!article || !Article) {
    return (
      <>
        <Navbar />
        <main className="px-6 lg:px-16">
          <div className="mt-10 w-full">
            <h1 className="text-text-60 text-3xl">Article Blog</h1>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center h-[calc(100vh_-_584px)] gap-10">
            <h1 className="text-text-60 text-3xl font-bold">
              Article Not Found !
            </h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16">
        <Article />
        <div className="mt-10 flex flex-col gap-10">
          {/*<span className="inline-flex w-full items-center justify-center text-gradient">
              <h1 className="font-bold text-3xl text-center w-2/3">
                {article.title}
              </h1>
            </span>
            <span className="inline-flex flex-row justify-between text-text-60">
              <span className="italic">{article.author}</span>
              <span className="italic">{article.date}</span>
            </span>
            <div className="w-full">
              <Image
                width={1000}
                height={400}
                src={article.image}
                alt={article.altImage}
              />
            </div>
            <div className="w-full flex flex-col gap-5">
              {article.paragraphBeforeImage.map((content, index) => (
                <p key={index} className="indent-8">
                  {content}
                </p>
              ))}
            </div>
            <div className="w-full flex flex-row gap-5 overflow-x-auto gallery py-3">
              {article.imageInParagraph.map((content, index) => (
                <Image
                  key={index}
                  width={600}
                  height={400}
                  className="w-full"
                  src={content.src}
                  alt={content.alt}
                />
              ))}
            </div>
            <div className="w-full flex flex-col gap-5">
              {article.paragraphAfterImage.map((content, index) => (
                <p key={index} className="indent-8">
                  {content}
                </p>
              ))}
            </div>*/}
          <span className="separator mt-20 mb-20">Related Article</span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-40">
            {articleBlogData
              .filter((article) => article.slug !== slug)
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
