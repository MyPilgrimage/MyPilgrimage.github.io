---
title: Site finally Updated - Part Two 
date: 2025-03-15 00:00:00 +0100 
categories: [Site, Update] 
tags: [personal, pictures, site]
image:
 path: /assets/pics/20250308_Moon-Cropped.jpg
 alt: "<a href='/photos/#2024'><i class='fas fa-camera'></i> Daytime Moon, 2025 <i class='fas fa-up-right-from-square'></i> </a>"
description: "148 Days to Prepare. It took a while, but I found my error..."
---


> **148** Days to Prepare. <br class='brS'/><i class='fas fa-location-dot'></i> *North-Holland, The Netherlands*. <br class='brSM'/>
> [<i class='fas fa-chart-line'></i> Quick Overview ](/welcome/#quick-overview) 
{: .prompt-quick } <br> 
<br>


## Thoughts
The fixing and updating of the site has taken quite a bit of time, 
in which I haven't kept up with my training.
But today I got a good tip, 
to make milestones for myself; 
i.e. to plan out my training, 
what I want to achieve during my training 
and a schema to keep me active with my milestones.

I will probably track these milestones in the About 
or the Welcome post. 
And the day-to-day updates in their respective posts.


## Technical Update

I'm finally nearly done with the site update. <br>
It was quite the struggle, 
because the site layout seemed to break, 
without me knowing why.
But I think I've found the problem! 
And it's a really stupid mistake; 
for some reason my VS Code 
changed a line in my SCSS file. <br>
From:
```sass
@use 'main ❴%-if jekyll.environment == 'production'-%❵.bundle❴%-endif-%❵
```
{: file='assets/css/jekyll-theme-chirpy.scss'}

To:
```sass
@use 'main
❴%-if jekyll.environment == 'production'-%❵
 .bundle 
❴%-endif-%❵
';
```
{: file='assets/css/jekyll-theme-chirpy.scss'}

The bundler reads this incorrectly as `main .bundle `,
instead of the correct `main.bundle`. <br>
It took me quite a few tries to find out that this was the cause. 
First I thought it had something to do with the Jekyll framework I'm using, 
luckily it was just a simple and minor bug.

So hopefully I can keep on working on this page, without breaking it in some way!
And if I do break it, find a solution!


Also my Reddit account is still suspended... <br>
Still waiting for any reply on the appeals.


<br>
*Cheers,* <br>
I-Jun <i class='fas fa-person-hiking fa-fw'></i><i class='fas fa-mountain-sun fa-fw'></i> <br>
[<i class='fab fa-github fa-fw'></i>  Github.com @ MyPilgrimage](https://github.com/MyPilgrimage/MyPilgrimage.github.io) <br>
[<i class='fab fa-reddit fa-fw'></i>  Reddit.com @ /u/I-Jun_Pilgrimage](https://www.reddit.com/user/I-Jun_Pilgrimage/) <br>
[<i class='fas fa-envelope fa-fw'></i>  Mail @ iJun.Pilgrimage@gmail.com](mailto:iJun.Pilgrimage@gmail.com) <br>

