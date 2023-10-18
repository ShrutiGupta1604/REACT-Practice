 //import logo from './logo.svg';
import './App.css';
import React from 'react';
 

//*************************************MAIN ND RETURN ()********************************************************** 
/*
function App() {
  
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           Shruti
          </a>
        </header>
      </div>
    );
  }
  export default App;
  
  */
//------------------------------------------------------ 

//********************************React Component Life Cycle*****************************

//********************************Unmounted (Component removed)*****************************

 /*
class AppInner extends React.Component
{ 
render()
{
return <div>Inner Component</div>
}
componentWillUnmount()
{
console.log("unmounted")
}

// // In App class
class App extends React.Component
  state = {counter:0, innerComponent:<AppInner/>}
// To add in Return of render method -> {this.state.innerComponent}
componentDidMount()
{
setTimeout(() =>
{
this.setState({innerComponent:<div>Unmounted</div>})
}, 1000);
}
}
export default AppInner;


//---------------------------------------------------------------------


//********************************Updating (components change)*****************************

/*

class App extends React.Component
{
  state = {counter:0}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }

  static getDerivedStateFromProps()
  {
  console.log("Inside the getDerivedStateFromProps")
  }

shouldComponentUpdate()
{
console.log("Inside the shouldComponentUpdate")
return true
} 

incrementCounter = () => 
{
  //updating state on function call
  this.setState({counter:this.state.counter+1})
}  

render()
  {
console.log("Inside the render method")
return ( <button onClick={this.incrementCounter}>Click me</button>
)
}
getSnapshotBeforeUpdate(prevProps, prevState)
{
console.log("Inside the getSnapshotBeforeUpdate")
return true
}

componentDidMount()
{
  console.log("I am inside componentDidMount")
}
 
}
export default App;

 */

/* //-------------------------------------------------------

class App extends React.Component
{
  state = {counter:0}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }

  static getDerivedStateFromProps()
  {
    console.log("I am inside getDerivedStateFromProps")
    return true
  }

  shouldComponentUpdate()
  {
    console.log("Inside shouldComponentUpdate")
    return  false
  }

  incrementCounter = () => 
  {
    //updating state on function call
    this.setState({counter:this.state.counter+1})
    if(this.state.counter % 2 == 0)
    {
      this.setState( )
    }
    else
    {
      this.setState({innerComponent:<div>Unmounted</div>})
    }
    
  }

  // Overridden render function
  render()
  {
    console.log("Inside the render method")
    console.log(this.props)
    return (
        <div>
          <button onClick={this.incrementCounter}>Click me</button>
          <br/>
          Counter:{this.state.counter}
          <br/>
          <div>{this.state.innerComponent}</div>
        </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("Inside getSnapshotBeforeUpdate")
    console.log("Previous Prop:")
    console.log(prevProps)
    console.log("Previous State:")
    console.log(prevState)
    console.log("--------------------")
    console.log("Updated Prop:")
    console.log(this.props)
    console.log("Update State:")
    console.log(this.state)
    return true
  }

  componentDidMount()
  {
    console.log("I am inside componentDidMount")
  }
}
export default App;

*/

//------------------------------------------------------ 


//****************************Mounting (components creation)*********************
 
/* 

class App extends React.Component
{
  state = {counter:0}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }
  static getDerivedStateFromProps()
  {
    console.log("I am inside getDerivedStateFromProps")
  }

  incrementCounter = () => 
  {
    this.setState({counter:this.state.counter+1})
  }

  // Overridden render function
  render()
  {
    console.log("Inside the render method")
    console.log(this.props) 
    return (
        <div>
          <button onClick={this.incrementCounter}>Click me</button>
          <br/>
          Counter:{this.state.counter}
        </div>
    )
  }

  componentDidMount()
  {
    console.log("I am inside componentDidMount")
  }
}
export default App;

 */

//---------------------------------------------------------------------------------------

