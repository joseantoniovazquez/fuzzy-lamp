const myArray = [{ propertyName: 'cats' }, { propertyName: null }, { propertyName: 'dogs' }, { propertyName: 'rats' }, { propertyName: null }];

const result = _.orderBy(myArray, ({ propertyName }) => propertyName || '', ['desc']);

console.log(result);
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js"></script>