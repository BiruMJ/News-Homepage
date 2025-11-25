# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](./Screenshots/Desktop/Screenshot%202025-11-25%20192826.png)
![Mobile](./Screenshots/Mobile/Screenshot%202025-11-25%20192900.png)

### Links

- Solution URL: [http://127.0.0.1:3000/JavaScript/Junior Challenges/News Homepage/product-preview-card-component-main/news-homepage-main/index.html#]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

In this project, I have learnt about CSS Grid, Flexbox, and making navigation bar for small screens.

To see how you can add code snippets, see below:

```html
  <div class="wrapper">
    <section class="menu-area">
      <div class="cross-icon">
        <span class="cross-line first"></span>
        <span class="cross-line second"></span>
      </div>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
      </ul>
    </section>
  </div>
```

```css
.wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #0000007c;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-out;
        z-index: 999;
    }

    .wrapper.show {
        opacity: 1;
        visibility: visible;
    }

    .menu-area {
        width: 60%;
        height: 100%;
        background-color: #fff;
        padding: 5rem 1.5rem;
        position: fixed;
        top: 0;
        right: -100%;
        box-shadow: -5px 0 5px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease-out;
    }

    .menu-area.active {
        right: 0;
    }

```

### Continued development

In future, I would definitely focus on changing homepage articles content when any related links are clicked by the user.

## Author

- GitHub - [Biru Basfore](https://github.com/BiruMJ)
- Frontend Mentor - [@BiruMJ](https://www.frontendmentor.io/profile/BiruMJ)
- LinkedIn - [@biru-basfore-8b52262a4](www.linkedin.com/in/biru-basfore-8b52262a4)
