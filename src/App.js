import logo from './logo.svg';
import './App.css';
import React from 'react'

//const App = () => {}

function App() {
    const[userEnteredTodo, setUserEnteredTodo] = React.useState("");
    const [listItems, setListItem] = React.useState([]);

    const saveItemAndClearInput = () =>
    {
        setListItem([...listItems, userEnteredTodo]);
        //add logic to clear input
        setUserEnteredTodo("");
    }
    //this is basically equivalent to this...
    /*
        const useState = () => {
        //logic goes here

        return [yourVariable, setYourVariable]
        }
     */

     /*
        let todoListItems =[
        "Laundry",
        "Dishes",
        "Sweep the floor",
        "Feed the cats",
        "Clean the shower",
        "Random task A",
        "Another task"
          ];
      */
      return (
          <div>
            <ul>
              {
                  listItems.map((item, index) => {
                  return (<li key = {item + index}>{item}</li>);
                })
              }
            </ul>
              {/* events must be camel cased */}

            <input
                onChange= {(event) =>
                    {
                        setUserEnteredTodo(event.target.value);
                    }}
                onKeyDown={(event) => {
                    //console.log(event); //this is how we found the code
                    if(event.code === "Enter" || event.code === "NumpadEnter")
                    {
                        if(userEnteredTodo.localeCompare("")) {
                            saveItemAndClearInput();
                        }
                    }
                }}
                value={userEnteredTodo}
            />
              <button
              onClick={(event)=>{
                  if(userEnteredTodo.localeCompare("")) {
                      saveItemAndClearInput();
                  }
              }}
              >Add</button>
          </div>
      );
    }

export default App;
