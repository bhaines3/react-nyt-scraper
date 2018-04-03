# :newspaper: NY Times ReactJS App :statue_of_liberty:
A `NodeJS`, `MongoDB`, `Express`, and `ReactJS` application where users can query, display, and save articles from the [New York Times Article Search API](http://developer.nytimes.com/). Users can remove saved articles as well.

Please check out the deployed version in Heroku [here](https://nyt-news-react.herokuapp.com/)!

Click on the headlines to be re-directed to the full New York Times articles.


## Functionality
On the backend, the app uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.

On the frontend, the app uses `ReactJS` for rendering components, `axios` for internal/external API calls, and `bootstrap` as a styling framework.

## Cloning down the repo
If you wish to clone the app down to your local machine...
  1. Ensure that you have MongoDB set up on your laptop
    * An amazing repo to get you started with that can be found [here](https://github.com/dannyvassallo/mongo_lesson).
  2. Once you are set up, `cd` into this repo and run `npm install`.
  3. Then open another bash or terminal window and run `mongod`
  4. Run the script with `node server.js`.
  5. Navigate to `localhost:3000` in your browser.



## Screenshots
#### Users are able to submit a topic, start year, and end year to query the New York Times
![Query Articles](/images/homepage.png)



#### When you click the download icon it will save the article in your saved page
![Article Content](/images/savedArticle.png)



#### Click on Saved in the Navbar and it will show you all of your saved articles with the option to delete by clicking on the red "x"
![Add Comment](/images/savedPage.png)

#### Note that the get routes include an **internal route** to `/api/saved` for querying and displaying all the bookmarked articles from the Mongo database.

#### Note that the get routes also include an **external route** to `https://api.nytimes.com/svc/search/v2/articlesearch.json` for querying the New York Times.

## Authors
* **Brandon Haines** - [GitHub](https://github.com/bhaines3)
