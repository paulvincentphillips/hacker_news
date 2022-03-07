# Hacker News Frontend Challenge
Hacker News API implementation for Genesys

![Hacker News Homepage](/public/screenshots/hacker_news.png?raw=true)

## Project Brief

Using Angular or React, utilise the Hacker News API to create a web application that shows the latest stories. This project does not require you to implement a user profile page or comments just redesign the front page of hacker news.

What we're looking for:
* Readable and DRY code
* A clean, easy to use UI
* Use of best practices in angular or react
* We value test coverage

Some other information to consider when completing:
* The posts can be shown in any way you like (grid/list etc._ and could be displaued with or without an image.
* How you handle pagination of the posts is up to you, but you should be able to switch between new and top posts.
* Testing is particularly important, so do your best to implement as much test coverage as possible.

## React.js
For this project, I chose to use React.js as it is the Javascript framework with which I have the most experience developing with. 
It is also well suited to this task due to it's speed, using the virtual DOM to rerender the page when state changes.

## Hacker News API

API is available at the following URL: 
### https://hacker-news.firebaseio.com/v0/
Provides Hacker News data in near real time.

For this project, I needed to provide both top posts and newest posts.
The first step is to fetch the IDs of the posts.
For top posts, the following URL is used:
### https://hacker-news.firebaseio.com/v0/topstories.json
For newest posts, the following URL is used:
### https://hacker-news.firebaseio.com/v0/newstories.json

Both URLs fetch 500 news story IDs.
The IDs are then used to fetch the stories using the following URL:
### https://hacker-news.firebaseio.com/v0/item/${storyId}.json

## Node Packages 
The following packages were installed to the project:
styled-components, react-router-dom, normalize.css & react-paginate

styled-componenets allows the use of tagged template literals to write CSS. I find it makes writing components a lot cleaner and more efficient. 
It also removes the use of style props altogether.

react-router-dom is used to handle the routing between the top posts and the newest posts 'pages'.

normalize.css ensures my CSS renders as intended.

react-paginate is a useful library to assist in setting up pagination.

## Project Structure
![Project Structure](/public/screenshots/project_structure.png?raw=true)

This project consists of two sections, the header and the news list.

Both sections are made up of styled components. 
For example, the header consists of a container to align the elements correctly, a header for the site title and two buttons to navigate between the two news feeds.

Each set of components contains their own JS file for their respective styles.

These styled components are exported to a container which allows us to layout our components in any order we wish, reuse them as much as we want and also pass props to them if needed. The container is also where all API fetching logic is done and is where we keep our state in this application.

The news list container is reused between the two news feeds to make the code as DRY as possible. Both feeds have their seperate states.

The containers are then exported to pages files where we can combine containers into a single webpage.

These pages are exported to app.js where we define our routes for both pages.

Finally, our app.js file is imported into index.js which targets a html element in the index.html file and gets rendered.

Any constants, such as API URLs and routes and contained in their own files and are imported when needed.

The global-styles file sets out default styles which are used project wide, such as the font-size and background color.

## Fetching & rendering API data
When the page mounts, our React Hook 'useEffect' fires, calling the getIds function. It passes the path required for whichever news feed is being requested. This is a prop passed in from one of the pages files, either newPosts or topPosts. It also passes two numbers which will be used to fetch only a subset of news stories using the IDs. This is done to reduce the number of requests required. It's quicker to request only 20 items per page, for example, rather than fetch all 500 stories and paginate them after.
![useEffect](/public/screenshots/useEffect.png?raw=true)

Once we fetch the ids, we save them to state and also save the length of the data array to state. This is used for pagination later. We then proceed to fetch the stories themselves using the recently required IDs. We update state with the response. This state change will trigger a render of the News List.

![getIds](/public/screenshots/getIds.png?raw=true)
![getStories](/public/screenshots/getStories.png?raw=true)
![getStory](/public/screenshots/getStory.png?raw=true)

![render](/public/screenshots/render.png?raw=true)

## Pagination
![hacker_news_pagination](/public/screenshots/hacker_news_pagination.png?raw=true)

Pagination is handled using the react-pagination library. We pass in the pageCount variable. This is simply the length of the ids array divided by the news items per page. When a page is changed, we fire the changePage function. This handles the fetching of the next set of news stories for the next page. Using the page number and multiplying that by the number of items per page, we get the beginning or the range for our next slice of the IDs array. To get the end of the slice, we simply add the number of items per page to this value. We then call the getStories functino again with our newly calculated slice parameters. Lastly, we scroll the user to the top of the page using window.scrollTo(0, 0).

![changePage](/public/screenshots/changePage.png?raw=true)
