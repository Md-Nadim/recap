
              // ৫ নং ভিডিও মডিউল ৩৩ এর
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Nayok></Nayok>
//         <Nayok></Nayok>
//         <Nayok></Nayok>
//         <Nayok></Nayok>
//         <img src={logo} className="App-logo" alt="logo" /> 
//       </header>
//     </div>
//   );
// }

// function Nayok(){
//   return(
//       <div style={{border: '2px solid red', margin:'10px'}}>
//         <h1>Ami Khol Nayok</h1>
//         <h3>I have done 5 movies</h3>
//       </div>
//   );
// }
// export default App;



                  // ৬ নং ভিডিও মডিউল ৩৩ এর 
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const nayoks = ['Raj Razzak','Debjol','Shakib khan','Tahsan Khan']
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Nayok name="Jasim"></Nayok>
//         <Nayok name="Sakib Khan"></Nayok>
//         <Nayok name={nayoks[3]}></Nayok>
//         <Nayok name="Nadim Khan" age="18"></Nayok>
//         <img src={logo} className="App-logo" alt="logo" /> 
//       </header>
//     </div>
//   );
// }

// function Nayok(props){
//   console.log(props.name)
//   const nayokStyle = {
//     border: '2px solid purple',
//     margin: '20px'
//   }
//   return(
//       <div style={nayokStyle}>
//         <h1>Ami Nayok {props.name}</h1>
//   <h3>I have done 5 movies in {props.age || 30} years</h3>
//       </div>
//   );
// }
// export default App;





                // ৭ নং ভিডিও মডিউল ৩৩ এর
// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const nayoks = ['Raj Razzak','Debjol','Shakib khan','Tahsan Khan']
//   return (
//     <div className="App">
//       <header className="App-header">
//         <MovieCounter></MovieCounter>
//         <Nayok name="Jasim"></Nayok>
//         <Nayok name="Sakib Khan"></Nayok>
//         <Nayok name={nayoks[3]}></Nayok>
//         <Nayok name="Nadim Khan" age="18"></Nayok>
//         <img src={logo} className="App-logo" alt="logo" /> 
//       </header>
//     </div>
//   );
// }

// function MovieCounter(){
//   const [count, setCount] = useState(0);

//   console.log(count, setCount)
//   return(
//     <div>
//       <button>Add Movie</button>
//   <h3>Number of movies </h3>
//     </div>
//   )
// }

// function Nayok(props){
//   console.log(props.name)
//   const nayokStyle = {
//     border: '2px solid purple',
//     margin: '20px'
//   }
//   return(
//       <div style={nayokStyle}>
//         <h1>Ami Nayok {props.name}</h1>
//   <h3>I have done 5 movies in {props.age || 30} years</h3>
//       </div>
//   );
// }
// export default App;




                      // ৮ নং ভিডিও মডিউল ৩৩ এর

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Raj Razzak','Debjol','Shakib khan','Tahsan Khan']
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        <Nayok name="Jasim"></Nayok>
        <Nayok name="Sakib Khan"></Nayok>
        <Nayok name={nayoks[3]}></Nayok>
        <Nayok name="Nadim Khan" age="18"></Nayok>
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);

  const handlerClick = () => setCount(count + 1);
  return(
    <div>
      <button onClick={handlerClick}>Add Movie</button>
      <h3>Number of movies {count} </h3>
      <MovieDisplay movies= {count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies} </h4>
}

function Nayok(props){
  console.log(props.name)
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return(
      <div style={nayokStyle}>
        <h1>Ami Nayok {props.name}</h1>
  <h3>I have done 5 movies in {props.age || 30} years</h3>
      </div>
  );
}
export default App;