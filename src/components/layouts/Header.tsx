import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-10 w-full bg-primary">
      <nav className="layout-component flex items-center justify-between text-white">
        <div className="content-liftup">
          <div className="triple-border triple-border--large-margin">
            <div className="triple-border__container">
              <div className="image">
                <h4>roxiqmm</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white">
          <a href="/">Home</a>
          <a href="/">Projects</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
        </div>
      </nav>
    </header>
  );
}
