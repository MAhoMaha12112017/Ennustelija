// const {MongoClient} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/Otteludata', (err, db) => {
//   if (err) {
//     return console.log('Tietokantaan mongodb ei yhteyttä');
//   }
//   console.log('Yhdistetty mongodb serveriin')
//
//   db.collection('Ottelut').insertOne({
//     hometeam: 'ARS',
//     awayteam: 'BOU',
//     homegoals: 1,
//     awaygoals: 1,
//     homeposession: 50,
//     awayposession: 50,
//     homeshotsont: 1,
//     awayshotsont: 2,
//     homeshots: 3,
//     awayshots: 4
//   }, (err, result) => {
//     if (err) {
//       return console.log('Tallennus ei onnistunut');
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   })
//
//   db.close();
// });
