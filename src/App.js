import logo from './logo.svg';
import './App.css';
import React from 'react'

//const App = () => {}

function App() {
    const [listItems, setListItem] = React.useState([])

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
                  return (<li key = {item + index}>{item}</li>)
                })
              }
            </ul>
              {/* events must be camel cased */}

            <input
                onMouseOver={(event) =>
                    {
                        console.log("Moused Over")
                    }}

                onChange= {(event) =>
                    {
                        setListItem([event.target.value])
                        console.log(event.target.value)
                    }
            }
            />
          </div>
      );
    }

export default App;
