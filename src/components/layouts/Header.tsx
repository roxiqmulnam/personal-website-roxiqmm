import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="layout-component sticky top-0 z-50 w-full bg-primary">
      <nav className="flex items-center justify-between text-white">
        <div className="content-liftup">
          <div className="triple-border triple-border--large-margin">
            <div className="triple-border__container">
              <div className="py-1 px-2">
                <h4>roxiqmm</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white text-lg">
          <Link href='/'><p>Home</p></Link>
          <Link href='/projects'><p>Projects</p></Link>
          <Link href='/articles'><p>Articles</p></Link>
          <Link href='/about'><p>About</p></Link>
        </div>
      </nav>
    </header>
  );
}
