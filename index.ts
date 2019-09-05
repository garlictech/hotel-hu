const fs = require('fs');
const stream = fs.createWriteStream('response.pdf', { defaultEncoding: 'utf16le' });
const request = require('request');
var Jsonix = require('jsonix').Jsonix;
var schema = require('./mappings/schema_edited').schema;

var context = new Jsonix.Context([schema]);
var unmarshaller = context.createUnmarshaller();
var marshaller = context.createMarshaller();

const fileName = 'request.xml';

(async () => {
  await unmarshaller.unmarshalFile('./teszt.xml', async function(unmarshalled) {
    // console.log('unmarshalled:', unmarshalled);
    const marshalledXML = await marshaller.marshalString(unmarshalled);
    // console.log('marshalled:', marshalledXML);
    fs.writeFileSync(fileName, marshalledXML);

    makeRequest(fileName);
  });
})();

const makeRequest = xmlName => {
  const formData = {
    'action-xmlagentxmlfile': fs.createReadStream(`${__dirname}/${xmlName}`)
  };

  request({ url: 'https://www.szamlazz.hu/szamla/', formData: formData })
    .once('error', function(err) {
      console.log('Request Error: ' + err);
    })
    .pipe(stream);
};
