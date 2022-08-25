---
layout: ../../layouts/project.astro
title: HoloUI Builder
client: Studio Archetype
site: https://holoui.studioarchetype.net
github: Studio-Archetype/HUI-Builder
description: |
  A web builder for a custom UI Minecraft server plugin.
tags:
  - dev
  - frontend
---

# HUI Builder
HoloUI, by [Studio Archetype](https://studioarchetype.net) is a Minecraft Spigot
plugin that creates holographic user interfaces around players using armor
stands. I was tasked with building a web editor server admins can use to modify
user interfaces and export them as config files for the server.

## Technologies Used
- [Vue.js 3](https://vuejs.org) - Framework
- [Pinia](https://pinia.vuejs.org/) - State management
- [Codemirror](https://codemirror.net/) - Code editor
- [Tailwind CSS](https://tailwindcss.com) - Styles
- HTML5 Canvas - Visual editor

## Problems I Solved
Throughout the creation of the HoloUI builder I had to solve many new problems I
had never encountered. Below I'll go into detail about a few of the issues I
encountered and had to solve.

### Coordinates
The coordinates the plugin uses to display elements range from `-7,-5` to `7,5`.
I had to derive a formula to convert between this range and `0,0` to `1280,720`
each time the user moved an item. This problem had a quick solution, and the
code I wrote to solve it can be found in [numConversion.ts][file_numConversion.ts].

### Image Drawing
The plugin draws images using unicode text in armor stand names. To replicate
the look of this technique, I had to write an algorithm to draw an exploded
version of each image on the canvas. The code used to accomplish this can be
found at [Line 237 of EditorCanvas.vue][file_EditorCanvas.vue_l237].

## Takeaways
One of the larger lessons I learned from this project is that when writing code
that involves listening for mouse events on a canvas, I should always allow a
debug view of collision boxes and where I am clicking. I added this
functionality about halfway through the creation of the builder and I wish I had
done it sooner, because my debugging would have gone far smoother.

A few smaller notes I took included:

- **Organizing imports.** This project has a *ton* of components. I came up with 
  a scheme and began optimizing my imports so I could find where I included a
  component from easier. I've since taken this approach with other projects and
  it's a really helpful technique to use.

[file_numConversion.ts]: https://github.com/Studio-Archetype/HUI-Builder/blob/master/src/lib/numConversion.ts
[file_EditorCanvas.vue_l237]: https://github.com/Studio-Archetype/HUI-Builder/blob/master/src/components/EditorCanvas.vue#L237