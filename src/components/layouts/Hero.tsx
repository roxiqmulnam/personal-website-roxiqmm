import React from "react";

type MotionLinkProps = {
  title: string;
  desc: string;
  url?: string;
};

const contactList: MotionLinkProps[] = [
  {
    title: "GitHub",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "LinkedIn",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
  },
  {
    title: "Twitter",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, veniam.",
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
        </section>

        <article className="mt-36">
          <h1>Feature Projects</h1>
          <div className="my-5 grid grid-cols-2 gap-4">
            {contactList.map((link) => (
              <div className="border rounded-md p-5">
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
            {contactList.map((link) => (
              <div className="border rounded-md p-5">
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
