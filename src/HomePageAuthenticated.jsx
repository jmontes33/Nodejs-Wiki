import React from "react";
import { NavLink } from "react-router-dom";

const posts = [
  {
    href: "/que-es-nodejs",
    description:
      "Node.js es una plataforma de desarrollo de software de código abierto que se ejecuta en el lado del servidor y permite a los desarrolladores crear aplicaciones de alta escalabilidad y rendimiento utilizando JavaScript.",
    imageUrl: "./src/assets/ask1.png",
  },
  {
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    imageUrl: "./src/assets/ask2.png",
  },
  {
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl: "./src/assets/ask3.png",
  },
  {
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl: "./src/assets/ask4.png",
  },
  {
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl: "./src/assets/ask5.png",
  },
  {
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl: "./src/assets/ask6.png",
  },
];

function HomePageAuthenticated() {
  return (
    <div className="py-10">
      <header>
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Preguntas típicas de Node.JS
          </h1>
          <img src="src\assets\nodejs.png" alt="nodejs" className="h-48" />
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <NavLink
                key={"que-es-nodejs"}
                to={post.href}
                className="mt-2 block"
              >
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePageAuthenticated;
