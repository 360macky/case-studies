---
title: Animo
date: "2024-05-30"
description: "Creating a web editor to make animations just from text"
tags:
  - motion graphics
  - web
  - manim
---

<img src="/animo__cover.webp" alt="Landing page of Animo" />

## Introduction

A year ago I created **Generative Manim**. A web app that allows you to generate animations using the [Manim](https://www.manim.community/) library. The library is primarily used to create animations programmatically.

I launch it 6 days after GPT-4, and it was the most popular post on [r/ChatGPT](https://www.reddit.com/r/ChatGPT) that day.

So, it's time for the next part!

Introducing **Animo**

### What is Animo?

**Animo** is the tool that allows you to generate animations from text. You won't need to write any code, you only need to talk what you want to represent in the animation and Animo will do the rest. You don't like the result? You can change it with text.

The interface of Animo **merges the standard of video production programs with the interface of a chat app**. Plus if you're a developer, you'll love having the ability to interact with the code that generates the animation.

[Sign up](https://animo.video) to try it out.

## Development

Animo is maybe the longest project that I've worked on. Much of it because from the idea or concept to the draft I was too busy with other creations.

But when I notice that many people started using Generative Manim more and more (even with its limitations), I decided to give it a shot.

#### Making Animo

The first thing that I started to develop is a video editor. I got inspiration by looking at the Remotion player.

2 weeks working on it. I forgot that even with a cool timeline, people most likely won't use it if it doesn't support multiple scenes.

And then, 8 weeks (yes, this is one of those goals that are hard to achieve), I had a multi-scene video editor.

Then, extract the generator of code to a separate service. Integrate it with the video editor.

Made a scene structure that contains the video and the code.

And then, I started to work on the chat interface. I got inspiration from the chat interface of the OpenAI Codex.

### Motivation of User Experience

I'm convinced that AI will shape our future creations in the world. But remember, we're changing the way, not the end, or the goal. There is a happy place in the future where we don't need human itervention, but today with our current limitations, I try to add the usage of human intervention in everything.

Because it can create a cool animation, but the color maybe it's not right. Or, the visual representation it's amazing, but the scripting is bad. Don't forget to empower people to create amazing things. Not because is the "right" thing to do, but because it's the needed thing to do, at least for now.

### Comparisons

I got contacted and discovered, two amazing tools: MotionShark and GateKeep. Both are focusing, more or less, in helping students to comprehend the concepts of physics and mathematics with animations. Animo is more focused on the creation of animations with chat. So, it's closer like a teacher would use this tool to create animations for their classes. Or people making videos.

### Software Information

- **Project technology**: Next.js, React, Tailwind CSS, Google Cloud Platform, OpenAI, FFMPEG
- **Industry**: AI tool
- **Work Duration**: ≈9 months
- **Accessibility WCAG**: AA (2.0)
- **Version**: 1.0

## Features

- Quick generation of videos
- Export in high quality
- Free usage
