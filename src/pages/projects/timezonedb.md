---
layout: ../../layouts/project.astro
title: TimezoneDB
site: https://tzdb.synapsetech.dev
image: https://i-work-at-the.cocaine.institute/Lizzy63150e6dbvK1JpdSG85R.png
github: SynapseTech/TimezoneDB
description: |
  I wrote a timezone sharing service named TimezoneDB
tags:
  - dev
  - frontend
  - backend
  - browser extension
---

# TimezoneDB
TimezoneDB is an easy, cross-platform method of keeping track of other people's
timezones. My goal with this project was to allow users to set their timezone
in our web app, link their social media accounts, and users who have the browser
extension installed can then see their timezone and current time as a part of
those social media websites. This project was inspired by (and borrows some code
from) [PronounDB](https://pronoundb.org).

## Project Motivation
The motivation behind this project was to streamline communications between
people in different timezones. I find it easier to communicate with someone when
they know if and when I'll be awake for a meeting, especially since most of my
work is remote.

## Technologies Used
- [Ktor](https://ktor.io) - API Framework for Kotlin
- [Vue.js 3](https://nextjs.org) - Frontend Framework
- [Pinia](https://pinia.vuejs.org/) - State management
- [Tailwind CSS](https://tailwindcss.com) - Styles
- [Vite](https://vitejs.org) - Build tool for web and Browser extension targets

## Problems I Solved
This project was a new venture for me, and there were some things I had to learn
to successfully implement this service.

### Linking accounts
A large part of the data in TimezoneDB depends on having accounts linked, but I
also wanted to allow users to use their accounts for login. The problem I faced
was the server didn't know whether or not to link the accounts or just log in,
and I had to add a query parameter to indicate link state, then persist that
through the authentication flow of requests.

### DOM Manipulation
DOM manipulation in a browser extension is difficult. I had to figure out how
web contexts worked and work around MV3 loading scripts into the webpage. this
took time and a lot of work, but eventually I figured out the flow and it was
smooth sailing.

## Takeaways
Auth is hard. Do it right. I had to iterate through three different auth schemes
before finally figuring out what worked best with my setup.