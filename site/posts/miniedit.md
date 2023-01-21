---
title: MiniEdit
date: "2021-10-30"
description: "Creating a simple filer editor web app"
tags:
  - github
  - javascript
  - web
---

<img src="/miniedit__cover.png" alt="Landing page of MiniEdit" />

## Introduction

There are many tools for editing images, but most of them are very heavy and require a lot of resources. What if we could have a simple tool that allows us to quickly apply filters to our images without having to download any software?

Introducing **MiniEdit**

**MiniEdit** is a simple tool for applying filters to images. The users just need to upload an image and apply the filters they want. The filters are applied in real time, so the user can see the result immediately. And after applying the filters, the user can download the image.

## Development Process

MiniEdit works internally with Filter.js, a library for applying filters to images. Filter.js is a fork of Foto with some modifications and the latest JavaScript features.

### Creating Filter.js

Filter.js is a class with methods that modify a photograph by applying filters and effects. The class has a method to load an image, and then it has methods to apply filters to the image.

The filter methods of this class perform many operations on the image, such as changing the brightness, contrast, saturation, etc. And also three-dimensional effects such as embossing, sharpening, and blurring that require three-dimensional matrices.

For example, the method to apply the emboss effect is as follows:

```js
  /**
   * Make Emboss
   */
  applyEmboss() {
    this.applyFilter([
      [-2, -1, 0],
      [-1, 1, 1],
      [0, 1, 2],
    ]);
  }
```

## Designing the User Interface

The user interface is designed with a responsive design, so it can be used on any device. The user interface is very simple, it has a button to upload an image, and a button to download the image after applying the filters.

## Deployment Process

MiniEdit is deployed on GitHub Pages.

## References

- <a href="https://pages.github.com">GitHub Pages</a>
