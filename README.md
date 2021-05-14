[![](https://github.com/bokub/nopaste/blob/images/intro.png?raw=true)][header-img]

[NoPaste](https://paste.strappazzon.xyz/) is an open-source pastebin where you can store any piece of code or text, and generate links for easy sharing.

However, what makes NoPaste special is that it works with **no database**, and **no back-end code**. Instead, the data is compressed and **stored entirely in the link** that you share, nowhere else!

### Because of this design

* :wastebasket: Your data **cannot be deleted** from NoPaste
* :underage: Your data **cannot be censored**
* :eye: The server hosting NoPaste (or any clone of it) **cannot read or access** your data
* :hourglass_flowing_sand: Your data will be accessible **forever** (as long as you have the link)
* :twisted_rightwards_arrows: You can access your data on **every NoPaste clone**, including [your own](https://github.com/bokub/nopaste/wiki/Deploy-your-own-version-of-NoPaste)
* :mag: Search engines **will not index** your data, even if your link is public

> **Note:** NoPaste is a copy of [Topaz's paste service][topaz-example], with a reworked design and a few additional features (syntax highlighting, line numbers, offline usage, embedding...)

## How it works

When you click on "**Generate Link**", NoPaste compresses the whole text using the [LZMA algorithm](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm), encodes it in [Base64](https://en.wikipedia.org/wiki/Base64), and puts it in the optional URL fragment, after the first `#` symbol: `paste.strappazzon.xyz/#<your data goes here>`.

When you open a link, NoPaste reads, decodes, and decompresses whatever is after the `#`, and displays the result in the editor.

This process is done entirely **in your browser**, and the web server hosting NoPaste [never has access to the fragment](https://en.wikipedia.org/wiki/Fragment_identifier).

For example, [this is the CSS code used by NoPaste][css].

## Other features

### Embedded NoPaste snippets

You can include NoPaste code snippets into your own website by clicking the "**Embed**" button and using the generated HTML code.

Here is an example of generated code and how it looks (click on the screenshot to see the interactive version):

```html
<iframe
  width="100%"
  height="243"
  frameborder="0"
  src="https://paste.strappazzon.xyz/?l=c#XQAAAQDDAAAAAAAAAAAX4LNIQhtvMWKH88PTkMndZvo5/DTRnkyazf5B1FTTlOrSiTl8xB6Hm42/V67OD+YDY4Mj/QMSHMGuzF8zfZBu0Ij+Jb5NxQFz5MQWTfhcE4apU6LJCGWxbqijW2frJ/F5L9Pi+nyToEEhvvMcxftAGLrOwSFQH//EBQAA"
></iframe>
```

[![iframe](https://i.imgur.com/X7dwSTa.png)](https://jsfiddle.net/jyuLkfq8/)

Feel free to edit the `height` and `width` attributes, so they suit your needs.

### Editor features

* Syntax highlighting (use the language selector)
* Enable/disable line wrapping (use the button next to the language selector)
* Delete line (<kbd>Ctrl</kbd> + <kbd>D</kbd>)
* Multiple cursors (<kbd>Ctrl</kbd> + `Click`)
* Usual keyboard shortuts (<kbd>Ctrl</kbd> + <kbd>A</kbd>, <kbd>Ctrl</kbd> + <kbd>Z</kbd>, <kbd>Ctrl</kbd> + <kbd>Y</kbd>, ...)

## Maximum sizes for links

NoPaste is great for sharing code snippets on various platforms.

These are the maximum link lengths on some apps and browsers.

| App     | Max length |
| ------- | ---------- |
| Reddit  | 10,000     |
| Twitter | 4,088      |
| Slack   | 4,000      |
| QR Code | 2,610      |
| Bitly   | 2,048      |

| Browser         | Max length                | Notes                                   |
| --------------- | ------------------------- | --------------------------------------- |
| Firefox         | >64,000                   |                                         |
| Google Chrome   | (Win) 32,779 (Mac) 10,000 | Will not display, but larger links work |
| Android         | 8,192                     |                                         |
| Microsoft Edge  | 2,083                     | Anything over 2083 will fail            |

## Generate NoPaste links

NoPaste links can be created easily from your system's command line:

```bash
# Linux
echo -n 'Hello World' | lzma | base64 -w0 | xargs -0 printf "https://nopaste.ml/#%s\n"

# Mac
echo -n 'Hello World' | lzma | base64 | xargs -0 printf "https://nopaste.ml/#%s\n"
```

<!-- References -->

[header-img]: https://paste.strappazzon.xyz/?l=tcl#XQAAAQA6BAAAAAAAAAAFYH9MXlzSsUdj4vga48M86Ff/Bo1HzNmlXzjCWCN1Q/EliRJg00jhrYF9eDKWzDi+Su+Pv1o8yGz3V06CtGOt8u9dUN10KuOrmkUrjI/kUqitUUD34YXmq9twyrkxmOl5kaHPNqE2PWTRhnKWCEntngrOOlXC4kxxnXuGB2v4zJ75fIM0htURHr9ysHH+1nHvSRng4zpcYju3Y/RqpGTIowXGoUcIOeKKG8PpYf/9t33i

[topaz-example]: https://topaz.github.io/paste/#XQAAAQAOAQAAAAAAAAAFFgvDUiqpf8dDPleMqfsqtbQYE28suCtDTB9iyFgGByXgSRMepMuokjoACV4UPgBzwM3p+V/N2rCi8m90FkQfsRuMJ4LrZVFgr81wKDc2okcywbJBz7OGNPpc8xu2lAkpSekqRO+I/OYUUvgB2ckKBp+2avxmAKn6H73WV3t1D5Ip9hwthecGUnLwFSGpPFNI0zb4Ettx7QnIu6NiftBuencR3Bn/l88uE/HFdVd2v/f8GxiZbp2GYNUTvz6z8O7I3l7vK99FwnIAK1uODBZ5hSMAW4n6OBY2

[css]: https://paste.strappazzon.xyz/?l=css#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
