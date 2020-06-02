### Task 1: Code fixes and review


- Are there any problems or code smells in the app? (Focus on code in the `libs/books` folder)
        : In the `libs/books` folder, specifically in the `data-access/src/lib` folder we have mainly all the reactive JS file in the common `+state` folder. We can categorized them into sub folders we can achieve better structural architechture of the application.

- Are there any web accessibility (a11y) issues in the app?
        : Though I have less experience in web accessibility developement, I can varify all the checklist points as perfectly implemented.

- Are there other improvements you would make to the app? What are they and why?
        : I found couple of issue in application listed below,
    1. when you search something like `JavaScript`, then I go to search box and remove the text then list of book below is vanished and when you start typing anything the previous list (`JavaScript`) of values are showing back. So, I simply changes the condition to render list page with diffrent variable that shows the previous list at null search value.
    2. In Mobile version, we are still getting 50-50 ratio in list element. So, I fixed the single value with `grid-template-columns: 100%;` in media query for `book-grid` class. that look goods in mobile screens.