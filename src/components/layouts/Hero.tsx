import Image from "next/image";
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

const skillStack: ListProps[] = [
  {
    title: "JavaScript",
  },
  {
    title: "ReactJS",
  },
  {
    title: "NextJS",
  },
  {
    title: "PHP",
  },
];

export default function Hero() {
  return (
    <>
      <div className="layout-component text-white">
        <div className="flex w-full">
          <section className="my-5 w-2/3">
            <h1 className="mb-3">
              Hello! I'm <span className="font-bold">Roxiq</span>
            </h1>
            <h3>I passionate learn about Web Development,</h3>
            <h3>And focusing on Frontend Dev.</h3>
            <div className="mt-5 flex gap-5">
              {contactList.map((list) => (
                <div className="rounded-md border p-2">
                  <h4>{list.title}</h4>
                </div>
              ))}
            </div>
            <section className="mt-5">
              <h3>Favorite Tech Stack</h3>
              <div className="flex gap-5">
                {skillStack.map((list) => (
                  <p>{list.title}</p>
                ))}
              </div>
            </section>
          </section>

          <section className="flex w-2/6">
            <div className="h-auto w-full rounded-lg border">
              {/* <Image
                  src="/hero.jpg"
                  alt="My Image"
                  width={300}
                  height={300}
                /> */}
            </div>
          </section>
        </div>

        <article className="mt-10 rounded-md border border-white p-5">
          <div className="flex justify-between">
            <h2>Feature Projects</h2>
            <h4>See all</h4>
          </div>
          <section className="my-5 grid grid-cols-2 gap-10">
            {projectList.map((link) => (
              <div className="rounded-md border">
                <div className="relative h-56 rounded-md border">
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

                <div className="p-5">
                  <p>{link.desc}</p>
                  <p>NextJS ReactJS</p>
                  <p>See More</p>
                </div>
              </div>
            ))}
          </section>
        </article>

        <article className="mt-5 rounded-md border border-white p-5">
          <div className="flex justify-between">
            <h2>Feature Articles</h2>
            <h4>See all</h4>
          </div>
          <div className="my-5 grid grid-cols-3 gap-4">
            {articleList.map((link) => (
              <div className="rounded-md border p-2">
                <h3>{link.title}</h3>
                <p>April 13, 2023</p>
                <p>{link.desc}</p>
                <p>See More</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
