# Feelin-Movie


## Project Description

Feelin-Movie is an Airtable and React project in which visitors are able to submit reviews along with their favorite movie(s) of choice. Starting at the homepage, the user will be greeted by the existing movies reviews and be provided a form to submit their review as well as be able to upload a movie image for their respective movie. Ultimately, once populated with movie reviews, anyone visiting the site will haev no shortage of quality movies to see!

## Wireframes

The wireframes included below includes the layout of the site, the placement of the form that will be utilized to allow upload if images/reviews and designs for various screensizes on mobile platforms. 

![imageAlt](https://i.imgur.com/k56H9IK.png)

## Component Hierarchy

![imageAlt]()

## API and Data Sample

https://airtable.com/shrC4iPlFBn1Uc7ep

Airtable is returning the data for this base as follows:

```
base('Table 1').update([
  {
    "id": "rec5LJv3z0Ki3LU4j",
    "fields": {
      "title": "Who Framed Roger Rabbit?",
      "year": 1988,
      "review": "Still the greatest blend of live action and an animation ever to grace theatres.",
      "imageURL": [
        {
          "id": "attyGTpTEiAmNv26S"
        }
      ]
    }
  },
  {
    "id": "rechDeFIxCabkDQps",
    "fields": {
      "title": "Solo: A Star Wars Story",
      "year": 2018,
      "review": "The most underrated Star Wars film in my honest but completely true opinion.",
      "imageURL": [
        {
          "id": "attINCYZJXWTWPQTv"
        }
      ]
    }
  }
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
| May 7-9  | Proposal Approval / Airtable Setup          | incomplete |
| May 10   | Component Creation / Get, Set, Delete Data | incomplete |
| May 11   | comp creation continued / CSS Components   | incomplete |
| May 12   | CSS Components cont'd / MVP                 | incomplete |
| May 13   | Advanced CSS/ POST MVP                     | incomplete |
| May 14   | Presentations                              | incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Actual Time    | 
| ------------------------- | :------: | :------------: | :------------: |  
| Proposal                  |    H     |      3hrs      |     2hrs       |        
| Airtable setup            |    H     |     1hrs      |     .5hr       |        
| Button functionality      |    H     |      2hrs      |     1hr        |         
| Test movie card render    |    H     |      2hrs      |     1hrs       |               
| Component App.js          |    H     |      4hrs     |     1hr        | 
| Component HomePage.jsx    |    H     |      3hrs     |     1hr        |  
| Multiple routes from HomePage   |    H     |      4hrs      |     1hrs       |               
| Component Form.jsx        |    H     |      3hrs     |     1hr        |      
| Implement Delete button functionality   |    H     |      3hrs      |     1hrs       |               
| Component Nav/Header/Footer   |    H     |      3hrs     |     1hr        |         
| Component Movie card           |    H     |      3hrs     |     1hrs       |     
| CSS styling for HomePage  |    H     |      5hrs     |     1hrs       |   
| CSS styling for Form      |    H     |      3hrs     |     1hrs       |        
| Component CSS continuted  |      H   |      2hrs     |     1hrs       |          
| Total                     |    H     |    38hrs     |     1hrs       |      

## SWOT Analysis

### Strengths:

I know the project I want to build and how to go about taking the steps to build it. However, should I become stumped, I have an amplitude of resources at my disposal to provide guidance.  

### Weaknesses:

Class components are a bit of enigma to me, something I will have to address by taking time to research and looking through my resources. 
### Opportunities:

This project represents my trials and tribulations as a react developer and how I have overcomed them to keep pushing on in the endless pursuit of knowledge.

### Threats:

When I have a new idea I tend to try to implent or fiddle with it, it has the risk of taking up crucial development time so I will stay the course and implement new ideas after I meet MVP. 
