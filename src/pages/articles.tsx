import Layout from "@/components/layouts/Layout";
import Head from "next/head";

type ListProps = {
  title: string;
  desc?: string;
  url?: string;
};

const articleList: ListProps[] = [
  {
    title: "HTML",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "CSS",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "PHP",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Typescript",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Tailwind",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Algorithm",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Data Structure",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "ReactJS",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

export default function Articles() {
  return (
    <>
      <Head>
        <title>Roxiq Mulna Muhammad - Personal Website</title>
      </Head>
      <Layout>
        <main>
          <h1>Articles</h1>
          <p>My thoughts, and writting can learning more understanding.</p>

          <article className="py-5">
            <h2>Feature Articles</h2>
            <div className="my-5 grid grid-cols-3 gap-4">
              {articleList.map((link) => (
                <div className="rounded-md border">
                  <img
                    className="object-cover object-center"
                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291cmNlJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                  <div className="px-5 py-2">

                  <h3 className="mb-2">{link.title}</h3>
                  <p>April 13, 2023</p>
                  <p>{link.desc}</p>
                  <p>See More</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </main>
      </Layout>
    </>
  );
}
