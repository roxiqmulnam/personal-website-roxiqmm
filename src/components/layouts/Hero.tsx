import React from "react";

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
    title: "Landing Page",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
];
const articleList: ListProps[] = [
  {
    title: "HTML",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "CSS",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "Javascript",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
];

const contactList: ListProps[] = [
  {
    title: "Twitter",
  },
  {
    title: "LinkedIn",
  },
  {
    title: "Github",
  },
];

export default function Hero() {
  return (
    <>
      <div className="layout-component text-white">
        <section className="my-20">
          <h1 className="mb-3">
            Hello! I'm <span className="font-bold">Roxiq</span>
          </h1>
          <h3>I passionate learn about Web Development,</h3>
          <h3>And focusing on Frontend Dev.</h3>
          <div className="flex gap-10 mt-5">
            {contactList.map((list) => (
              <p>{list.title}</p>
            ))}
          </div>
        </section>

        <article className="mt-30">
          <h1>Feature Projects</h1>
          <div className="my-5 grid grid-cols-2 gap-4">
            {projectList.map((link) => (
              <div className="rounded-md border p-5">
                <h3>{link.title}</h3>
                <p>{link.desc}</p>
                <br />
                <div className="my-1 h-40 border p-5">Fake Image</div>
                <p>See More</p>
              </div>
            ))}
          </div>
        </article>
        <article className="mt-10">
          <h1>Feature Articles</h1>
          <div className="my-5 grid grid-cols-2 gap-4">
            {articleList.map((link) => (
              <div className="rounded-md border p-5">
                <h3>{link.title}</h3>
                <p>{link.desc}</p>
                <br />
                <div className="my-1 h-40 border p-5">Fake Image</div>
                <p>See More</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
