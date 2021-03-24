# phone-catalogue-code-challenge
phone-catalogue-code-challenge test


to start first go to phone-catalogue folder: cd phone-catalogue
then npm install
once all modules are installed run the project with: npm start

then start the front going to test-phone-catalogue folder: cd test-phone-catalogue
then yarn install or npm install (I used yarn)
once all modules are installed run the project with: yarn start or npm start

IMPORTANT!!\n
it's better to verify than the front can access to the back.
so you can open in your editor phone-catalogue/utils/origins.js file
then at the object variable origin add the front address, in my case it was 'http://localhost:3001'.

it's better also verify that the front is fetching to the correct API_URL.
so you can open in your editor test-phone-catalogue/src/utils/constants/index.js file
then at the object variable in property API modify the baseUrl property with the api url, in my case it was http://localhost:3000/ DON'T FORGET THE SLASH "/" SYMBOL AT THE END OF THE API URL  
