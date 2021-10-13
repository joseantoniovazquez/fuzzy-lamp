import React from "react";
import "./index.css";

import ReactTooltip from "react-tooltip";
import { Button, Popup, Dropdown, Menu,Image } from 'semantic-ui-react'
const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
]


export default function App() {
  return (
    <div className="App">
      <div>
        <Dropdown text='Dropdown' options={options} simple item />
      </div>

      <Popup content='Add users to your feed' trigger={<Button icon='add' />} />
      <button data-tip data-for="registerTip">
        Register
      </button>

      <ReactTooltip id="registerTip" place="top" effect="solid">
        Tooltip for the register button
      </ReactTooltip>
      <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o'  />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Popup content='Add users to your feed' trigger={<Dropdown.Item text='Rename' description='ctrl + r' />}/>
    </Dropdown.Menu>
    
      
  </Dropdown>

  <Popup
        content='{opt.text}'
        key='{opt.key}'
        header='{opt.value}'
        trigger={<Button content='buttonx' />}
      />
      

<div>
  separador
</div>
    <>
    {options.map((user) => (
      <Popup
        content={user.text}
        key={user.key}
        header={user.value}
        trigger={<Button content={user.value}/>}
      />
    ))}
  </>
    </div>
  );
}
