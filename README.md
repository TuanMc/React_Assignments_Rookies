# ***React Excercises for Rookies***

## **Excercise 1**:

### **Question 1**: What is the diffference between the React's function components and class components ?

|                                 Function Components                                        |       Class Components                                                                               |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
|   It is Javascript function which accepts props as an argument and returns a React element |  Requires to extend from React. Component and create a render function which returns a React element |                       
|   Stateless component                                                                      |  Stateful components                                                                                 |
|   Cannot use react lifecycle methods                                                       |  Can use react lifecycle methods                                                                     |
|   Constructor are not used                                                                 |    Constructor are used as it needs to store data                                                    |

### **Question 2**: What is the component state ?

The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. 
In other words, the State of a component is an object that holds some information that may change over the lifetime of the component

## **Excercise 2**:

### **Question 1**: What is the order lifecycles in ReactJS ?

The three phases are: Mounting, Updating, and Unmounting

### **Question 2**: What is the difference between React's handling events vs HTML handling events?

|ReactJS|HTML|
|-------|----|
|   we specify event using “onclick”,”onsubmit”which is the normal convention.  |   We specify the event using  “onClick”,”onSubmit” likewise which is camel case convention.   |
|   We bind or provide the listener in form of the string.  |   We bind or provide the listener in form of function name or method name as a variable.  |
|   We can add event listener any time using external javascript.   |   We have to specify all the Events at the time of creating the component.    |    

### **Question 3**: How to send data from child component to its parents?

- In the parent component, create a callback function. This callback function will retrieve the data from the child component.
- Pass the callback function to the child as a props from the parent component.
- The child component calls the parent callback function using props and passes the data to the parent component.


