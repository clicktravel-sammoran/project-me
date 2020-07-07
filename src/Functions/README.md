# Functions

## formatUrl.js

Despite not being strictly necessary since the data the site loads is hardcoded and I could easily ensure when I inputted the URLs to format the links to they *just work* I decided to do a little bit of validation and formatting where needed so when displayed they all correctly point to an external website.

## checkActivePage.js

To make the navbar a bit more reactive to mouseovers, this little function takes two arguments: 
- the current page as loaded in the browser (active)
- the corresponding navlink that was created from the array of pages

This is just to decide what CSS module style should be applied.

## checkIfHome.js

As the link that has been created is title home I want the dynamically created Home page to link to root. Simple function to check.

## pageParser.js

The header dynamically creates a navbar depending on an array of pages, however when I created this array I purposedly did not format the titles of the page in a way that makes the url creation easier. I do not want my url do contain capital letters nor white spaces but I am happy for my navbar to. This function takes in a navbar friendly page title and url-ifies (thats a word, I promise) it.
