Iteration is focused mainly on building React components in isolation.

## Introduction

This iteration is focused on working with React, creating React components without context, rendering components in a list, conditional rendering and some basic hooks usage.

In this assignment, you will create components according to predefined HTML blocks and their CSS.

To start the app run `npm run storybook` from the iteration folder.

## Help

If you need any help, either write under this issue or write in the `#iteration-08` thread on our Discord.

## Project overview

- Whole project apart from some configuration is located in `src/components` folder.
- Each component you have to create is located in an individual folder.
- Each folder contains an HTML file with the structure of the component and the required CSS files.
- **You must use CSS modules for styling.**
- You do not need to modify `.stories.tsx` files.

## Requirements
- Create a component for Artist. Pass name, description, verified status and navigation button disabled status as props.
  Both buttons are enabled/disabled according to prop. Create div with verified status only if its value is `true`.
- Create a component for the Play bar. Create two buttons inside, first will be a green button you can pause/unpause with. The second will be a follow button, which says follow/unfollow.
- Create a component for the Current song. Pass image, song name and artist name as props.
  Create a button that will change if the song is liked or not.
- Create a component for the Playlist card. Pass image, playlist name and description.
  There will be a button with a play image similar to before visible only on hover. When clicked the button's image will change to pause and the button will become visible even when not hovered. Clicking again will return it to it's original state.

![card](/uploads/950be0fd361aef2eda607220de09fde4/card.jpeg)

- Create a simple card component. Pass only name and image.
- Create a simple welcome component. The page will have a list of components created in last exercise.
- 

You can also find possibly more up-to-date version on [Gitlab](https://gitlab.fi.muni.cz/pb138/pb138-iterations-2022/-/issues/17).