//**********************************STATE USE************************************

 /*

class App extends React.Component
{
  state = {counter:0}
  incrementCounter = () => 
  {
    this.setState({counter:this.state.counter+1})
  }
render(){  
return (
<div> 
   <button onClick={this.incrementCounter}>Click me</button>
  <br/>
  Counter:{this.state.counter}
</div>
)
}
}
export default App;

*/

//------------------------------------------------------------------


//---------------------------------------------------------------------------------

//************************PROP USE WITH CLASS COMPONENT***************************
 
 /*

class App extends React.Component
{
constructor(props)
{
super(props)
}
// Overridden render function
render()
{
console.log(this.props)
return <button onClick={this.props.clickEvent}>Click me</button>
}
}
export default App;

*/
//-------------------------------------------------------------------------------------


//************************************PROPS USE***********************************
/*

function App(props){
  console.log(props.color)
  console.log(props.size)

return(
  <>
  <h1>Shruti</h1></>
)  
}
export default App;

 */

//-----------------------------------------------------------------

//***********************************PROPS Event() and alert USE WITH FUNCTION COMPONENT**********************

/*

function App(props){
   console.log(props.color)
   console.log(props.size)
   //console.log(props.clickEvent)

return(
  <div className='App'>
    <button onClick={props.clickEvent}>CLICK ME</button>
  </div>
);  
}
export default App;

 */

//------------------------------------- 


//**********************SIMPLE 1ST REACT PROGRAME********************* 

/*

</div>function App()
{
console.log("hello First Statement")

return (
 <div className="App">
   <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <p>
       Edit <code>src/App.js</code> and save to reload.
     </p>
     <a
       className="App-link"
       href="https://reactjs.org"
       target="_blank"
       rel="noopener noreferrer"
     >
      Shruti
     </a>
   </header>
 </div>
);
}

export default App; 



  */

//--------------------------------------------


//******************** let  vaeriable (We can Change )*******---******************
/*

function App()
 {

let FirstVaeriable=5
console.log("Let First Variable="+FirstVaeriable)
FirstVaeriable=6
console.log("Let First Variable="+FirstVaeriable)

let SecondVaeriable=7
console.log("Let Second Variable="+SecondVaeriable)
SecondVaeriable=8
console.log("Let Second Variable="+SecondVaeriable)


 return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
 }

export default App;

*/
//------------------------------------------------------------------




// ******************************const  vaeriable ( Not Changeable  )*************************

/*

function App()
{
const ConstVaeriable=10
console.log("const first Variable="+ConstVaeriable)
ConstVaeriable=11
console.log("Const First Variable="+ConstVaeriable) // thiis Line get error because of cont var. not reassing


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/

//---------------------------------------------------------------------------


// ******************-- var  vaeriable (We can Change )******************************************


/*
function App()
{

var varFirstVariable = 15
console.log("Var First Variable:"+varFirstVariable)
varFirstVariable = 16 
console.log("Var First Variable:"+varFirstVariable)


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/

//---------------------------------------------------------------------





//*******************Without Arrow functions*************************************** */

/*
function App()
{

function sayHello()
{ console.log("ES5 functiona - 1st Hello world")}
sayHello();


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/
//—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—----------------------------—-—-—-—-—-— 



//******************* Arrow functions Use Ex.************************************** 

/*

 function App()
 {
const sayHello = ()=> console.log("ES5 functiona - 2nd Hello world")
 
sayHello();


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/
//—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-—-— 



//**************arrow () use  with settime ********************

/*

function App()
{

const sayHello = ()=> console.log("ES5 functiona - Hello world use with settimeout")
setTimeout(sayHello,2000)


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/

// ------------------------------------------------------------- 




//************************arrow () use  with parametter******************

/*

function App()
{

 const sayHello = (name)=> console.log("Hello "+name )
setTimeout(sayHello("Aditya"),20000)



return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/
//------------------------------------------------------------- 

/*
functon App()
{


const sayHello = (firstName, LastName)=> console.log("Hello "+firstName+" "+LastName )
setTimeout(sayHello("Aditya", "Gupta"),1000)


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;
*/

//----------------------------------------------------------- 
/*

function App()
{

const sayHello = (firstName, LastName)=> {return "Hello "+firstName+" "+LastName;};


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;
*/
//---------------------------------------------------------------- 



