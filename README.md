# Short Description of Sticky Note Architecture

The architecture for the sticky notes was approached in a way that would make room for extension / re-usability for scenarios where we want to scale this relatively small app into something that can serve thousands of users across different browsers and devices with little or no performance issues. 

The app was created using React, which makes it easier to incrementally build upon and compose components, this is extremely helpful in cases where we want to add more high-scale features to the app. One of the very first requirements was to use something as simple as HTML5 Drag and Drop API to implement the drag and drop feature and use the CSS not very popular (resize) property to add the resize behavior to the `sticky notes`. 

Local storage was used as the data store to persist the notes across browser sessions. Individual note location is also saved to the local storage to ensure that each note's position is preserved.

`text/plain` format was use for storing the relevant data with the data transfer object across components for cross browser compatibility.

# Installation and setup

- Run `npm install`
- Then, `npm start`
