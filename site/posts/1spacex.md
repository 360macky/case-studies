---
title: 1SpaceX
date: "2019-10-30"
description: "Creating a web app that helps you to find all the information about SpaceX components."
tags:
  - nextjs
  - tailwind
  - react
  - spacex
  - web
---

<img src="/1spacex__cover.webp" />

## Introduction

SpaceX is a private American aerospace manufacturer and space transportation services company. Many of the phyisical components of SpaceX (rockets, capsules and more) are available in the <a href="https://docs.spacexdata.com" target="_blank">SpaceX API</a>. What about a website that helps you to find all the information about SpaceX components?

Introducing **1spaceX**.

### What is 1spaceX?

**1spaceX** is a web app that helps you to find all the information about SpaceX components. You can find information about the capsules, cores, launches, payloads and rockets.

### Software Information

- **Project technology**: Next.js, React, Tailwind, SpaceX API, Vercel
- **Industry**: Space Exploration
- **Work Duration**: ≈2 months
- **Accessibility WCAG**: AA (2.0)
- **Version**: 7.4

## Features

- Search engine for all the physical components
- Information about the physical components
- Installable on mobile devices
- Fully responsive
- Reduces network requests by storing the data in the state
- Usage without sign up
- Dark mode support

## Challenges

Many challenges were faced during the development of 1spaceX. Some of them were:

### Reducing network requests on search

The first version of the app was requesting the data from the API every time the user search on the app. This was not a good practice, so I decided to request the data only once and store it in the state of the app.

In this way, the app requested the data only once, and then everytime the user search, the app filtered the data from the state.

## Development Process

1spaceX works with the <a href="https://docs.spacexdata.com" target="_blank">SpaceX API</a>, using <a href="https://nextjs.org" target="_blank">Next.js</a> and <a href="https://reactjs.org" target="_blank">React</a>.

The web app is totally responsive and it has a page for each physical component like: capsules, cores, launches, payloads and rockets.

### Creating the first page: Capsules

This project started with the idea of creating a web app that helps you to find all the information about SpaceX Capsules. A capsule is a spacecraft designed to carry a crew or a payload into space and return it safely to Earth.

The first page I created was the capsules page. With a search bar and the cards associated to the capsules as the result of the search.

### Adding more pages

The process of requesting and filtering the data from the API was the same for all the components. So, I decided to create a component that could be reused for all the components. This phase of the app was quite simple, I just had to create a new page for each component and add the component to the App.js file.

### Updating React to version 18

The first version of the app was created with React 15. With Class components and the `componentDidMount` lifecycle method. I decided to update the app to React 18, using Functional components and hooks.

### Integrating Next.js 13

In the latest version of 1spaceX, I decided to integrate Next.js 13, in order to use the new features of the framework.

## License

The source code of 1SpaceX is distributed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.

## References

- <a href="https://reactjs.org" target="_blank">React</a>
- <a href="https://docs.spacexdata.com" target="_blank">SpaceX API</a>
- <a href="https://nextjs.org" target="_blank">Next.js</a>
- <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>
- <a href="https://vercel.com" target="_blank">Vercel</a>
