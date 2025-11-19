---
title: Studio Archetype Website
client: Studio Archetype
image: https://i-work-at-the.cocaine.institute/Lizzy63150ad4IUSzIF7ULhw6.png
description: |
  I maintained the Studio Archetype website.
tags:
  - dev
  - frontend
  - payments
---

# Studio Archetype Website
I was in charge of maintaining the website for a creator company known as
Studio Archetype. Studio Archetype is a Minecraft mod studio specializing in
cinematography and creator tools.

## Technologies Used
- [Next.js](https://nextjs.org) - Framework
- [Braintree][braintree_site] - Payments
- [Tailwind CSS][tailwind_site] - Styles

## Problems I Solved
When I was hired the site was left in an unfinished state from a previous dev
who flaked. I was immediately tasked with cleaning up his codebase, organizing
and modernizing the code,

### Payment System
The previous dev was hired to implement [Braintree][braintree_site] payments and
had left this unfinished and broken. I cleaned up his code and made payments
through Braintree work using GraphQL. We had previously been using PayPal but
wanted to cut down on fees.

I had never used GraphQL before, so I learned how it worked and implemented it
to work with the Braintree GraphQL API.

### Messy Styles
The previous developer(s) used [Tailwind CSS][tailwind_site] to author styles on
the site. This was my first time using Tailwind so I learned how it worked and
started cleaning up. The codebase became much easier to manage after that.

Many of these styles were freehanded and not well organized. I took the time to
organize them into a more maintainable structure with a consistent naming
convention and a clear hierarchy. I also created a design system to ensure
consistency across the site.

### Broken Downloads
Since Studio Archetype sold Minecraft mods, we had implemented a DRM in our
flagship product. Our download system was tasked with embedding the DRM into the
mod files and ensuring that only authorized users could access them. At the
time, this download system was sending empty files. We decided to remove the DRM
entirely and instead rely on a more secure authentication system, so I was
responsible for fixing the downloads and authentication.

## Features Implemented

### Admin Panel
When I signed on, there was a very basic admin panel for managing content,
subscriptions, and users. I expanded on this system to include features for
managing more of the site's content, as well as new products and services. I
also worked to improve the user experience and cleaned up the code powering
this panel as I worked.

## Takeaways
When I started working on this project, I learned how to quickly pick up where a
previous developer left off, and how to incrementally improve and modernize an
older codebase.

[archetype_site]: https://studioarchetype.net
[braintree_site]: https://www.braintreepayments.com/
[tailwind_site]: https://tailwindcss.com
