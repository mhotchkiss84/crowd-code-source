## Requirements
- npm (Node.js https://nodejs.org/en/)
- json-server (https://github.com/typicode/json-server)

## Installation
- mk & or cd into the directory where you want the files to go
- clone with:
### `git clone https://github.com/mhotchkiss84/crowd-code-source.git`
- cd into crowd-code-source
- run npm install in your terminal/bash window (this will install all the packages used for React and React-Bootstrap). 
### `npm install` 
 
## Running
You will need two terminal/bash windows open. One to run the npm start for the React project, and the other to run json-server
### In the first terminal
- cd into crowd-code-source/api
- run:
### `json-server -p 5002 -w ccs.json`
### In the second terminal
- cd into crowd-code-source
- run:
### `npm start`
### In browser
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
