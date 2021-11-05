import React from "react";
import "./index.css";

import ReactTooltip from "react-tooltip";
import { Button, Popup, Dropdown, Menu, Image, Table } from 'semantic-ui-react'
import {Example} from "./example"
import { render } from "@testing-library/react";
import { TableExampleSortable } from "./table";


export default function App() {

  render()
  
  return (
    <div className="App">      
    <Example/>
    <TableExampleSortable/>
    </div>
  );
}
