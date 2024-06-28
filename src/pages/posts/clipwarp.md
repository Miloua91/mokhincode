---
layout: ../../layouts/postsLayout.astro
title: 'ClipWarp: An overengineered solution for sharing text and links across platforms'
author: Miloua Mokhtar
date: 26/06/2024 
description: Developing a cross-platform link and text manager.  
audio: 
location: 3
titles:
  - Why make ClipWarp
  - Starting point
  - Desktop app
  - Mobile app
  - Web app
  - The software
---

<div align="center">

<img src="/presentation.png" class="mt-24 xl:mt-0 -mb-16">

</div>

<div id="Why-make-ClipWarp">

## **Why make ClipWarp:**

I had a small issue when sharing links between my desktop and phone, I found it a bit troublesome and takes more time than it should. I usually use email to share them but I found that solution suboptimal. Another solution is using chrome's integrated text sharing feature between connected or used devices, while it is a nice solution i still wanted something global and faster. Hence my resolution to make my own cross sharing link/text app that hopefully would solve the huge troublesome problem I am facing  (눈_눈).

</div>

<div id="Starting-point">

## **Starting point:**

My first thought was to make a mobile app to share the links. There is an app I use to share files called <a href="http://smarterdroid.blogspot.com/p/wifi-file-transfer.html" target="_blank">*WiFi File Transfer*</a> which is "a light-weight web server that lets you upload and download files to/from your phone over a wireless connection". I thought to use the same concept to share the links/text. I started developing the app with <a href="https://expo.dev" target="_blank">Expo</a> and <a href="https://reactnative.dev" target="_blank">React Native</a> but I didn't find a reliable library to make web servers for React Native or Expo. At that time my friend joined in the project and he programmed in python, so he made a WebSocket server that I linked with the React Native app to communicate and send the text.

</div>

<div id="Desktop-app">

## **Desktop app:**

Since I didn't find libraries for React Native to serve a static website, I thought to build a full desktop GUI app to serve the files and act as a server. At first I built my own GUI with <a href="https://docs.python.org/3/library/tkinter.html" target="_blank">tkinter</a> and this is how it turned out, very minimal am I right! (Arch btw).

<div align="center">

![clipwarp-v0.0.1](/clipwarp-v0.0.1.png)

</div>

Well, I was learning python while making the app, just doing the project based learning thing ◕‿↼).

I served the files on the local network with <a href="https://www.uvicorn.org/" target="_blank">uvicorn</a>, which is a web server and <a href="https://www.neoteroi.dev/blacksheep/" target="_blank">blacksheep</a>, which is an asynchronous web framework. These two python packages worked great in development but when I wanted to make an executable I faced many issues (I might have a skill issue) related to hidden imports with pyinstaller to missing files that blacksheep needs so I switched to flask which did both of these packages work, I also was using flask as a backend server to send the data which I stored in a SQLite database locally of of course.

At this point my friend was also making the GUI app, he made it with PyQt and all it did was send the data with a WebSocket server.

<div align="center">

![clipwarp-friend-ed](/clipwarp-friend-ed.png)

</div>

We both are lacking in the UI design side, but we are working on it. From my friend's part he completed the project and I had the mobile app and web app to work on but also needed to add features in the desktop app (lots of apps). My friend's python code was way better than mine, he structured it across multiple files, whereas mine was in a single file. He used PyQt, which more modern than tkinter. So I took his code and added the features I wanted.


Is UI a feature? Let's pretend it is, after I changed my friend's UI code it looked like this. Not bad?

<div align="center">

<img src="/clipwarp.png" class="rounded-lg" />

</div>

This UI took more work than it should have but I am glad how it turned out. With the flask server, WebSocket and SQLite, I developed a real-time database that updates all connected apps instantly. Additionally, the app can be docked in the system tray for easy accessibility.

</div>

<div id="Mobile-app">

## **Mobile app:**

I had intentions to develop mobile apps since I started programming, everyone has a phone nowadays so it's easier to reach people making something they would find useful. I hope ClipWarp is as useful as I intended to be. 

I was skeptical of React Native, to develop cross mobile apps sounds a bit too good but after using it with Expo I became infatuated, it kinda gamified the process and made it enjoyable. The pictures are proof of it.

<div align="center">

<img src="/progress.png" class="rounded-lg w-[1200px]" />

</div>

If it wasn't for React and the ease of development provided by Expo, I don't think I would have made this progress.

Let's talk about Expo, I think their team is making a phenomenal work, I didn't develop in bare React Native but I sense that they eased the process a lot. And the libraries they provide are also really good. If I had the required experience I would definitely work with them.

</div>

<div id="Web-app">

## **Web app:**

The final and easiest app to develop, I made it with Astro, React, used <a href="https://ui.shadcn.com/" target="_blank">shadcn/ui</a> to style it, Websocket to connect it with the server and that's all. Built it and served it with flask with the desktop app. No headaches at all.

<div align="center">

<img src="/webApp.png" class="rounded-lg" />

</div>

</div>

<div id="The-software">

## **The Software:**

The final software is a desktop app that acts as a server that hosts the database and serves the web app and a mobile app that gets the data and displays it to the user. Now I can share links and text between my phone and desktop.

I didn't think I would have much opportunities to use the apps but I found myself using them daily at work and at home. In the end I learned mobile development and made a personally useful app.

</div>
