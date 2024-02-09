import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







  // const [state, setSatate] = useState("monthly");

    // const updateText = () => {
    //     setSatate((curr) => (curr === "monthly" ? "yearly" : "monthly"))





        // if (state.text === "monthly") {
        //     setSatate (prevState => prevState, { text: "Yearly"});
        //   }
        //   else if (state.text !== "monthly") {
        //     setSatate ({ text: "Monthly"} );
        //   }



        // setSatate (previousState => {
        //     if ( state.text === "monthly") {
        //         return { ...previousState, text: "Yearly" }
        //     }  return {   text: "Yearly"  };
        // });


        //      setSatate (previousState => {
        //     if ( state.text === "monthly") {
        //         return { ...previousState, text: "Yearly" }
        //     }  return {  text: "Monthly" };
        // })  ;
