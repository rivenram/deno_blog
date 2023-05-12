---
title: Fourth blog post! (1st post for assignment 2!)
publish_date: 2023-04-28
disable_html_sanitization: true
---

#  Testing Interaction!

Fourth blog post, and the 1st post of the 2nd assignment!. 
In this 2nd assignment I have to create a "Net Art". My first thought was that this assignment is similar to the previous one, where I need to create something with Javascript or p5.js again, but this time I have more freedom in my creation (no more fixed canvas size).

Looking at the brief, I thought that this assignment is indeed similar, with an additional Javascript concept which is Recursive function, and I have to apply sounds or interaction, or both!. I haven't started on it, but I had an idea in mind which is to create an interactive [star trails](https://en.wikipedia.org/wiki/Star_trail) animation with sounds.

I decided to use p5.js again because I am already quite familiar with it, so I can save a bit of time in writing the code and honestly it is because the upcoming assignment weeks with the assignments having the highest mark for this semester. Since on the previous assignment I went full "funky" with the playful and colorful aesthetic, I wanted to have a "serious" art, creating something that I really like and can be proud of.

Currently, I am researching on how to create the star trails in p5.js and looking at examples of interaction and recursion to get an idea or inspirations on how to make my star trails art interactive and what kind of interactivity can I apply to it. I found [these](https://youtu.be/62SbexSgQIw) [videos](https://youtu.be/17WoOqgXsRM) on YouTube which isn't exactly what I'm looking for, but watching their tutorials and explanation helped me to have more understanding on the process of creating the star trails.

A Moire pattern I created by following the video.
<iframe width="700" height="500" src="https://editor.p5js.org/Rivenrh/full/zUQFbWefHT"></iframe>

About interactivity, maybe I can change the colour of the star trails on mouse click? Or maybe changing the direction? Explodes on click?
The ideas are there, what's left is am I able to implement it correctly and in a way I wanted them to work. But for now, I'll do my research on them.

Random interactive section!
Type something and press enter!

<div id=onkeypress_input></div>

<script type=module>

    const div = document.getElementById (`onkeypress_input`)
    div.width = div.parentNode.scrollWidth
    div.style.height = `${ div.width * 9 / 32}px`
    div.style.backgroundColor = `skyblue`
    div.style.textAlign  = 'center'
    div.style.lineHeight = div.style.height
    div.style.fontSize   = '40px'
    div.style.fontWeight = 'bold'
    div.style.fontStyle  = 'italic'
    div.style.color      = 'white'

    const free_elements = []

    requestAnimationFrame (physics_engine)

    function physics_engine () {

        free_elements.forEach (e => {

            if (e.offsetLeft > window.innerWidth) {

                e.style.left = `${ -e.offsetWidth }px`
            }

            e.style.left = `${ e.offsetLeft + e.x_vel }px`
        })

        requestAnimationFrame (physics_engine)
    }

    function set_free (t) {

        const free_div = document.createElement (`div`)

        free_div.innerText = t 
        free_div.style.fontSize   = '36px'
        free_div.style.fontWeight = 'bold'
        free_div.style.fontStyle  = 'italic'
        free_div.style.color      = 'hotpink'
        free_div.style.position   = 'fixed'

        document.body.append (free_div)

        const y_offset = free_div.offsetHeight * free_elements.length

        free_div.style.top = `${ y_offset }px`
        free_div.style.left = `${ -free_div.offsetWidth }px`
        free_div.x_vel = Math.random () * 10
        free_elements.push (free_div)
    }

    document.onkeypress = e => {

        if (e.key == 'Enter') {
            set_free (div.innerText)
            div.innerText = ''
        }

        else {
            div.innerText += e.key
        }
    }
</script>
