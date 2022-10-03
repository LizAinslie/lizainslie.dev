---
layout: ../../../../../layouts/blog_post.astro
title: My Hot Take on Rust
summary: A bit of insight on how I feel about Rust, as a language developer.
date: 2022-10-03
tags:
  - tech
  - opinion
  - rant
  - languages
---

Let me preface this by saying something fairly important: I don't hate anything
unless I have a damn good reason to do so. I don't even particularly hate Rust,
but I definitely don't enjoy using it. I have my reasons for disliking it, and I
think it does solve a critical problem in our industry, it just doesn't do so
*well*, which is why I dislike using it. The rest of this post will detail why I
hold this view on everybody's favorite prodigy language.

## C Bugs
C-bugs. Lots of them, everywhere. One of my biggest role models, who works on the
Dart core team at Google, once wrote:

> We are so used to mature, stable compilers and interpreters that “It’s your
code, not the compiler” is an ingrained part of software culture. If there are
bugs in your language implementation, users will go through the full five stages
of grief before they can figure out what’s going on, and you don’t want to put
them through all that.

Here's the [source](https://craftinginterpreters.com/chunks-of-bytecode.html#design-note)
of that quote. Bob Nystrom is the GOAT.

I'm a firm believer in this idealogy as I've seen this problem occur far too
often in my own implementations and others'. At the time of writing, the
official Rust repo has over 3,000 open C-bugs, most of which are untriaged
and/or have no fix; that is bad! Don't believe me? [See for yourself.](https://github.com/rust-lang/rust/issues?q=is%3Aissue+is%3Aopen+label%3AC-bug) Here's a screenshot:

![99 bugs in the code, take one down and patch it around, 3,000 bugs in the code](https://i-work-at-the.cocaine.institute/Lizzy633a7374gKx4KFvPHkAq.png)

One such bug (it may have been fixed recently, but I remember it being
particularly notable) involved a complete breakdown of the type system when
entering the realm of asynchronous code. Why, when I want to use one core
language feature (in this case advanced async code patterns) should I be forced
to give up an equally if not more important core function of the language (its
strong type system)? I can't find it now but I read a really good article by
a developer using Rust for work who had this exact problem. Granted, the things
they were doing were extraordinarily complex and probably should have just used
a C-family language, but wasn't Rust invented to avoid using C-family languages
in the first place?

This seems like an anti-pattern of sorts to me. If you aim to solve a problem
by replacing a tool people have been using for decades, you need to properly
replace all of that tool's functions. If it's easier to do something I need to
do in the tool you're replacing, I'm not going to use your language to do my
thing. My time and energy are my most valuable assets, please don't waste them.

## The Linux Kernel Argument
Recently Rust has been added to the Linux kernel. With this news, I've seen many
people argue that since it's in the Linux kernel we should stop doubting it and
start adopting it. Stop. That isn't how this, how anything works.

Just because the kernel uses it doesn't mean it is ready for everyone to
immediately drop everything and migrate. I haven't put off adoption of Rust
because it is new, I've put off adopting it because it isn't stable. I still
think it's stupid of the Linux foundation to start adopting it so heavily and I
suspect they only did so to get preachy people to **shut up**. We'll see how it
pans out and if they can make it work, but for the love of god stop using Kernel
adoption as a metric for whether or not a language or technology is good / ready
for adoption. You can still find Jesus.

## DX and Rust
In my career, Rust is arguably the worst experience I have ever had writing
software, and it's competing for that  position with **Java**. Since I've done
this dance with countless Rust fanatics already, I'm familiar and comfortable 
with both OOP and FP patterns in my work, and I've consistently written in 
everything from C and Assembly to JavaScript and Ruby. I could easily learn Rust
in a day if I had to but I'd probably opt to quit my job instead if learning
Rust were on the table.


I just don't enjoy writing code in Rust. It forces verbosity in ways that even
C doesn't, and the syntax puts a strain on my eyes like the fear of god. The
community is also surprisingly old-school for a language pushing modern memory
safety practices as its main selling point. Who the fuck reads a book to learn
a language in 2022?! Sure it's available digitally, that doesn't at all change
the format in which it is written.

For all the misery I would go through writing Rust code, I would be far less
stressed spending a little bit of extra time properly implementing whatever I'm
making in C or C++. To me, it just isn't worth my [spoons](https://en.wikipedia.org/wiki/Spoon_theory).

## Solving a Problem
I like Rust, it was born of a good concept and solves a legitimate problem in
our industry. I hate using Rust and would change careers if it came to that. I,
being an experienced C programmer haven't had the problems that Rust aims to
solve, but this metric is unfair to the masses as I operate on a far higher
level than most when it comes to this kind of stuff. If you enjoy Rust, more
power to you, but for me it only serves to encumber me when I'm writing code
and the cliché Rust fan says "Why aren't you using Rust, you should be using
Rust."

It's a solution to a problem I don't have. Is it a good solution? I don't think
so personally, but I'm not in charge of what other people decide to use. I'm
just getting tired of hearing people preach about a technology that I find to be
useless and trying to push its adoption on everyone they meet. I've often
contemplated muting the Rust account on Twitter and any keywords involving the
language, but the problem with doing that is that will also apply to Rust, the
survival game by Facepunch, which I thoroughly enjoy. Doing that would also
serve to keep me out of the loop on many updates in the world of JS that may be
important to my work, since everyone seems to enjoy writing their own JS runtime
nowadays. (I may write an article later going into why I think these are a joke,
but that pretty much boils down to "If it works, don't fix it" and "You should
probably try to improve the current thing rather than reinvent the wheel for the
millionth goddamn time")
