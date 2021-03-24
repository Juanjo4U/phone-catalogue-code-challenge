# phone-catalogue-code-challenge
phone-catalogue-code-challenge test

<h1>HOW TO RUN THE PROJECT</h1>

to start first go to phone-catalogue folder: cd phone-catalogue
then npm install
once all modules are installed run the project with: npm start

then start the front going to test-phone-catalogue folder: cd test-phone-catalogue
then yarn install or npm install (I used yarn)
once all modules are installed run the project with: yarn start or npm start

<h2>IMPORTANT!!</h2>
it's better to verify than the front can access to the back.
<h3>BackEnd Config</h3>

* so you can open in your editor **phone-catalogue/utils/origins.js** file
* then at the object variable origin add the front address, in my case it was 'http://localhost:3001'.

example: 


    const origins = {
        test: 'http://localhost:3001' //SET THE ORIGIN TO ALLOW ACCESS HERE
    } 


<h3>FrontEnd Config</h3>

it's better also verify that the front is fetching to the correct API_URL.
* so you can open in your editor t**est-phone-catalogue/src/utils/constants/index.js** file
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

