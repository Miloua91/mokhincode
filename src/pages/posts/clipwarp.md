---
layout: ../../layouts/postsLayout.astro
title: 'ClipWarp: An overengineered solution for sharing text and links across platforms'
author: Miloua Mokhtar
date: 21/03/2024 
description: Developing a cross-platform link and text manager.  
audio: libraryTower.ogg
location: 3
titles:
  - Why make ClipWarp
  - Starting point
  - Desktop app
---

![newLibrary](/presentation.png)

<div id="Why-make-ClipWarp">

## **Why make ClipWarp:**

I had a small issue when sharing links between my desktop and phone, I found it a bit troublesome and takes more time than it should. I usually use email to share them but I found that solution suboptimal. Another solution is using chrome's integrated text sharing feature between connected or used devices, while it is a nice solution i still wanted something global and faster. Hence my resolution to make my own cross sharing link/text app that hopefully would solve the huge troublesome problem I am facing  (눈_눈).

</div>

<div id="Starting-point">

## **Starting point:**

My first thought was to make a mobile app to share the links. There is an app I use to share files called <a href="http://smarterdroid.blogspot.com/p/wifi-file-transfer.html" target="_blank">*WiFi File Transfer*</a> which is "a light-weight web server that lets you upload and download files to/from your phone over a wireless connection". I thought to use the same concept to share the links/text. I started developing the app with <a href="https://expo.dev" target="_blank">Expo</a> and <a href="https://reactnative.dev" target="_blank">React Native</a> but I didn't find a reliable library to make web servers for React Native or Expo. At that time my friend joined in the project and he programmed in python so he made a websocket server that I linked with the React Native app to communicate and send the text.

</div>

<div id="Desktop-app">

## **Desktop app:**

Since I didn't find libraries for React Native to serve a static website I thought to build a full desktop GUI app to serve the files and act as a server. At first I built my own GUI with <a href="https://docs.python.org/3/library/tkinter.html" target="_blank">tkinter</a> and this is how it turned out, very minimal am I right! (Arch btw).

<div align="center">

![clipwarp-v0.0.1](/clipwarp-v0.0.1.png)

</div>

Well I was learning python while making the app, just doing the project based learning thing ◕‿↼).

I served the files on the local network with <a href="https://www.uvicorn.org/" target="_blank">uvicorn</a> which is a web server and <a href="https://www.neoteroi.dev/blacksheep/" target="_blank">blacksheep</a>, which is an asynchronous web framework. These two python packages worked great in development but when I wanted to make an executable I faced many issues (I might have a skill issue) related to hidden imports with pyinstaller to missing files that blacksheep needs so I switched to flask which did both of these packages work, I also was using flask as a backend server to send the data which I stored in a SQLite database locally of of course.

At this point my friend was also making the GUI app, he made it with PyQt and all it did was send the data with a websocket server.

![clipwarp-friend-ed](/clipwarp-friend-ed.png)

We both are lacking in the UI design side, but we are working on it.

</div>
