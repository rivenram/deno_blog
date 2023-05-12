---
title: Interaction in my Net Art
publish_date: 2023-05-11
disable_html_sanitization: true
---

#  Adding interaction and finalizing the Net Art

Figured the previous titles are boring so I'll write an actual title from now on.

Finalizing my Net Art! First of all, I should talk about 2 concepts that I didn't use in my Net Art: Classes & Recursion. I honestly have no idea on how to implement recursion on my net art. I can just shoehorn a simple recursive function on my net art, but it would ruin the aesthetic that I am trying to make. And for why I didn't use any classes, it is because I honestly don't really understand on how to use it on my p5 file.

With that being said, I proceed to apply interaction on my star trails net art. Initially, I wanted to let people change the star trail colours on click, applying conditional logic on it. I tinkered with my code and it resulted in this:

<iframe width="700" height="500" src="https://editor.p5js.org/Rivenrh/full/6dS15hvzh"></iframe>

I wanted the colour change to be fixed until people click on it again, but somehow the colour only changes when people hold the mouse button instead. Then I noticed that the trails also follow the colour which is pretty cool in my opinion. At least the colour change works- to some extent. I'll move on to the directional change and then I'll come back to fix this.

I consulted 2 friends about the colour choices, whether to use white or light blue with gold (I wanted to use gold), or even go 'funky' with the constantly changing rainbow colour like in the previous assignment. I pointed out that I want this assignment to be more "serious" and in the end, they chose white instead of light blue, so I'll use it.

Now to change the direction without having to refresh the page. This process is pretty annoying as I can't get it to work. I know that I can use [mouseReleased](https://p5js.org/reference/#/p5/mouseReleased), but I can't get the star trails to change direction on click. I'm guessing that it had something to do with the **Noise** function, provided I don't have a complete understanding of using it.

In the end, I browsed Google and YouTube, and thankfully I found a YouTube [video](https://youtu.be/sZBfLgfsvSk) that has teaches me how to do it and it worked!

<iframe width="700" height="500" src="https://editor.p5js.org/Rivenrh/full/nJKqSZd-Z"></iframe>

Lastly, I made some adjustments such as changing the colour from blue to white and changing the canvas size to **innerWidth** and **innerHeight** so my Net Art can adapt to the screen size.

[Here's my "Star Trails" Net Art!](https://rivenram-net-art.deno.dev)





## Last-minute blog post update
I messed up and I thought that I can submit a p5 link for this assignment, and as it turns out I need to deploy my Net Art website with Deno Deploy. Thankfully my teacher helped me to fix this lol.