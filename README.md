# Taproom

#### React/Redux Independent Project for Epicodus, May 1, 2020

#### By: Michelle Morin

## Description

_This application, built using Create React App, is a taproom where a bar can track their beer inventory. All application state is stored using Redux._

_Deployed on [GitHub Pages](https://michelle-morin.github.io/redux-taproom/)_

### Specification user stories:

* A user is able to see a list/menu of all available kegs. For each keg, the user is able to see its name, brewery, price, and alcohol content (ABV).
* A user is able to submit a form to add a new keg to the list.
* A user is able to click on a keg to see its details page.
* A user is able to see how many pints are remaining in a keg (a full keg is assumed to include 124 pints). The pint quantity remaining in a keg is displayed on that keg's detail page.
* A user is able to click a "buy" button next to a keg whenever a pint is sold. This decreases the number of pints remaining by 1.
* When there are between 0 and 10 pints remaining in a keg, a user is able to see that the keg is almost gone (indicated on the "buy" button).
* A keg is unable to be poured from (pint count decremented) when the keg is empty. Instead, a user is able to see a note that the keg is empty.
* A user is able to delete a keg when it is empty (0 pints remaining).

### Component Tree
![component tree](/ComponentTree.jpg)

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
