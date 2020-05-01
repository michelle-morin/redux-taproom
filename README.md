# Taproom

#### React/Redux Independent Project for Epicodus, May 1, 2020

#### By: Michelle Morin

## Description

_This application is a taproom where a bar can track their beer inventory. Redux stores all application state. Slices of state include masterKegList (an object holding all kegs in the taproom) formVisible (a boolean indicating whether or not the NewKegForm is visible), and selectedKeg (an object that is either null or a keg in the taproom))._

_This application is deployed on [GitHub Pages](https://michelle-morin.github.io/redux-taproom/)!_

### Specification user stories:

* As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brewery, price per pint, alcohol content (ABV), and International Bitterness Units scale (IBU).
* As a user, I want to submit a form to add a new keg to the list.
* As a user, I want to click on a keg to see its details page.
* As a user, I want to see how many pints remain in a keg (a full keg is assumed to include 124 pints). Each keg's detail page displays its remaining pint quantity.
* As a user, I want to see the freshness of each keg. Each keg's detail page displays its tap date.
* As a user, I want to click a "buy" button next to a keg whenever a pint is sold. Clicking the buy button decrements the keg's remaining pint quantity by 1.
* As a user, I want to see when a keg is almost empty. When a keg contains > 0 and <= 10 remaining pints, the "buy" button indicates that the keg is almost gone.
* As a user, I want to be unable to sell a pint from an empty keg. Once a keg is empty (0 pints remaining), the buy button is replaced with a note indicating that the keg is sold out.
* As a user, I want to be able to remove a keg from the taproom, but only once the keg is empty. When a keg is empty 0 pints remaining), the keg's detail page displays a "delete" button to remove the keg from the taproom.

### Component Tree
![component tree](/ComponentTree.jpg)

### Homepage
![homepage](/UI.png)

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* ``/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
* ``echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile``

_Install Git with the following command:_
* ``brew install git``

_Next, install Node.js by entering the following command in Terminal:_
* ``brew install node``

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

### Clone this repository

_Enter the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``cd desktop``
* ``git clone https://github.com/michelle-morin/redux-taproom``
* ``cd redux-taproom``

_Confirm that you have navigated to the redux-taproom directory (e.g., by entering the command_ ``pwd`` _in Terminal)._
_Next, install npm at the project's root directory by entering the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``npm install``
* ``npm start``

_To view/edit the source code of this application, open the contents in a text editor or IDE of your choice (e.g., to open the project in Visual Studio Code, enter the command_ ``code .`` _in Terminal (macOS) or PowerShell (Windows))._

## Technologies Used
* Git
* CSS
* JavaScript
* JSX
* React
* Redux
* Create-React-App
* Webpack
* npm
* ESLint

### License

MIT license

Copyright &copy; 2020 Michelle Morin
