import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TabHeader from './components/TabHeader.jsx';
import {useState} from 'react';

function App() {
  const [tabs, setTabs] = useState([
    {
      selected: true,
      title: "tab1",
      content: "content from tab0"
    },
    {
      selected: false,
      title: "tab2",
      content: "content from tab1"
    },
    {
      selected: false,
      title: "tab1",
      content: "content from tab2"
    }
  ])

  const handleClick = (index) => {
    console.log(`you clicked tab # ${index}`);
    // set Tabs
    // include all the tabs before the index of the clicked one, set to false
    // include tab we clicked on set to true
    tabs.map((tab,i) => {
      let t = tab;
      if(index === i){
        tab.selected = true;
      }
      else{
        t.selected = false;
      }

      setTabs([...tabs.slice(0,i),
        t,
      ].concat(tabs.slice(i+1)))
    })
  }

  return (
    <div className="App">
      {/* <TabHeader selected={true} index={0} title="Tab name 1"/>
      <TabHeader selected={false} index={1} title="Tab name 1"/>
      <TabHeader selected={false} index={2} title="Tab name 3"/> */}
      {
        tabs.map((tab, i) => {
          return <TabHeader selected={tab.selected} index={i} title={tab.title} handleClick={handleClick} />
        })
      }

      {
        tabs.map((tab, i) => {
          if(tab.selected){
            return tab.selected ? <p> {tab.title} </p> : ""
          }
        })
      }
    </div>
  );
}

export default App;
