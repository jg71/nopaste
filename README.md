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

[![iframe](https://i.imgur.com/y9NpsXW.png)](https://jsfiddle.net/jyuLkfq8/2/)

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
echo -n 'Hello World' | lzma | base64 -w0 | xargs -0 printf "https://paste.strappazzon.xyz/#%s\n"

# Mac
echo -n 'Hello World' | lzma | base64 | xargs -0 printf "https://paste.strappazzon.xyz/#%s\n"
```

<!-- References -->

[header-img]: https://paste.strappazzon.xyz/?l=tcl#XQAAAQA6BAAAAAAAAAAFYH9MXlzSsUdj4vga48M86Ff/Bo1HzNmlXzjCWCN1Q/EliRJg00jhrYF9eDKWzDi+Su+Pv1o8yGz3V06CtGOt8u9dUN10KuOrmkUrjI/kUqitUUD34YXmq9twyrkxmOl5kaHPNqE2PWTRhnKWCEntngrOOlXC4kxxnXuGB2v4zJ75fIM0htURHr9ysHH+1nHvSRng4zpcYju3Y/RqpGTIowXGoUcIOeKKG8PpYf/9t33i

[topaz-example]: https://topaz.github.io/paste/#XQAAAQAOAQAAAAAAAAAFFgvDUiqpf8dDPleMqfsqtbQYE28suCtDTB9iyFgGByXgSRMepMuokjoACV4UPgBzwM3p+V/N2rCi8m90FkQfsRuMJ4LrZVFgr81wKDc2okcywbJBz7OGNPpc8xu2lAkpSekqRO+I/OYUUvgB2ckKBp+2avxmAKn6H73WV3t1D5Ip9hwthecGUnLwFSGpPFNI0zb4Ettx7QnIu6NiftBuencR3Bn/l88uE/HFdVd2v/f8GxiZbp2GYNUTvz6z8O7I3l7vK99FwnIAK1uODBZ5hSMAW4n6OBY2

[css]: https://paste.strappazzon.xyz/?l=css#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
