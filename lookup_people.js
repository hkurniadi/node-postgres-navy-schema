const query = require('./lib/queries');

let lookUpName = process.argv.slice(2)[0];

query.getPersonByName((queryResults) => {
  console.log('Searching ...');
  let numbering = 1;
  queryResults.forEach((result) => {
    console.log('Found ' + queryResults.length + ' person(s) by the name ' + "'" + lookUpName + "'");
    console.log('- ' + numbering + ': ' + result.first_name + ' ' + result.last_name + ', born ' + "'" + result.birthdate.getUTCFullYear() + '-' + result.birthdate.getUTCMonth() + '-' + result.birthdate.getUTCDate() + "'" );
    numbering += 1;
  });
},lookUpName);
