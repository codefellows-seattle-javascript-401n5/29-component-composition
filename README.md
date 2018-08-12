![cf](http://i.imgur.com/7v5ASc8.png) 29: To Do (w/Update) - Haley Mendoza
===

[![Build Status](https://travis-ci.com/hjmendoza/28-routing-and-testing.svg?branch=master)](https://travis-ci.com/hjmendoza/28-routing-and-testing)


#### Features
###### App Component
* Manages the frontend routes and has a navbar
* `/` route displays the `Landing` component
* `/dashboard` route displays the `Dashboard` component

###### Landing Component
* The Landing component displays a brief description of the notes app

###### Dashboard Component 
* The Dashboard component manages the entire **application state**
* Contains a notes array with bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added has the following data
    * `id`: contains the result of `uuid.v1()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* Contains a bound `removeNote(note)` method that removes a note from `state.notes` based on its `id`

###### NoteForm Component
* `onComplete` the NoteForm adds a note to the application state

###### NoteList Component 
* Display an unordered list of NoteItem components

###### NoteItem
* Displays the notes content and title
* Displays a delete button
  * `onClick` the note should be removed from the application state

###### NoteUpdateForm 
* Inherits a note through props and onSubmit updates the App's state with an updated note when user double clicks. 


#### To Get App Started
* Clone down code
* Run `npm i`
* Run `npm run watch` which will open up a window at `localhost:8080`
* Go to Dashboard to begin adding and editing notes!
* Run `npm run test` to run tests