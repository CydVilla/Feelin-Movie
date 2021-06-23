# Feelin-Movie


## Project Description

Feelin-Movie is an Airtable and React project in which visitors are able to submit reviews along with their favorite movie(s) of choice. Starting at the homepage, the user will be greeted by the existing movies reviews and be provided a form to submit their review as well as be able to upload a movie image for their respective movie. Ultimately, once populated with movie reviews, anyone visiting the site will haev no shortage of quality movies to see!

## Wireframes

The wireframes included below includes the layout of the site, the placement of the form that will be utilized to allow upload if images/reviews and designs for various screensizes on mobile platforms. 

![imageAlt](https://i.imgur.com/xq8cGIE.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/4PKbCFb.png)

## API and Data Sample

https://airtable.com/shrC4iPlFBn1Uc7ep

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "rec5LJv3z0Ki3LU4j",
            "fields": {
                "imageURL": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
                "year": 2018,
                "title": "Avengers: Infinity War",
                "review": "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality."
            },
            "createdTime": "2021-05-07T13:49:28.000Z"
        },
```

### MVP/PostMVP

#### MVP

- Home page displaying submission and guide for said submission.
- Succesfully intergrating GET/POST API data from Airtable.
- Use forms to allow the creation of reviews from Airtable.
- Add the ability to retract a submission from Airtable.

#### PostMVP

- Seek responsive design input from a UX student.
- Have a live movie new reel.
- Add a dynamic background.
- Add link to rent movies.
- Add star rating system.

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| May 7-9  | Proposal Approval / Airtable Setup          | complete |
| May 10   | Component Creation / Get, Set, Delete Data | complete |
| May 11   | comp creation continued / CSS Components   | complete |
| May 12   | CSS Components cont'd / MVP                 | complete |
| May 13   | Advanced CSS/ POST MVP                     | complete |
| May 14   | Presentations                              | complete |

## Timeframes

| Component                 | Priority | Estimated Time | Actual Time    | 
| ------------------------- | :------: | :------------: | :------------: |  
| Proposal                  |    H     |      3hrs      |     4hrs       |        
| Airtable setup            |    H     |     1hrs      |     .5hr       |        
| Button functionality      |    H     |      2hrs      |     1hr        |         
| Test movie card render    |    H     |      2hrs      |     1hrs       |               
| Component App.js          |    H     |      4hrs     |     3hr        | 
| Component HomePage.jsx    |    H     |      3hrs     |     4hr        |  
| Multiple routes from HomePage   |    H     |      4hrs      |     5hrs       |               
| Component Form.jsx        |    H     |      3hrs     |     2hr        |      
| Implement Delete button functionality   |    H     |      3hrs      |     3hrs       |               
| Component Nav/Footer   |    H     |      3hrs     |     2hr        |         
| Component Movie card           |    H     |      3hrs     |     2hrs       |     
| CSS styling for HomePage  |    H     |      5hrs     |     7hrs       |   
| CSS styling for Form      |    H     |      3hrs     |     5hrs       |        
| Component CSS continuted  |      H   |      2hrs     |     3hrs       |          
| Total                     |    H     |    38hrs     |     42hrs       |      

## SWOT Analysis

### Strengths:

I know the project I want to build and how to go about taking the steps to build it. However, should I become stumped, I have an amplitude of resources at my disposal to provide guidance.  

### Weaknesses:

Class components are a bit of enigma to me, something I will have to address by taking time to research and looking through my resources. 

### Opportunities:

This project represents my trials and tribulations as a react developer and how I have overcomed them to keep pushing on in the endless pursuit of knowledge.

### Threats:

When I have a new idea I tend to try to implement or fiddle with it for too long, it has the risk of taking up crucial development time so I will stay the course and implement new ideas after I meet MVP. 
