var Jsonix = require('jsonix').Jsonix;
var schema = require('./mappings/schema').schema;
var po = require('./mappings/PO').PO;

// First we construct a Jsonix context - a factory for unmarshaller (parser)
// and marshaller (serializer)

var context = new Jsonix.Context([schema]);
// var context = new Jsonix.Context([po]);
var unmarshaller = context.createUnmarshaller();
var marshaller = context.createMarshaller();

(async () => {
  await unmarshaller.unmarshalFile('teszt.xml', async function(unmarshalled) {
    console.log('unmarshalled:', unmarshalled);
    const marshalledXML = await marshaller.marshalString(unmarshalled);
    console.log('marshalled:', marshalledXML);
  });
})();

// var originalJS = {
//   name: {
//     localPart: 'purchaseOrder'
//   },
//   value: {
//     orderDate: {
//       year: 1999,
//       month: 10,
//       day: 20
//     },
//     cim: {
//       country: 'US',
//       name: 'Alice Smith',
//       street: '123 Maple Street',
//       city: 'Mill Valley',
//       state: 'CA',
//       zip: 90952
//     },
//     billTo: {
//       name: 'Robert Smith',
//       street: '8 Oak Avenue',
//       city: 'Old Town',
//       state: 'PA',
//       country: 'US',
//       zip: 95819
//     },
//     comment: 'Hurry, my lawn is going wild!',
//     items: {
//       item: [
//         {
//           partNum: '872-AA',
//           productName: 'Lawnmower',
//           quantity: 1,
//           usPrice: 148.95,
//           comment: 'Confirm this is electric'
//         },
//         {
//           partNum: '926-AA',
//           productName: 'Baby Monitor',
//           quantity: 1,
//           usPrice: 39.98,
//           shipDate: {
//             year: 1999,
//             month: 5,
//             day: 21
//           }
//         }
//       ]
//     }
//   }
// };

// (async () => {
//   const marshalledXML = await marshaller.marshalString(originalJS);
//   console.log('marshalled:', marshalledXML);
// })();
