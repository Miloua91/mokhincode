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
---

<div id="Why-make-ClipWarp">

## **Why make ClipWarp:**

I had a small issue when sharing links between my desktop and phone, I found it a bit troublesome and takes more time than it should. I usually use gmail to share them but I found that solution suboptimal. Another solution is using chrome's integrated text sharing feature between connected or used devices, while it is a nice solution i still wanted something global and faster. Hence my resolution to make my own cross sharing link/text app that hopefully would solve the huge troublesome problem I am facing  (눈_눈).

</div>

<div id="Starting-point">

## **Starting point:**

My first thought was to make a mobile app to share the links. There is an app I use to share files called <a href="http://smarterdroid.blogspot.com/p/wifi-file-transfer.html" target="_blank">*WiFi File Transfer*</a> which is "a light-weight web server that lets you upload and download files to/from your phone over a wireless connection". I thought to use the same principle to share the links/text. I started developing the app with <a href="https://expo.dev" target="_blank">Expo</a> and <a href="https://reactnative.dev" target="_blank">React Native</a> but I didn't find a reliable library to make web servers for React Native or Expo. At that time my friend joined in the project and he knew python so he made a websocket server used for desktop devices and from then on the project grow.

</div>
