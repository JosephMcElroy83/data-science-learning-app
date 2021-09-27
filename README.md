# Project Overview

## Project Name

Data Science Learning App

## Project Description

Introductory Data Science application that lets you interact with the basic fundamentals of what data science is and what it can accomplish. Let the user interact with a data set, make assumptions, write those assumptions, and finally display those against other users responses. Using responses to promote a growth mindset and very beginner friendly approach and limiting scope for entry level concepts.

## Wireframes

https://whimsical.com/data-science-learning-app-NkwC1Bo3o4LVdUQpzjG6yD

![Image mobile](https://res.cloudinary.com/jm83/image/upload/v1632759828/Screen_Shot_2021-09-20_at_9.57.13_AM_yen73g.png)

![Image desktop1](https://res.cloudinary.com/jm83/image/upload/v1632759828/Screen_Shot_2021-09-20_at_10.11.28_AM_ldh9ph.png)

![Image desktop02](https://res.cloudinary.com/jm83/image/upload/v1632759828/Screen_Shot_2021-09-20_at_10.11.43_AM_scmmlk.png)

## Component Hierarchy

https://whimsical.com/data-science-learning-app-NkwC1Bo3o4LVdUQpzjG6yD

![Image routes-comps](https://res.cloudinary.com/jm83/image/upload/v1632759846/Screen_Shot_2021-09-20_at_10.29.32_AM_tuy0ad.png)

![Image comp-flow](https://res.cloudinary.com/jm83/image/upload/v1632759828/Screen_Shot_2021-09-20_at_9.59.29_AM_jj8qiz.png)

## API and Data Sample

Database: https://airtable.com/invite/l?inviteId=invEHMK9MJpUW8he7&inviteToken=8557d7b4df09d36072d14a53ecd963daee7e39dffc7da858b662a875ec4eaa91&utm_source=email

```json
{
  "records": [
    {
      "id": "recVWR0uhrOd8FWNO",
      "fields": {
        "title": "Was Covid an Immediate Threat?",

        "hypothesis": "Covid was not an immediate life threatening virus",

        "whatSolve": "Whether Covid was an immediate threat based upon death to hospitalization ratios",

        "howTest": "Upon looking at the data only, it appears at the first incoming data that there was not a lot of immediate deaths of covid providing a stronger sense of survivability. This did change with further time, but slotting the era of review to only the first month, it did not get into the heights of which we know today. This could have caused certain reactions from the medical community due to the unknown factors at the current time and the severity.\n\nReview various datasets from each state and how many individuals were hospitalized and how many have died due to covid. You could conduct a basic running average test to determine if the rates of deaths increase as hospitalizations increase or not. Providing some insight into the general populous numbers and if the overall data supports it. If there is increased deaths, I would want to explore age ranges and see if there is a batch of ages that follow a trend. It is important to notice whether or not the individuals suffered from comorbidity complications as well. This promotes a second question of who is vulnerable? Can I find another data set that helps me explore further into my original question and can that bring forward any new results or further findings. "
      },
      "createdTime": "2021-09-27T15:10:27.000Z"
    }
  ]
}
```

#### MVP

- Introductory to data science home page
- Data visual on page
- Analysis questions on page
- Form input
- Form results

#### PostMVP

- Create additional visuals to scroll through
- Create additional questions and scale up form
- Add additional learning resources page to link to

## Project Schedule

| Day               | Deliverable                                            | Status   |
| ----------------- | ------------------------------------------------------ | -------- |
| September 16-17   | Prompt / Wireframes / Component Heirarchy / Timeframes | Complete |
| September 17      | Project Approval                                       | Complete |
| September 20      | Core Html and CSS Boilerplate                          | Complete |
| September 20 - 22 | Pseudocode / JS logic / React Components               | Complete |
| September 22      | Routing / Interactibility / CRUD                       | Complete |
| September 24      | MVP                                                    | Complete |
| September 24 - 26 | CSS design improvements / Full CSS & Media Queries     | Complete |

## Timeframes

| Component                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------ | :------: | :------------: | :-----------: | :---------: |
| Boilerplate Html         |    H     |      2hrs      |     2hrs      |    2hrs     |
| React Component Layout   |    H     |      5hrs      |     4hrs      |    6hrs     |
| React Boilerplate CSS    |    H     |      4hrs      |     4hrs      |    10hrs    |
| React Router Pathings    |    H     |      1hrs      |    0.5hrs     |   10.5hrs   |
| React Component API pull |    H     |      2hrs      |     2hrs      |   12.5hrs   |
| React Interactibility    |    H     |      4hrs      |     4hrs      |   16.5hrs   |
| React JS Logic           |    H     |      6hrs      |     6hrs      |   22.5hrs   |
| React Individual Styling |    H     |      6hrs      |     18hrs     |   40.5hrs   |
| React Responsive Design  |    H     |      5hrs      |     10hrs     |   50.5hrs   |
| React CSS Media Queries  |    H     |      5hrs      |     8hrs      |   58.5hrs   |
| Total                    |    H     |     40 hrs     |    58.5hrs    |   58.5hrs   |
