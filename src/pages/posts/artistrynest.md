---
layout: ../../layouts/postsLayout.astro
title: 'ArtistryNest: My First project using a figma desgin with Next.js'
author: Miloua Mokhtar
date: 27/01/2024 
description: Personal background and experience using a figma design for the first time to build an e-commerce website. 
location: 1
titles:
  - Introduction
  - Motivation for making this project
  - Development phase
  - Deployment
---

<div id="Introduction">

## **Introduction:**

Before diving into this <a href="https://artistrynest.shop" target="_blanck">project</a> I need to give some background about my self and motivation. I started learning web dev a month after graduation. I chose Java, thinking it would open up more job opportunities on the corporate side (The job market is tough though 눈_눈 ). However, a month later, a friend of mine convinced me that web development could offer even more opportunities.

I had nothing to lose, so I began learning another language again—this time it was easier, thanks to <a href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a> where I had previously learned Java from his courses.

As I started working on projects, my learning pace accelerated. One of my early projects involved creating a library using the Google Books API to search for books and the Anna Archives to retrieve e-books to read from. I had difficulties making them work together, especially since I didn't have Anna's API or database. I simply was web scraping for books, which is not an ideal practice (Sorry, Anna).

In mid-October, I decided to create an Upwork account with the hope of securing a freelance job. Unfortunately, there was too much competition, and it was hard to stand out as a new freelancer.

</div>

<div id="Motivation-for-making-this-project">

## **Motivation for making this project:**

Browsing Upwork, I noticed that there were a lot of jobs asking to turn a figma design into websites, I thought learning to turn figma design into a functioning website would surely secure me a freelance gig (spoilers, clients didn't even look at my proposals ಠ_ಠ ). So i chose a <a href="https://www.figma.com/community/file/1113372221049615805" target="_blank">design</a> for an e-commerce website i liked which was simple and minimal and started working from it. 

</div>

<div id="Development-phase"> 

## **Development phase:**

In my first project i was using only vanila JS, at some point i needed routing in my app and looking around i found that the React library would help me with that. The annoyance i had was the boilerplate code i had to add to my existing project but the integration worked fine. 

Because of the project i had some React knowledge but i didn't like the `create-react-app` and i stumbled upon a video from <a href="https://www.youtube.com/watch?v=2OTq15A5s0Y" target="_blank">Fireship</a> talking about better alternatives to it.

I went with Next.js since it was a React framework. I liked the pages routing which would let you create routes easily and to seamlessly integrate APIs without Express. My installation of Next.js was like this:

```sh
npx create-next-app@lates // This installed version 13 of Next.js
```
On installation, i had these following prompts:

```sh
What is your project named? pandorascart
Would you like to use TypeScript? No 
Would you like to use ESLint? No
Would you like to use Tailwind CSS? No 
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended) No 
Would you like to customize the default import alias (@/*)? Yes
What import alias would you like configured? @/*
```
More no's than yes's that's because i didn't know how to write TypeScript, Tailwind CSS or what ESLint was (It analyzes your code for potential errors) at that time.

Coding the project was relatively easy since i had a figma design at hand and also it was mostly JSX and CSS. Where i struggled the most was in global state management, hydration problems because of the state management and Integrating PayPal for the payment. Maybe i will write about how i overcame them in the future, in the meantime you can check their code in the Github <a href="https://github.com/Miloua91/ArtistryNest/tree/main/pandorascart" target="_blank">repo</a>. 

Since it is an e-commerce website i needed to get product data, i could have made it easier using a mock data but i am a dummy (See what i did there). I opted for Supabase instead, they have a very generous free tier plan which suited my needs perfectly, along with their amazing and easy-to-navigate dashboard. Not only i stored the product data but i used their Auth system to authenticate and authorize users, store their orders and persist their cart state.

</div>

<div id="Deployment">

## **Deployment:**

When I had finished my first project i easily deployed the front-end code but didn't know how to with the back-end where i used Express, i tried Firebase to deploy it as a function but i had to enter credit card details which i didn't have. I could have looked into other alternatives but i thought i would make the project even better (<a href="/posts/library-tower" target="_blank">Take a look</a>), so i didn't bother deploying the back-end.

Using Next.js in this project eased the deployment process since i could deploy both the functions (API) and front-end using Vercel which is the company behind Next.js (Thank you Vercel). All i had to do was push my code into a Github repository, select it as a project in Vercel and deploy it. 

Some additional features I liked in Vercel were the analytics where you could track the traffic to your website and the speed insights, giving you performance metrics on how your website performs in each country.

I hope my thought process was sane and you understood what i was talking about. Check my other posts if you liked this one, have a nice day.
</div>
