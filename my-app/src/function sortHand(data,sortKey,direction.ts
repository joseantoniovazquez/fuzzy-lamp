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
    data = _.orderBy(data, [( o ) => {  
      const val=get(o,sortKey);    
      const ret=val?val:0;    
      return ret
    }], [order]);
    console.log(data)
    // console.table(data);
    return data;
  }