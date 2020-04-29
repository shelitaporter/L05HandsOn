import React from 'react';
import ReactDOM from 'react-dom';

const favoriteColor1 = React.createElement('li', {}, 'Purple');
const favoriteColor2 = React.createElement('li', {}, 'Pink');
const favoriteColor3 = React.createElement('li', {}, 'Blue');

const favoriteArtist1 = React.createElement('li', {}, 'Tasha Cobb');
const favoriteArtist2 = React.createElement('li', {}, 'Johnathan McReynolds');
const favoriteArtist3 = React.createElement('li', {}, 'Jekalyn Carr');

const favoriteFood1 = React.createElement('li', {}, 'Chicken Alfredo');
const favoriteFood2 = React.createElement('li', {}, 'Country Fried Steaks');
const favoriteFood3 = React.createElement('li', {}, 'Spaghetti');

const favoriteWebsite1 = React.createElement(
  'li',
  {},
  React.createElement(
    'a', 
    { href: 'https://www.pinterest.com' }, 
    'www.pinterest.com'
  )
);
const favoriteWebsite2 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.google.com' },
    'www.google.com'
  )
);
const favoriteWebsite3 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.facebook.com' },
    'www.facebook.com'
  )
);

ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'My Favorite Things'),
    React.createElement(
      'ul',
      {},
      React.createElement(
        'li',
        {},
        'Favorite Colors',
        React.createElement('ol', {}, favoriteColor1, favoriteColor2, favoriteColor3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Music',
        React.createElement('ol', {}, favoriteArtist1, favoriteArtist2, favoriteArtist3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Food',
        React.createElement('ol', {}, favoriteFood1, favoriteFood2, favoriteFood3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Websites',
        React.createElement('ol', {}, favoriteWebsite1, favoriteWebsite2, favoriteWebsite3)
      )
    )
  ),
  document.getElementById('root')
);
