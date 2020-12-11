# shopping-cart

This project was bootstrapped with [Create React App](https://create-react-app.dev/docs/getting-started/) .
Uses Jest, Enzyme, and Sinon for testing



## File structure of important scripts-

1. Main file - ShoppingMnager.js
  > It imports CartManager.js and ProductManager.js which are ideally the main components of a basic shopping cart application

2. CartItem.js 
   > This file contains information about the product in cart. it includes "title" , "price" and "quantity" ordered. 

3. CartItemList.js 
  > This file contains multiple cart items properties such as "id" , "title", "price" , "quantity".
  > Also contains TotalPrice() function to calculate cart total and  removeFromCart prop .
  > Here before check out, sales tax of 12.5% will be calculated and the gross amount payable is displayed 
   
4. CartManager.js
   > Contains Cart item prperties imported from CartItemList.js and manages deletion of cart items with updating cart item list
   
5. Product.js 
  > Contains event handlers such as handleAddToCartClick() and addToCart()
  > contains properties of a product with list of products in the useState.
    
6.ProductData.js
  > contains product details .
  
7.ProductList.js
  > contains script to display all the products
  
8.ProductManager.js
  > Manages products which are available to add to cart. Once the product has been added to the cart, quantity of the product gets updated along with quantity 
  in te cart
  
## Available Scripts
In the project directory, you can run:

```
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Below you will find  information on how to perform common tasks for testing.
Before running the npm command for testing,  install enzyme using the following command
```
npm install enzyme

```
and 
```
npm install enzyme-adapter-react-16
```

Then proceed with
```
npm test
```
Launches the test runner in the interactive watch mode.

You can find the most recent version of this guide [here](https://create-react-app.dev/docs/running-tests/).

```
npm run build
```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
  
Snapshot of the Application
![here](https://github.com/Sanchitakr/shopping-cart/blob/master/img/different.PNG)
