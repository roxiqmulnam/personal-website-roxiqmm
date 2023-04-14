import Layout from "@/components/layouts/Layout";
import Head from "next/head";

type ListProps = {
  title: string;
  desc?: string;
  url?: string;
};

const projectList: ListProps[] = [
  {
    title: "Portfolio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "Documentation",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "Personal Web",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "Todo List",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "Survey Form",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
];
export default function Projects() {
  return (
    <>
      <Head>
        <title>Roxiq Mulna Muhammad - Personal Website</title>
      </Head>
      <Layout>
        <main>
          <h1>Projects</h1>
          <p>Results myy learn and works on web development.</p>

          <article className="py-5">
            <h2>Feature Projects</h2>

            <section className="my-5 grid grid-cols-2 gap-6">
              {projectList.map((link) => (
                <div className="rounded-md border">
                  <div className="relative h-44 rounded-md border">
                    <img
                      className="-z-10 h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291cmNlJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 opacity-60 transition-opacity hover:opacity-0"></div>
                    <h3 className="absolute bottom-0 w-full border text-center">
                      {link.title}
                    </h3>
                  </div>

                  <div className="m-5">
                    <p>{link.desc}</p>
                    <p>NextJS ReactJS</p>
                    <p>See More</p>
                  </div>
                </div>
              ))}
            </section>
          </article>
        </main>
      </Layout>
    </>
  );
}
