/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Creative Coding Blog",
  description: "This is my new Coding blog",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "./images/profile_picture.jpg",
  avatarClass: "rounded-full",
  author: "Riven Ramin Husin",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
