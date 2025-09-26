Got it — since I can’t open your repo directly from that link, I’ll work from the exact README text you pasted. Here’s a corrected version with **minimal changes** (spelling, grammar, and usage only). Formatting, structure, and style are preserved exactly.

---

# Brutalist Hacker News

[https://brutalisthackernews.com](https://brutalisthackernews.com)

![Preview Image](https://github.com/wkyleg/brutalist-hacker-news/blob/main/preview.gif)

## Introduction

Brutalist Hacker News is a Hacker News PWA built on the ideas of Brutalist Web Design, the open web, cyberpunk aesthetics, and glitch art.

Inspired by the raw and functional architecture from which it draws its name, [Brutalist Web Design](https://brutalist-web.design) advocates for simplicity, efficiency, and the embrace of open web standards. This project aims to embody those principles, offering an alternative to the increasingly bloated sites dominating the web today. The aesthetics of cyberpunk and glitch art are a natural fit, as [brutalist websites](https://brutalistwebsites.com) tend to reimagine common UX patterns in simpler ways.

As a PWA, this site can also be easily added to the home screen of nearly any device as a stand-in for a mobile or desktop application. You may do so by following the instructions in [settings](https://brutalisthackernews.com/settings).

If you would like to add any features, request any features, or report a bug, you are encouraged to do so.

## Inspiration

In a landscape filled with heavy JavaScript frameworks, tool bloat, and increasing abstraction, there's beauty and efficiency in returning to [vanilla JavaScript](http://vanilla-js.com) and embracing the simplicity it offers, as well as its performance. Modern JavaScript has also improved drastically over the past few years and has become much more pleasant to work with.

Brutalism can yield much better UI/UX. Modern web apps often have individual features optimized and A/B tested to the point the overall experience suffers, and [dark patterns](https://www.bentley.edu/centers/user-experience-center/dark-patterns-part-1#:~:text=Dark%20Patterns%20refer%20to%20the,times%20over%20for%20that%20service%3F) create experiences that are often complicated and confusing, if not malicious to end users.

For much of the world, an element of comparative brutalism is exigent, where ~$200 Android phones and slow 3G are the norm. Brutalism also lends itself to better accessibility for the visually impaired and users with screen readers.

This project is built to see what is possible with only bare web technologies to an extreme: There is only one `index.html` file, with no other files, libraries, or dependencies. Linters are configured in the repo as a courtesy but are not needed to run the application. The build server to run the application for testing is a simple Node.js script. The file for the site is served without minification or removal of comments so that users can inspect the document and easily change its behavior if they so desire. As such, this site is also a good playground for students learning JavaScript.

## Themes

Themes can be added to the site in the [settings](https://brutalisthackernews.com/settings) menu of the page, or users can create their own themes with the built-in tools.

In [themes.md](https://github.com/wkyleg/brutalist-hacker-news/blob/main/themes.md) one can browse external themes to add, or follow the instructions to add one's own theme with a Pull Request.

## Contribution Guide

Contributions are welcome, such as new features, themes, or bug fixes.

#### Running the Project Locally

Clone the repository:

```sh
git clone https://github.com/wkyleg/brutalist-hacker-news.git
```

Navigate to the project directory:

```sh
cd brutalist-hacker-news
```

You can install the dependencies for linting, but this isn't strictly needed:

```sh
npm i
```

To lint:

```sh
npm run lint:js
npm run lint:js:fix
npm run lint:css
npm run lint:css:fix
```

To run the local development server:

```sh
npm run dev
```

## Reflections on process

* CSS incompatibilities were probably the most painful part of building this, as they can vary substantially across browsers, especially concerning mobile scrolling behavior. [Ionic Framework](https://github.com/ionic-team/ionic-framework/tree/main/core/src/css) has some useful reset properties that I used for inspiration.

* I'm not really a fan of the emojis in the UI, but they were the only option that didn't involve adding an icon library. They look weird, but at least in a way that might seem intentional. I think I will add custom SVG-based icons at some point, as these can be contained within the file.

* There were almost no issues with cross-browser JavaScript compatibility. Modern JS works well across browsers, and something like jQuery is basically obsolete.

* [The Hacker News API](https://github.com/HackerNews/API) posed its own benefits as well as difficulties to work with. The endpoints for various lists of stories only return 500-element arrays of IDs, so the client needs to load each one to display its title. To avoid overloading the browser with 500 HTTP requests I use the loading animation you see while the list of IDs is loading, then load the stories themselves asynchronously with the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

* LLMs like ChatGPT and GitHub Copilot could be very useful when building this. Maybe they even make frameworks less needed. Sometimes they would think of edge cases that I had not considered. They would also hallucinate elements on the DOM that didn't exist, though. I would say they were mostly useful as autocomplete features and generally didn't understand complex or convoluted logic as well.

* Building this was a very different experience from typical modern development with TypeScript. It was nice to be able to use the JavaScript console as a REPL for debugging, though. [Plain JavaScript](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) is really much better than it is given credit for, but one needs to think much more like a LISP programmer.

* When one uses vanilla JavaScript in this way, with all functions global and extending browser behavior, it feels a lot more like developing your application as a [DSL](https://paulgraham.com/progbot.html) from the bottom up. It's messy, but it's kind of fun to build with a browser the way it was originally intended, which is really more like Self, Smalltalk, or LISP, although this approach doesn't scale very well.

* I'm not opposed to forking this project and creating a more workable codebase that isn't one file, but I would like to do so [with care](https://www.wired.com/story/virtually-amish-hacking-innovation/). It's easy to add one tool such as a build system for minification, but then the number of tools tends to cascade and one is better off using a normal framework. I think vanilla JS is not more widely adopted because the defaults of frameworks are too convenient and allow scaling users of a codebase much better with sensible defaults.

## Gallery

![Home Page Preview](https://github.com/wkyleg/brutalist-hacker-news/blob/main/bhn-preview-12-16.jpg)

![Top Stories Preview](https://github.com/wkyleg/brutalist-hacker-news/blob/main/top-preview-12-16.png)

![Settings Preview](https://github.com/wkyleg/brutalist-hacker-news/blob/main/bhn-settings-12-16.png)

![Mobile Preview](https://github.com/wkyleg/brutalist-hacker-news/blob/main/mobile-preview.png)
