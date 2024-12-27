---
title: New Beginnings
date: 2024-12-26
description: Welcome to my new blog!
image: /images/banner_blog.png
tags:
  - update
  - testing
---

Recently, I've put a lot of work into cleaning up my infra & public optics. This
website is based off [the Monospace Web][mono], using [Catppuccin][catppuccin]
colors and a custom build of [Iosevka][iosevka].

So far, on this site I've added [blog](/blog) functionality with simple tags and 
filtering. I will probably build a portfolio portion of this site as well to 
show off my finished and WIP projects. Hopefully, I'll also motivate myself to
work on my projects more consistently c:

I've setup the following services on my infrastructure:

| Service                  | URLs                                                                   | Purpose                |
| -----------------------: | ---------------------------------------------------------------------- | ---------------------- |
| [Reposilite][reposilite] | [repo.illumi.sh][repo_illumi]                                          | Host Maven binaries    |
| [Uptime Kuma][kuma]      | [uptime.illumi.sh][kuma_illumi], [uptime.frotting.services][kuma_frot] | Display service status |
| [Wastebin][waste]        | [waste.frotting.services][waste_frot]                                  | Pastebin alternative   |

I'm also managing client system administration now!

---

## Ima use this to test markdown :3

Normal text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
malesuada fermentum blandit eros himenaeos odio suscipit lobortis nam. At auctor
leo taciti adipiscing aenean mus ipsum inceptos condimentum. Eget nascetur 
pretium maecenas auctor mus quam morbi accumsan porttitor.

Hendrerit gravida convallis pharetra turpis ad interdum suscipit per pharetra. 
Porta curabitur convallis venenatis torquent morbi platea ultricies montes
massa. Senectus dignissim dapibus imperdiet lorem litora donec fusce praesent
placerat. Ridiculus aptent venenatis aliquet malesuada sem tempus condimentum
imperdiet sed.

- unordered list
- **bold**
- *italic*
- ***boldItalic***
- `code`
- ~~strikethrough~~

## Code Blocks
```ts
// Some TS code
const repeat = (value: string, times: number): string => {
    let output = '';
    for (let i = 0; i ++; i < times) output += value;
    return output;
}
```

## Blockquote

> A blockquote. Let's simulate a long one:
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit primis
> pellentesque maecenas risus velit cras praesent sodales mi adipiscing eget. Ad
> torquent eget nec inceptos ornare laoreet hendrerit vel pellentesque lectus
> molestie. Class viverra vestibulum porttitor fringilla habitasse purus euismod
> etiam pulvinar viverra at.

## Tables
| Name         | Occupation | Skills                           |
| -----------: | ---------- | -------------------------------- |
| John Doe     | Janitor    | Housekeeping                     |
| Cave Johnson | Scientist  | Making life take the lemons back |

## Images

An image with no caption & no figure.

![](https://i-have-a.degradationk.ink/Lizzy676e98eeXevVoBbYKbpN.png)

![A captioned image inside a figure](https://i-have-a.degradationk.ink/Lizzy676e99812WflqEhz8jCY.png)

[mono]: https://owickstrom.github.io/the-monospace-web/
[catppuccin]: https://catppuccin.com/
[iosevka]: https://typeof.net/Iosevka/
[reposilite]: https://reposilite.com/
[repo_illumi]: https://repo.illumi.sh
[kuma]: https://uptime.kuma.pet/
[kuma_illumi]: https://uptime.illumi.sh
[kuma_frot]: https://uptime.frotting.services
[waste]: https://github.com/matze/wastebin/
[waste_frot]: https://waste.frotting.services