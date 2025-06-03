---
title: "Upcoming Site Revamp 🤡🧑‍💻"
date: 2025-06-04
category: "news"
---

I'm planning to revamp the site in this year. There are many reasons for the revamp. As of the writing of this post, the codebase can be described as a dumpster fire.

## Codebase and the tech stack in general

The codebase is a mess with no proper structure to speak of, and the CSS is ugly, both the code and the styles.

The slugs for the blog post are not well thought-out in my opinion, and a better format including the date of the post may be better.

Right now, the site is built with [Astro](https://astro.build/). It's a great framework (GOATed, if you ask me), and I have no intentions of abandoning it. However, Astro has evolved quite a lot since I started using it for this site, and some best practices have changed (if I practiced them in the first place). A revamp would help clean up the codebase and make it more maintainable.

[UnoCSS](https://unocss.dev/) is the CSS engine powering this site. However, I've been using it more-or-less like Tailwind CSS without taking advantage of its features. The codebase thus ends up quite bloated with strange CSS styles everywhere, in the HTML and in `uno.config.ts` file (please don't look at it right now, it's quite ugly). I'm considering whether to go framework-less and just use vanilla CSS (or something like Sass), or stick with UnoCSS but use it well. Regardless, the styles will be cleaned up.

This would also be a good opportunity to come up with a more coherent theme for the site.

## Emojis

### Twemoji rendering

The current method of injecting Twemoji is by doing it during build time. It is a hack done because I much prefer using Twemoji over platform-specific ones like Noto Emoji or Samsung's emoji set. However, by 2025, emoji designs of different platforms have converged, and unless you are on relatively old platforms like Windows 10 (LTSC gang ✊☺️), you'd get pretty consistent emoji appearance across multiple platforms.

Ultimately, the need for shipping Twemoji isn't as important as before (not that this site is that old, anyway), so shipping Twemoji will be removed. It also helps reduce the transfer size of the site, making the site ever so slightly leaner. Removing Twemoji injection also removes the problem of Cloudflare Workers not working for server-side rendering of some elements, which was a minor issue when I experimented with adding a server-side rendered weather widget.

### Emoji shortcodes

Blog posts like this one you're reading right now are written in Markdown. [remark](https://remark.js.org/) is used to process Markdown. [`remark-emoji`](https://github.com/rhysd/remark-emoji) is the plugin that turns emoji shortcodes to emojis (`:relaxed:` to ☺️), and that is built upon [`node-emoji`](https://github.com/omnidan/node-emoji), which in turn is built upon [`emojilib`](https://github.com/muan/emojilib) to provide the emoji shortcodes.

The problem was `emojilib` did not contain all the keywords and thus the shortcodes did not work as expected. [Pull request #226](https://github.com/muan/emojilib/pull/226) in the `emojilib` repo fixed this and `emojilib` v3 was released. However, `node-emoji` has yet to update to use `emojilib` v3, so the shortcode functionality on this site remains broken. [Pull request #132](https://github.com/omnidan/node-emoji/pull/132) of the `node-emoji` repo is currently in Draft status, and there has been little activity on it since September 2024. I know it's in poor taste to complain about open source software, so I'll do what I must to fix it by helping out with the PR. Until then, the shortcode functionality will remain broken.

## Exotic Browser Compatibility

A long time ago, at the very beginning of this site, I made a joke in the footer of the site that the site is "[b]est viewed on the Nintendo DS Browser. Maybe." 
Well, it definitely wasn't best viewed on the DS browser, considering [the first issue opened on the Git repo of this site](https://github.com/WessellUrdata/site/issues/1) is about DS browser compliance. I was actually surprised considering the issue isn't opened by someone who I know personally, which says a lot about the surprising reach of this site (and perhaps the Internet in general).

Regardless, I think it's an interesting challenge, and it was a good target to meet. However, I've now set my eyes on a new target: [Ladybird browser](https://ladybird.org/). If you haven't heard of Ladybird yet, it's an up-and-coming web browser that's not based on existing web engines such as Blink (which is based on by Google Chrome as well as the dozens of Chromium-based browsers) and Gecko (which is based on by Firefox and Firefox derivatives). It's shown promising results, and I hope to make the site work on it.

## Conclusion

More work, less talk. Maybe I'll get it done. No promises.


🧍🚜🚜🚜🚜