---
title: New Website, new Blog
date: 2019-05-21 22:19:00 +02:00
image: https://res.cloudinary.com/rogervila/image/upload/f_auto,q_auto:best,w_1200,h_628,c_fill,g_auto:subject,dpr_auto/computer_g1fykb.jpg
cloudinary: computer_g1fykb
excerpt_separator: "<!--more-->"
description: How is this website is made? Let me share with you the tools I have used.
---

First of all, thank you for Reading this article, because it is the first one that I write. The idea of this blog is to be a repository of tools that I use on my projects. I will also publish bug fixes that I think that can be useful for other developers.  

My main language is not English, so I’m sure that the content of this post can be improved. If you find a typo, do not hesitate to open an issue. I will make the correction as soon as I can.

On this very first post, I will explain how this website is made. I want to make clear that the list of tools I’m sharing with you has not been sponsored at all. I’m using them because they are useful.

<!--more-->

## Bulma

The frontend of this project is made with [Bulma](https://bulma.io). I chose this framework because it comes with **a lot of useful components, without JavaScript**. 

This website has little interaction with the user, so I didn’t want to overload it with unnecessary code. Later on, I will detail how JS is organized.

## Jekyll

**Static site generators have become very popular nowadays**, and the reason is very clear. No database, no upgrades, no security issues; they are **just static HTML files with images, CSS and JS**.
There are many solutions out there, but I chose [Jekyll](https://jekyllrb.com) because it’s 100% **integrated with GitHub** (more on this later).

In fact, I have a project called [Jekyll API](https://github.com/rogervila/jekyll-api), that exposes posts, authors and collections as JSON files. I have used it on different projects and results have been more than satisfactory.
Also, Jekyll comes with **SASS support**, so CSS concatenation and compression is very easy to handle.

## GitHub Pages

GitHub can host static websites for free with [GitHub Pages](https://pages.github.com/). It provides **support for custom URLs, with Free SSL certificates provided by Let’s Encrypt**, so it’s the perfect candidate for projects like this website.
As I said before, it comes with **Jekyll support** so, instead of building my site locally and uploading the built site, I can upload the source of the project and let GitHub to build it.

## Siteleaf

One of the cons of publishing posts on a **static website** is that **changes must be done manually**. [Sitelaf](https://www.siteleaf.com/) is an **Admin panel for Jekyll sites hosted on Github**, which makes it very easy to create, update and delete posts and collections. I think this tool is a must for any project like this one.

## Commentbox.io

Disqus is the king of comment platforms, but it feels slow. Also, you need a paid plan to remove ads and, since I don’t expect lots of comments on my posts, I think that for, now, it’s not the right solution.

[Commentbox.io](https://commentbox.io) is a **free alternative to Disqus that comes without ads**. I will make a post that goes deeper with pros and cons about using this service.

## Chatra

Chatra is a **real-time chat service**. I discovered it because **one of the founders** is Art Polikarpov, **the creator of [Fotorama](https://fotorama.io)** (one of the most famous jQuery-based image sliders).
It’s almost plug & play, and its free plan comes with everything I need, so I find it very useful for communicating with my visitors.

## Cloudinary

There are **lots of devices** out there and **trying to find the best resolution and size combinations is a nightmare**. [Cloudinary](https://cloudinary.io) comes with a **very easy image manipulation API** and, since I didn’t want to spend a lot of time working with images, I decided to use it on this project.

## Plain JavaScript

This website doesn’t have dynamic content, so I didn’t want to use any JS framework for it. 

There is a `app.js` file that loads the services that have been listed before. Also, I have made a couple of components:

- a NavBar component that allows to toggle Bulma navbar.
- a very simple Lazy Loading plugin for loading images, following 
[this google post](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)

**To minify and concatenate all the scripts**, I have used **[Laravel Mix](https://laravel-mix.com/)**. This solution it’s automatically added on fresh Laravel installs, but **It’s not framework dependant. It can be used as standalone**. 

I hope you enjoyed reading this post. If it has been useful for you let me know it!
Feedback is always welcome, and it helps me to improve my blogging skills.

See you on next post!

> Did you find a typo? [Open a new issue](https://github.com/rogervila/rogervila.github.io/issues)! I will correct it as soon as I can.

