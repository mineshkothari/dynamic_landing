# [Dynamic Landing Page](https://mineshkothari.github.io/dynamic_landing/) | developed by Minesh Kothari 

<br />
<br />

## Overview

The Project is hosted on GH Pages at [https://mineshkothari.github.io/dynamic_landing/](https://mineshkothari.github.io/dynamic_landing/).

This is my take on Brad Traversy's [YouTube tutorial](https://www.youtube.com/watch?v=fSTQzlprGLI) on creating Dynamic Landing Page using JavaScript. Full credit goes to [Brad Travesy](https://github.com/bradtraversy) for being an absolute legend and making awesome content time and time again.

### Functional differences from Brad's version

1. Use of JS Switch statement instead of IF statement for 'cleaner' syntax.
2. Changed the function to add a zero in front of single digits for shorter syntax.

### UX/UI differences from Brad's version

1. Added ```min-width``` & ```display: inline-block``` to `span#name` to prevent bug (see below) and make it easier for the user to see the text is editable.
2. Added elegant styles and transition effect to editable content.
3. Changed timer style & made it 24 hour

### Other differences

1. Top marks to those who noticed the images were different.

<br />
<br />

### Bugs

1. When a user clears the content of innerText, in other words, leaving it blank / null, the '[Enter Name]' textContent fails to show up again and the cursor glitches to the start of the sentence "Good morning ...". As a result, I made a few CSS changes to the `<span>` element to keep it on the right of the sentence and to make it 'obvious' that the element is editable when any text content has been cleared.

This isn't really a bug, but I had no where else to put this. It's also hard to explain so please bear with me as I try and explain: 

As the Time element is centrally aligned, i.e. `text-align: center;`, this creates a janky motion each second as the width of the element changes to account for the width of the numbers. As a result you may notice quite a bit of movement between the Time and can get quite annoying as it updates each second.

So for better UX (at least in my opinion), I opted to split the Time element to show Hours / Mins / Secs all on their separate lines to restrict movement to the absolute minimum.

*I will add more bugs here when I notice them :)*

## Acknowledgements

1. Once again - Brad Brad Brad!!
2. Images taken from [Unsplash](https://unsplash.com/) / [Pexels](https://www.pexels.com/)