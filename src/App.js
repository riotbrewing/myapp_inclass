import logo from './logo.svg';
import './App.css';

function App() {
  let todoListItems =[
    "Laundry",
    "Dishes",
    "Sweep the floor",
    "Feed the cats",
    "Clean the shower",
    "Random task A",
    "Another task"
  ];
  return (
      <div>
        <ul>
          {
            todoListItems.map((item, index) => {
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
                    console.log(event.target.value)
                }
        }
        />
      </div>
  );
}

export default App;
