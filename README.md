
![Logo](https://i.imgur.com/ln2pXmO.png)


# CineMate

Lights, camera, action! Get ready for the ultimate movie experience with CineMate, the perfect app for all movie enthusiasts. With CineMate, you can easily search for your favorite movies and get all the information you need at your fingertips. 

But that's not all! With CineMate, you can also write your own reviews and share your thoughts with other movie lovers. Whether you want to rave about the latest blockbuster or share your opinions on a classic film, CineMate lets you have your say.

So why wait? Download CineMate today and join a community of movie lovers who share your passion for cinema. With CineMate, every movie night is a blockbuster!

## Authors

- [John Emilio](https://www.github.com/JohnEmilio) : [LinkedIn](https://www.linkedin.com/in/john-emilio/)
- [Schamir Poliard](https://www.github.com/Schamiir) : [LinkedIn](https://www.linkedin.com/in/schamirpoliard/)
- [Tyson Roussel](https://www.github.com/TysonR0319) : [LinkedIn](https://www.linkedin.com/in/tysonrobert/)
- [Norbert Seals](https://www.github.com/Norbert305) : [LinkedIn](https://www.linkedin.com/in/norbert-seals/)
- [Juan José Guanipa](https://www.github.com/Juanjosegunipa) : [LinkedIn](https://www.linkedin.com/in/jjjguanipa/)





## Tool Chain

**Plan:** Google Meets, Slack, & Google Drive

**Code:** VSCode (React), IntelliJ(Java, Springboot), MongoDB

**Build:** Maven, NPM (build react app)

**Test:** Postman(API), Jest

**Release:** GitHub

**Deploy & Monitor:** GitHub Actions, Render


## Features

- Create a CineMate account.
- Search and browse for movies by title. 
- Write reviews for movies they have watched. 
- Users can edit or delete their reviews at any time.
- View detailed information about movies, such as the movie's poster, release date, and plot summary.


## Demo

https://cinemate-now.netlify.app/


## Screenshots

![App Screenshot](https://i.imgur.com/kprFG8h.png)


## Installing/Getting Started

**Fork the project to personal repo** : https://github.com/strategio-tech/fp-sim7-strajutsu-kaisen


Go to the project directory

```bash
  cd <into app folder>
```

Install all the node dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

#### Atlas MongoDB Configuration

1. Next, you will need to set up a MongoDB URI to connect to your MongoDB database.

2. You can sign up for a free MongoDB Atlas account.

3. Once logged you can create a new Shared Cluster that is cost free.

4. Select your Cloud Provider and Region, select a free Cluster Tier and give your cluster a name.

5. Once your Cluster is created you can get the connection url clicking in the connect button and selecting Connect Your App as your connection method

To start the Springboot server for the application, go into the `application.properties` file.

Add the following scripts:

```bash
  spring.data.mongodb.database=<YOUR_DATABASE_NAME>
  spring.data.mongodb.uri=mongodb+srv://<USERNAME>:<PASSWORD>@$<CLUSTER_NAME>.mongodb.net
```
#### Maven

If you don't have Maven installed globally on your local machine, run this command.

```bash
  ./mvnw install
```

To start the server:

```bash
  ./mvnw spring-boot:run
```

#### By default the development server is hosted on localhost:8080


# Architectural Diagram
![App Screenshot](https://i.imgur.com/SxH5xL1.png)



## Future Features

- Community-driven reviews: Users can see other users' reviews for the same movie, allowing for a community-driven movie review platform.
- A comment feature where the user can comment on another users review. 
- A rating feature to the reviews page where the user can rate the movie from 1-100 with a slider. 
- Personalized recommendations: CineMate can suggest new movies that users are likely to enjoy based on their viewing history and reviews.
- Streaming recommendations where the app will display the streaming services the movie is avaliable to stream.
- Follow user-to-user feature to add friends and follow what movies they are watching.


## Branding Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Charcoal | ![#212529](https://via.placeholder.com/10/212529?text=+) #212529 |
| Red | ![#ff1616](https://via.placeholder.com/10/ff1616?text=+) #ff1616 |
| Yellow | ![#ffde59](https://via.placeholder.com/10/ffde59?text=+) #ffde59 |



## Links

 - [Repository](https://github.com/strategio-tech/fp-sim7-strajutsu-kaisen)
 - [Project Blog](https://medium.com/@schamir.poliard/cinemate-the-ultimate-movie-companion-c624acbcc3db)
 

## Feedback

If you have any feedback, please reach out to us at hello@cinemate.com


## License

The code in this project is licensed under MIT license.