//*******************************PROMISE ******************* 
/* 

function App()
{

let promiseArgument = (resolve, reject) =>
{
setTimeout(()=>
{
let currTime = new Date().getTime();
if(currTime %2 === 0)
{
resolve("Success!!")
}
else
{
reject(" Fail")
}
}, 2000)
};
let myPromise = new Promise(promiseArgument);
console.log("result:"+myPromise);


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/

//----------------------------------------------------------- 

/*

function App()
{

let myPromise = new Promise( (resolve, reject)=>
{
setTimeout(()=>
{
let currTime = new Date().getTime();
if(currTime %2 === 0)
{
console.log("success------")
resolve("Success!!")
}
else
{
console.log("fails------")
reject("Failed!!")
}
}, 2000)
});
console.log("result:"+myPromise);

 
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/

//------------------------------------------------------------ 






//********************CLASS -Constructors****************

 /*

function App()
{

class Student{
  Name
  Age
  RollNo
  Email
  constructor(Name, Age, RollNo, Email)
  {
  this.Name = Name
  this.Age = Age;
  this.RollNo = RollNo;
  this.Email = Email;
  }
  printStudent()
  {
  console.log("Name: "+this.Name)
  console.log("Age: "+this.Age)
  console.log("RollNo: "+this.RollNo)
  console.log("Email: "+this.Email)
  }
  }
  let student = new Student()
  student.Age = 11
  student.Name = "Aditya"
  student.RollNo = 111
  student.Email = "abc@student.com"
  let aditya = new Student("shreya", 22, 101, "email@gmail.com")
  
  student.printStudent()
  aditya.printStudent()
 console.log("student :"+student)


 
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

 */

//----------------------------------------------------------------------------






//********************Inheritance******************************* 
 
/*

function App()
{

class Student{
  Name
  Age
  RollNo
  Email
  constructor(Name, Age, RollNo, Email)
  {
  this.Name = Name
  this.Age = Age;
  this.RollNo = RollNo;
  this.Email = Email;
  }
  printStudent()
  {
  console.log("Name: "+this.Name)
  console.log("Age: "+this.Age)
  console.log("RollNo: "+this.RollNo)
  console.log("Email: "+this.Email)
  }
  }
class Moniter extends Student
{
batch
constructor(Name, Age, RollNo, Email, batch)
{
super(Name, Age, RollNo, Email)
console.log("Called moniter constructor")
this.batch = batch
console.log("moniter constructor completed work")
}
printMonitor()
{
super.printStudent()
console.log("Moniter print started work")
console.log("batch=" +this.batch)
console.log("Moniter print completed work")
}
}
console.log("starting to create moniter object")
let moniterShruti = new Moniter("Shruti", 12, 112, "123@email", "react")
console.log("starting to print")
moniterShruti.printMonitor()
console.log("completed to print")



return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       Shruti
      </a>
    </header>
  </div>
);
}

export default App;

*/

//----------------------------------------------------------------
  

//****************************SIMPLE REACT COMPONENT **************************  

/*
function App() {

  return React.createElement(
      "div",
      null,
      React.createElement("p", null, "This is a simple para"),
      React.createElement("h1", null, "This is a simple Heading"),
      React.createElement("li", null, "This is list item 1"),
      React.createElement("li", null, "This is list item 2"),
    );

}
//export default App;
*/
//---------------------------------------------




//**********************Functional components********************** 

/*
function App()
{  
return <h1>Hello SSI Digital</h1>
    
}
export default App;

*/

//-----------------------------------------

 /*

function App()
{
const myComponent = () =>
{
return  <h1>Hello SSI Digital</h1>
}

return myComponent();

}
export default App;

 */

//------------------------------------------------------------



//*************************ClassComponent**********************************  

/*
class MyClassComponent extends React.Component {
  render() {
    return <h1>This is my heading tag</h1>
  }
}
function App() {

  const classComponent = new MyClassComponent();
  return classComponent.render();
}
export default App;

*/

//---------------------------------------------------------------

 