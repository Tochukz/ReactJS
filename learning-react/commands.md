# Learning React
[Github Repo](https://github.com/moonhighway/learning-react)

## Chapter 1: Welcome to React
Install yarn:  
`$ npm install -g yarn`   
Using yarn:  
`$ yarn install`  or `$ yarn`
`$ yarn add [package-name]`  
`$ yarn remove [packge-name]`  

## Chapter 2: Emerging JavaScript  

## Chapter 8: Redux
Redux rule: application state should be stored in a single immutable object. Immutable means this state object doesn’t change.   
We will eventually update this state object by replacing it entirely.  
__Actions__   
Actions are nice little object literals that tell Redux how state should be changed.   
They include a "type" key with a string value representing the type of the action e.g. {type: "ADD_COLOR"} .     
They also include any associated data that Redux will need to make the change.  
__Reducers__   
Reducers are functions that take the current state along with an action as arguments and use them to create and return a new state.  
Reducers should be predictable. Generating random data, calling APIs, and other asynchronous processes should be handled outside of reducers.   
Avoiding state mutations and side effects is always recommended.  
Action objects are simply JavaScript literals. Action creators are functions that create and return these literals.
Action creators are where we should put any logic for communicating with backend APIs.  
With an action creator, we can perform asynchronous logic like requesting data or making an API call.   
__Subscribers__  
Stores allow you to subscribe handler functions that are invoked every time the store completes dispatching an action.
__Store Factory__   
 A factory is a function that manages the process of creating stores.
 __Middleware__  
 In Redux, middleware is defined as a higher-order function: it’s a function that returns a function that returns a function.