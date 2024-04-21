---
layout: ../../layouts/postsLayout.astro
title: 'Library Tower: Building a public domain libary using Next.js'
author: Miloua Mokhtar
date: 01/02/2024 
description: Using Next.js and TailwindCSS to build a simple library to read public domain Ebooks.
audio: libraryTower.ogg
location: 2
titles:
  - Introduction
  - The structure 
  - The design
  - TypeScript and TailwindCSS
---

<div id="Introduction">

## **Introduction:**

In my previous <a href="/posts/artistrynest/" target="_blank">post</a>, I talked about building my first project which is a library where you can read Ebooks from, and in this post I am going to talk about how i made it better or where I improved it.

I started working on it with just JavaScript but I thought that I needed a framework or a library to help me build it faster or easier. In retrospect, I realize that sticking with JS alone would have been beneficial, considering it was my first project I should have spent more time with it, understand better how it manipulated the DOM (Document Object Model is a programming interface for web documents) and what not.

When deploying the project I got stuck with the server and also the library didn't work as I planned so I thought I would work on it again.

</div>

<div id="The-structure">

## **The structure:**

I didn't plan how I would build the first library, just organically building it, which I think is fine since it was my first project but having a structure would make the process easier.

Unlike in the older library where I wanted to include all the books available in <a href="https://annas-archive.org/" target="_blank">Anna's Archive</a> to retrieve the books from, I thought i would have my own books database. I don't have the resources to host millions of books like Anna's Archive so i opted to just host public domain books. 

</div>

<div id="The-design">

## **The design:**

The design of the first library was simple, I would search and display books with <a href="https://developers.google.com/books" target="_blank">Google Books API</a>. Then you would choose a book and a modal would pop up with the book's information and the option to download it or read it.

<div class="flex flex-col items-center -my-8">

<div class=-mb-16">

![ancientLibrary](/ancientLibrary.PNG)

</div>

![ancientLibraryModal](/ancientLibraryModal.PNG)

</div>

In the current library I choose a different approach, you would have a home page where you could select popular, fiction or none-fiction books. When browsing the library I didn't want to display book covers because there weren't any good covers for public domain books, so I just displayed the side of the book, like you are browsing a real library how awesome is that.

<div class="flex flex-col items-center">

[![newLibrary](/newLibrary.PNG)](https://library-tower.vercel.app "Home page")

<div class="-my-16">

[![newLibrary](/newLibraryShelf.PNG)](https://library-tower.vercel.app/library?shelf=1 "Shelf")

</div>

[![newLibrary](/newLibraryInfo.PNG)](https://library-tower.vercel.app/library/book/3?book=The+Trial "The trial by Franz Kafka")


</div>

Currently I am not hosting a lot of public domain books but it is a work in progress. I get the books from the Gutenberg project, I really appreciate their efforts.

</div>

<div id="TypeScript-and-TailwindCSS">

## **TypeScript and TailwindCSS:**

I mentioned in the previous <a href="/posts/artistrynest" target="_blank">post</a> that I didn't know TS and Tailwind that is why I didn't use them. I had a lot of errors making the <a href="https://artistrynest.shop" target="_blank">ArtistryNest</a> website, from server problems, to states to hydration but I think a lot of them could have been avoided by using TS. In this current project I faced a fewer issues, maybe I gained more experience or the project was smaller compared to previous one but i think TS helped in minimizing the errors. I might be wrong so take my opinion with a bag of salt.

Now on to Tailwind, I have nothing but good things to say about it. I had a really good experience using it, the only drawback is you have to learn the syntax but installing the VS Code extension or an <a href="https://en.wikipedia.org/wiki/Language_Server_Protocol" target="_blank">LSP</a> for code completion and checking Tailwind's docs from time to time will greatly improve the learning process. How it differs from plain CSS? Tailwind is like inline CSS style:

``` html 
<div style="width: 690px; height: 420px;">Nice</div> // Inline CSS

<div class="w-[690px] h-[420px]">Nice</div> // TailwindCSS

```
So like they say, you don't leave the comfort of your html. Also you don't name the classes, I had a CSS file with 3K lines, so it was hard to track the classes. With Tailwind, it is very helpful not to name the classes again. Personally, I appreciate CSS, especially when aiming to create something unique. It remains a powerful tool in web development.
</div>
