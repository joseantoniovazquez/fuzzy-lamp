import _  from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react'
import {dataPlayers} from './data'
import get from 'lodash/get';

function sortHand(data,sortKey,direction){
   
  let order =direction=='ascending'?'asc':'desc'
  // data=_.orderBy(data, [sortKey],[order],"nullFirst");
  // data=_.orderBy(data, [sortKey],[order]);
  // data = _.orderBy(data, ({ sortKey }) => sortKey || '', [order]);
  // const myArray = [[ propertyName: 'cats' ], [ propertyName: null ], [ propertyName: 'dogs' ], [ propertyName: 'rats' ], [ propertyName: null ]];
  const dob=true
  if (data[0][sortKey] === undefined) {
    sortKey = `stats.${sortKey}`;
  }
  console.log(sortKey);
  // sortKey='team';
  data = _.orderBy(data, [( o ) => get(o,sortKey,-1) ,'fpts'], [order,'desc']);
  return data;
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
        console.log(state.column , action.column)
     
      state.direction=(state.column === action.column)& state.direction==='ascending'?'descending' : 'ascending'

    let datas= sortHand(state.data,action.column,state.direction)
      return {
        column: action.column,
        data:datas,
        direction: state.direction,
      }
    default:
      throw new Error()
  }
}

function TableExampleSortable() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: dataPlayers,
    direction: null,
  })
  const { column, data, direction } = state

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'fpts' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'fpts' })}
          >
            FPTS
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'team' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'team' })}
          >
            TEAM
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'stats.RCTG' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'RCTG' })}
          >
            RCTG
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'stats.REC' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'REC' })}
          >
            REC
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'stats.RCLNG' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'RCLNG' })}
          >
            RCLNG
          </Table.HeaderCell>          
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((it) => (
          <Table.Row >
            <Table.Cell>{it.fpts}</Table.Cell>
            <Table.Cell>{it.team}</Table.Cell>
            <Table.Cell>{it.player}</Table.Cell>
            <Table.Cell>{it.stats['REC']}</Table.Cell>
            <Table.Cell>{it.stats['RCLNG']}</Table.Cell>    
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export  {TableExampleSortable}
