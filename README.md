
# MakersBNB

A web application that allows users to list/view/hire spaces.

Users can register as "hosts" or "holiday makers" or both.

### Specifications
- Any signed-up user can list a new space.
- Users can list multiple spaces.
- Users should be able to name their space, provide a short description of the space, and a price per - night.
- Users should be able to offer a range of dates where their space is available.
- Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
- Nights for which a space has already been booked should not be available for users to book that space.
- Until a user has confirmed a booking request, that space can still be booked for that night.

Wireframe mockups can be found [here](https://github.com/makersacademy/course/blob/master/makersbnb/makers_bnb_images/MakersBnB_mockups.pdf)

### Quick Start
To run the program:

Install dependencies:
```
npm install
```

To start the application, run:
```
npm run start:dev
```

Then navigate to localhost:8000.

### Database Setup

Setup database for development environment:
```
npm run setupDB
```

Before testing, run:
```
npm run pretest
```
This will migrate your database, seed it with data and change the Node environment to the test env.

To test the application, run:
```
npm run start:test
```

### Technologies

- Languages: JavaScript, HTML/CSS   
- Libraries/Frameworks: Node.js, Express   
- Database: PostGreSQL, Sequelize  
- Testing: Jest/Cypress  
