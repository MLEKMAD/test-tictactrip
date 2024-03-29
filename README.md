  <h3 align="center">Text Justification - Tictactrip</h3>
  <a align="center" href="https://text-justification.herokuapp.com/">The app url</a>

  <p align="center">
    A text justification API.
  </p>



<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
      <li><a href="#test">Test</a></li>
  </ol>
</details>




## About The Project

This text justification api has many functionalities :
<ol>
    <li>
      It authenticates the user.
    </li>
     <li>
      It justifies a given text so its lines would be 80 words length each.
    </li>
    <li>
      It has a rate limit that limits the user to 80000  a day.
    </li>
   <li>
     If the text is bigger than 80000, the api return 402 code.
  </li>
     <li>
     If the user exceeds his quota of the day, the api return 402 code.
  </li>
  </ol>




### Prerequisites

To use this project you should have node installed.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MLEKMAD/test-tictactrip.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


## Usage
### Run the project
   ```sh
   npm start   
   ```
### Endpoints
#### /api/token
This endpoint return a token to our user so he can use the authenticated endpoints, It takes as a body the email of the user, in our case, to make it simple the user is {"email": "foo@bar.fr"}
#### /api/justify
This is the main endpoint, it justifies a text that is passed to the body, but first make sure to put your token in the headers. 

## Test 
### Test The project and see the coverage
   ```sh
   npm test
   ```
