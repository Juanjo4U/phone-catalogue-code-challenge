# phone-catalogue-code-challenge
phone-catalogue-code-challenge test

<h1>HOW TO RUN THE PROJECT</h1>

<h4> how to run the backend </h4>

* first go to phone-catalogue folder: **cd phone-catalogue**
* then **npm install**
* once all modules are installed run the project with: **npm start**

<h4> how to run the frontend </h4>

* go to test-phone-catalogue folder: **cd test-phone-catalogue**
* then **yarn install** or **npm install** (**I used yarn**)
* once all modules are installed run the project with: **yarn start or npm start**

<h2>IMPORTANT!!</h2>
it's better to verify than the front can access to the back.
<h3>BackEnd Config</h3>

* so you can open in your editor **_phone-catalogue/utils/origins.js_** file
* then at the object variable origin add the front address, in my case it was 'http://localhost:3001'.

example: 


    const origins = {
        test: 'http://localhost:3001' //SET THE ORIGIN TO ALLOW ACCESS HERE
    } 


<h3>FrontEnd Config</h3>

it's better also verify that the front is fetching to the correct API_URL.
* so you can open in your editor **_test-phone-catalogue/src/utils/constants/index.js_** file
* then at the object variable in property API modify the baseUrl property with the api url, in my case it was http://localhost:3000/ DON'T FORGET THE SLASH "/" SYMBOL AT THE END OF THE API URL  

example:


    export const constants = {
        API: {
            baseUrl: 'http://localhost:3000/', // SET THE API URL HERE
            phones: 'phones/',
            getImageUri: function (image) {
                if (!image) return null
                return this.baseUrl + 'images/' + image
            }
        }
    }


<h2>**STRUCTURE EXPLANATION**</h2>

<h4>**Why did I decide to use this structure ?**</h4>

* it's because I found usefull to separate the use of libraries and not mix it all so as when I have to make an update I know exactly where to go
* this way to organize also helps me a lot when I find a bug cause just looking at the folder name I know exactly where the error is
* separating each reducer state with it's actions, selecters, types makes the code easier to read instead of having a large file with many actions and a file with many types or selecters, cause it's awful to find a bug in a file that has thousands of lines, I try not to overpass more than a hundred lines and most of the time I feel better if the file has less than 60 lines XD.
* having a nice folder, file or function name also helps to read the code easier

with this structure even my friends who don't know much about coding are capable to understand what I'm doing.
what I'm trying to do is find a way to make code easier to read so people won't think that coding is hard and that's why I love functional programing and currying pattern cause I think that everyone can know exactly what this function does: **_const getPhoneList = fromPhoneGet('phoneList');_**
