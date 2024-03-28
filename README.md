# brutalist-hacker-news

[https://brutalisthackernews.com](https://brutalisthackernews.com)

![Preview Image](preview.svg)

## Introduction

Brutalist Hacker News is a Hacker News reader built on the ideas of Brutalist Web Design, the open web, Cyberpunk Aesthetics, and glitch art.

Inspired by the raw and functional architecture from which it draws its name, [Brutalist Web Design](https://brutalist-web.design) advocates for simplicity, efficiency, and removing all but the essential. This project aims to embody those principles, offering an alternative to the increasingly bloated sites dominating the web today. The aesthetics of cyberpunk and glitch art are a natural fit, as [brutalist web sites](https://brutalistwebsites.com) tend to need to re-imagine common UX patterns in different and more simple ways

This project is in alpha and user feedback, testing, and bug reports are welcome! There are a few known issues on mobile devices right now and the site generally functions better on desktop

## Inspiration

The inspiration of Brutalist Hacker News is a desire to challenge the status quo of web design and JavaScript development. In a landscape filled with heavy JavaScript frameworks, tool bloat, and increasing abstraction there's beauty and efficiency in returning to [vanilla JavaScript](http://vanilla-js.com) and embracing the simplicity it offers, as well as it's performance. Modern JavaScript has also improved drastically over the past few years and has become much more pleasant to work with.

Brutalism can yield much better UI/UX. Modern web apps often have individual features optimized and A/B tested to the point the overall experience suffers, and [Dark patterns](https://www.bentley.edu/centers/user-experience-center/dark-patterns-part-1#:~:text=Dark%20Patterns%20refer%20to%20the,times%20over%20for%20that%20service%3F) create experiences that are often complicated and confusing, if not malicious to end users.

For much of the world, an element of comparative brutalism is exigent, where ~200 USD Android phones and slow 3G are the norm. Brutalism
also lends itself to better accessibility for the visually impaired and users with screen readers

This project is built to see what is possible with only bare web technologies to an extreme: There is only 1 index.html file, with no other files, libraries, or dependencies. Linters are configured in the repo as a courtesy but are not needed to run the application. The build server to run the application for testing is a simple node.js script. The file for the site is served without minification or removal of comments so that users can
inspect the document, and easily change it's behavior if they desire. As such, this site is also a good playground for students learning JavaScript.

## Themes

Themes can be added to the site in the [settings](https://brutalisthackernews.com/settings) menu of the page, or users can create their own themes with the built in tools.

In [themes.md](https://github.com/wkyleg/brutalist-hacker-news/blob/main/themes.md) you can browse external themes you can add, or follow the instructions to add your own theme with a PR.

## Contribution Guide

Contributions are welcome, such as new features, themes, or bug fixes.

#### Running the Project Locally
Clone the repository:

```sh
git clonehttps://github.com/wkyleg/brutalist-hacker-news.git
```

Navigate to the project directory:

```sh
cd brutalist-hacker-news
```

You can install the dependencies for linting, but this isn't strictly needed

```sh
npm i
```

To lint

```sh
npm run lint:js
npm run lint:js:fix
npm run lint:css
npm run lint:css:fix
```

To run the local development server

```sh
npm run dev
```

## Reflections on process

- CSS incompatibilities were probably the most painful part of building this, which could vary
  substantially across browsers still, especially when dealing with mobile scroll behavior. [Ionic Framework](https://github.com/ionic-team/ionic-framework/tree/main/core/src/css) has some good reset properties that I used for inspiration

- I'm not really a fan of the emojis in the UI, but they were the only option that
  didn't involve adding a icon library. They look weird, but at least in a way that might
  seem intentional. I think I will add SVG based icons at some point.

- There were almost no issues with cross browser JavaScript compatibility. Modern JS works well across browsers and something like jQuery is basically obsolete

- [The Hacker News API](https://github.com/HackerNews/API) posed it's own benefits as well as difficulties to work with. The endpoints for various lists of stories only return an 500 element array of IDs, so the client needs to load these itself. To avoid overloading the browser with 500 HTTP requests I use the loading animation you see while the list of IDs is loading, then load the stories themselves asynchronously with the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

- LLMs like ChatGPT and Github Copilot could be very useful when building this. Sometimes
  they would think of edge cases that I could not. Most of the time they hallucinated elements
  on the DOM that the should have known didn't exist though. I would say they were mostly
  useful as autocomplete feature and generally didn't understand complex or convoluted logic as well

- This was a very different from typical modern development with TypeScript. It was nice to be able to use JavaScript console as REPL for debugging though. [Plain JavaScript](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742)
  is really much better than it is given credit for, but you need to think much more like
  a LISP programmer.

- When you use Vanilla JavaScript this way it where all functions are global
  extend on browser behavior it feels a lot more like developing your application
  as a [DSL](https://paulgraham.com/progbot.html)

- I'm not opposed to forking this project and creating a more workable codebase that isn't
  one file, but I would like to do so [with care](https://www.wired.com/story/virtually-amish-hacking-innovation/). It's easy to add one tool like a build system
  for minification, but then why not add any other commonly used feature. I think
  Vanilla JS is not more widely adopted because the defaults of frameworks are too
  convenient and allow scaling users of a codebase so much better with sensible defaults
