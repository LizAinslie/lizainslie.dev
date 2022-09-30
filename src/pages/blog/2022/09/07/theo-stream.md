---
layout: ../../../../../layouts/blog_post.astro
title: "Theo Stream Summary Sept. 7"
summary: Let's Talk Databases with Sam from Planetscale.
date: 2022-09-07
tags:
  - tech
  - stream
  - theo
---

**Note: This is a draft I never finished. Some important topics may be left out.**

Today [on stream][theo_stream], Theo talks with [Sam][pscale_sam] from
[Planetscale][pscale] about scalability and performance in serverless database
solutions like Planetscale.


## Development
### DynamoDB and Scalability
Sam and Theo talk about how [DynamoDB][dynamo] locks its users in by making it
difficult to move off the platform.

- AWS Acronym about keeping customers: `Once they have these five things they
  never leave. DynamoDB is one of them` - Sam

### Performance
- New features, compounding performance as a first priority

### Reliability 
- Sam: "Some of the greatest outages in my career have come from Redis"

### Scalability of Pscale
- Theo: Even vercel won't scale for ping forever
- Sam: "It's my goal that you never have to hire that database person"

- Theo: We just added a feature where we're writing to our DB every 30 seconds
per user, and we don't have to worry about that with Planetscale.

### DX
- Theo: planetscale is a lot like astro in that it's bridging a gap between DX and
perfoemance
- Sam: "No dev likes the experience of waking up at 2 in the morning"

### Why MySQL instead of Postgres
- Sam: "Postgres is a fine database, but you can't operate it as easily as MySQL"
- Sam: Way more companies moving Postgres -> MySQL than the other way around


### Planetscale's thoughts about limits
- Sam: Connection limits plague a lot of people. We aim to mitigate that so you don't have to worry about it.
- Theo: You can set up PGBouncer or just use Planetscale, it's that easy.

### Database-js and HTTP database access
- Sam: We've got a lot of requests to make it easier to not use a driver
- Sam: Database-js makes it trivially easy to get your database connected, this is easier to use in, i.e. Cloudflare workers. We want to make it easy to leverage Planetscale


### Misc
- Serialization is horrendous for performance in distributed systems
- Hobby projects need to scale too. (Pscale is hobby-friendly)
- Theo: Edge data is going to be one of the biggest new paradigm shifts in the industry.


## Business

### Graduation Curves
- Customers can become pitfalls or be stepping stones
- Vercel is trying to keep people in house

### Industry Adoption
- When a tool is really good, the industry will change around it to adopt it. See figma.
- Sam: "Github didn't plan on being the world's platform for code"

### Misc:
- Theo: "A team of 5 passionate people will beat a team of 100 people who lucked into their success"
Sam: "I want to build a company where being passionate drives you forward."
- The Lunch Table conversation, community is important.
- People are starting to trust the cloud more

## Kubernetes Rant
Takeaways: 
- Kubernetes is hard to maintain, so need an engineer like primeagen 
- Very low use case anyway 
- Better to use existing service for most apps that are small enough, as the cost would be lower than hiring an engineer



[dynamo]: https://aws.amazon.com/dynamodb/
[theo_stream]: https://www.twitch.tv/theo
[pscale]: https://planetscale.com
[pscale_sam]: https://twitter.com/isamlambert