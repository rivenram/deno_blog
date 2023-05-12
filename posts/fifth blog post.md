---
title: Fifth blog post! (2nd post for assignment 2!)
publish_date: 2023-05-05
disable_html_sanitization: true
---

#  Creating my Net Art!

I don't know how to begin, so I browsed the internet for examples of star trail animation that others made with code. I found [this](https://youtu.be/_aBD7zjS9sc) on YouTube, which is pretty similar to what I have in mind. I did further research on it and found that this utilizes the [Noise](https://p5js.org/reference/#/p5/noise), so naturally I did another research on the **Noise** function by watching (Skimming because it is assignment week and there are a lot of things to do) this tutorial [playlist](https://youtube.com/playlist?list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD) by The Coding Train.

Following the tutorials, I began to write my code, resulting in this:
<iframe width="700" height="500" src="https://editor.p5js.org/Rivenrh/full/wzYTGX3-O"></iframe>

I think that the concept of the **Noise** function is very interesting compared to the **Random** function because the **Noise** function creates something random, but not random at the same time. What I meant is that even though the particles appear from random locations, the particles appeared in a more naturally ordered succession compared to the pure **Random** function.

I succeeded in making the particles constantly appear from a random location and creating the effects of the trails in the background. The next steps would be to implement interaction and change the directions so that the particles move in a circular motion. The reason why I chose these simple interactions is that the word **Art** in **Net Art** is stuck inside my head. I imagined that if my **Art** would be displayed somewhere in an art gallery, I believe that there would be a restriction as the visitors can't freely touch or play with the "Artwork", meaning that creating a very interactive artwork would be wasted. Thus, simple interactive functions would work best. I know that there are interactive art and there are lots of [interactive](https://youtu.be/G2ptGCwDkVE) [digital](https://youtu.be/Hg5nW3_6F6s) [art](https://youtu.be/MvniFaMRte0) [exhibitions](https://youtu.be/rtRscfX8O44), but honestly, it is just me being nitpicky, drowning in my thoughts and imagination.

Back to the Net Art, changing the star trails' direction was surprisingly easy. By simply changing the value on the constant **noiseScale**, I reduced the amount, and voila! The star trails now move in a more circular motion.

Star trails progress:
<iframe width="700" height="500" src="https://editor.p5js.org/Rivenrh/full/PqsQp3U4V"></iframe>

Now to work on the interactions!