# About the project : bmi-calculator
BMI calculator is a simple node js / express js app  that calculates the bmi and shows it's interpretation.
It's an educational project to learn how to use CI/CD pipeline, deploy app in AKS cluster and monitor it with prometheus and Graffana.

### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)

# Project architecture
# Live URL 
1. GET BMI 
  * [Node.js](https://nodejs.org/)
2. GET Interpretation from BMI
  * [Node.js](https://nodejs.org/)
   
# How to install & run locally
1. Clone the repo
   ```sh
   git clone https://github.com/SafaTelli/bmi-calculator.git
   ```
2. go to the project folder
   ```sh
   cd bmi-calculator
   ```
3. install & run
   ```js
   make run
   ```
Your app should now be running on localhost:3000

Enjoy calculating your BMI :

  ```js
   localhost:3000/bmi?weight=60&height=1.65
   ```
and interpreting it like  : 
```js
  localhost:3000/bmi/40
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

# How to run unit test
   ```js
   make test
   ```
