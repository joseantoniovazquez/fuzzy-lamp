import React, { Component } from "react";
import { Button, Popup, Dropdown, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'


const options = [
    { key: 'angular', text:"Angular", value: 'angular', },
    { key: 'css', text: 'CSS', value: 'css'  },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
]
const createPopup=function (choices, tooltip) {      
    return choices.map(c =>{ 
        if(tooltip & c.text.length>10){
        c.text=<Popup content={c.text} key={c.key} trigger={<div>{c.text}</div>} position='right center'/>
        }
        return c
    });
    }
    
class Example extends Component {

    handleDropDownSelect = (event, data) => {
        console.log(data.value);
           
    };


    render() {


        return (
            <div >

                <Dropdown
                    selectedLabel={"jlkjl"}
                    defaultValue={"asdfasdfasd"}
                    className="ui primary"
                    selection
                    fluid
                    options={createPopup(options,true)}
                    onChange={this.handleDropDownSelect}                    
                />               
            </div>

        );
    }
}


const mapStateToProps = state => {
    console.log(state)    
    return {...state};
  };
  
  // these methods use lodash's kebabCase function to convert team names into a URL-ready format
  // e.g. "Los Angeles Rams" > "los-angeles-rams"
  const mapDispatchToProps = dispatch => ({
    handleTeamClick: (id, teamName = '') => dispatch(
      {
        type: 'TEAM_VIEW', query: { teamName: teamName }
      },
    )
  });

export { Example }