var schema_Module_Factory = function() {
  var schema = {
    name: 'schema',
    defaultElementNamespaceURI: 'http://www.szamlazz.hu/xmlszamla',
    typeInfos: [
      {
        localName: 'VevoFokonyvTipus',
        typeName: 'vevoFokonyvTipus',
        propertyInfos: [
          {
            name: 'accountingDate',
            elementName: 'konyvelesDatum',
            typeInfo: 'Date'
          },
          {
            name: 'buyerID',
            elementName: 'vevoAzonosito'
          },
          {
            name: 'vevoFokonyviSzam'
          },
          {
            name: 'folyamatosTelj',
            typeInfo: 'Boolean'
          }
        ]
      },
      {
        localName: 'TransoflexTipus',
        typeName: 'transoflexTipus',
        propertyInfos: [
          {
            name: 'ID',
            elementName: {
              localPart: 'azonosito'
            }
          },
          {
            name: 'shipmentID'
          },
          {
            name: 'csomagszam',
            typeInfo: 'Int'
          },
          {
            name: 'countryCode'
          },
          {
            name: 'zip'
          },
          {
            name: 'service'
          }
        ]
      },
      {
        localName: 'PppTipus',
        typeName: 'pppTipus',
        propertyInfos: [
          {
            name: 'vonalkodPrefix'
          },
          {
            name: 'vonalkodPostfix'
          }
        ]
      },
      {
        localName: 'FuvarlevelTipus',
        typeName: 'fuvarlevelTipus',
        propertyInfos: [
          {
            name: 'uticel'
          },
          {
            name: 'futarSzolgalat'
          },
          {
            name: 'vonalkod'
          },
          {
            name: 'megjegyzes'
          },
          {
            name: 'tof',
            typeInfo: '.TransoflexTipus'
          },
          {
            name: 'ppp',
            typeInfo: '.PppTipus'
          },
          {
            name: 'sprinter',
            typeInfo: '.SprinterTipus'
          },
          {
            name: 'mpl',
            typeInfo: '.MplTipus'
          }
        ]
      },
      {
        localName: 'FejlecTipus',
        typeName: 'fejlecTipus',
        propertyInfos: [
          {
            name: 'keltDatum',
            required: true,
            typeInfo: 'Date'
          },
          {
            name: 'teljesitesDatum',
            required: true,
            typeInfo: 'Date'
          },
          {
            name: 'fizetesiHataridoDatum',
            required: true,
            typeInfo: 'Date'
          },
          {
            name: 'fizmod',
            required: true
          },
          {
            name: 'currency',
            elementName: 'penznem',
            required: true
          },
          {
            name: 'szamlaNyelve',
            required: true
          },
          {
            name: 'megjegyzes'
          },
          {
            name: 'arfolyamBank'
          },
          {
            name: 'arfolyam',
            typeInfo: 'Double'
          },
          {
            name: 'rendelesSzam'
          },
          {
            name: 'dijbekeroSzamlaszam'
          },
          {
            name: 'elolegszamla',
            typeInfo: 'Boolean'
          },
          {
            name: 'vegszamla',
            typeInfo: 'Boolean'
          },
          {
            name: 'helyesbitoszamla',
            typeInfo: 'Boolean'
          },
          {
            name: 'helyesbitettSzamlaszam'
          },
          {
            name: 'dijbekero',
            typeInfo: 'Boolean'
          },
          {
            name: 'szallitolevel',
            typeInfo: 'Boolean'
          },
          {
            name: 'logoExtra'
          },
          {
            name: 'szamlaszamElotag'
          },
          {
            name: 'fizetendoKorrekcio',
            typeInfo: 'Double'
          },
          {
            name: 'fizetve',
            typeInfo: 'Boolean'
          },
          {
            name: 'arresAfa',
            typeInfo: 'Boolean'
          }
        ]
      },
      {
        localName: 'BeallitasokTipus',
        typeName: 'beallitasokTipus',
        propertyInfos: [
          {
            name: 'user',
            elementName: 'felhasznalo'
          },
          {
            name: 'password',
            elementName: 'jelszo'
          },
          {
            name: 'invoiceAgentKey',
            elementName: 'szamlaagentkulcs'
          },
          {
            name: 'e-invoice',
            elementName: 'eszamla',
            required: true,
            typeInfo: 'Boolean'
          },
          {
            name: 'keyChainPassword',
            elementName: 'kulcstartojelszo'
          },
          {
            name: 'szamlaLetoltes',
            required: true,
            typeInfo: 'Boolean'
          },
          {
            name: 'szamlaLetoltesPld',
            typeInfo: 'Int'
          },
          {
            name: 'valaszVerzio',
            typeInfo: 'Int'
          },
          {
            name: 'aggregator'
          }
        ]
      },
      {
        localName: 'SprinterTipus',
        typeName: 'sprinterTipus',
        propertyInfos: [
          {
            name: 'azonosito'
          },
          {
            name: 'feladokod'
          },
          {
            name: 'iranykod'
          },
          {
            name: 'csomagszam',
            typeInfo: 'Int'
          },
          {
            name: 'vonalkodPostfix'
          },
          {
            name: 'szallitasiIdo'
          }
        ]
      },
      {
        localName: 'EladoTipus',
        typeName: 'eladoTipus',
        propertyInfos: [
          {
            name: 'bank'
          },
          {
            name: 'bankszamlaszam'
          },
          {
            name: 'emailReplyto'
          },
          {
            name: 'emailTargy'
          },
          {
            name: 'emailSzoveg'
          },
          {
            name: 'alairoNeve'
          }
        ]
      },
      {
        localName: 'MplTipus',
        typeName: 'mplTipus',
        propertyInfos: [
          {
            name: 'vevokod',
            required: true
          },
          {
            name: 'vonalkod',
            required: true
          },
          {
            name: 'tomeg',
            required: true
          },
          {
            name: 'kulonszolgaltatasok'
          },
          {
            name: 'erteknyilvanitas',
            typeInfo: 'Double'
          }
        ]
      },
      {
        localName: 'TetelekTipus',
        typeName: 'tetelekTipus',
        propertyInfos: [
          {
            name: 'tetel',
            required: true,
            collection: true,
            typeInfo: '.TetelTipus'
          }
        ]
      },
      {
        localName: 'VevoTipus',
        typeName: 'vevoTipus',
        propertyInfos: [
          {
            name: 'nev',
            required: true
          },
          {
            name: 'orszag'
          },
          {
            name: 'irsz',
            required: true
          },
          {
            name: 'telepules',
            required: true
          },
          {
            name: 'cim',
            required: true
          },
          {
            name: 'email'
          },
          {
            name: 'sendEmail',
            typeInfo: 'Boolean'
          },
          {
            name: 'adoalany',
            typeInfo: 'Int'
          },
          {
            name: 'adoszam'
          },
          {
            name: 'adoszamEU'
          },
          {
            name: 'postazasiNev'
          },
          {
            name: 'postazasiOrszag'
          },
          {
            name: 'postazasiIrsz'
          },
          {
            name: 'postazasiTelepules'
          },
          {
            name: 'postazasiCim'
          },
          {
            name: 'vevoFokonyv',
            typeInfo: '.VevoFokonyvTipus'
          },
          {
            name: 'azonosito'
          },
          {
            name: 'alairoNeve'
          },
          {
            name: 'telefonszam'
          },
          {
            name: 'megjegyzes'
          }
        ]
      },
      {
        localName: 'Xmlszamla',
        typeName: null,
        propertyInfos: [
          {
            name: 'settings',
            elementName: 'beallitasok',
            required: true,
            typeInfo: '.BeallitasokTipus'
          },
          {
            name: 'fejlec',
            required: true,
            typeInfo: '.FejlecTipus'
          },
          {
            name: 'elado',
            required: true,
            typeInfo: '.EladoTipus'
          },
          {
            name: 'vevo',
            required: true,
            typeInfo: '.VevoTipus'
          },
          {
            name: 'fuvarlevel',
            typeInfo: '.FuvarlevelTipus'
          },
          {
            name: 'tetelek',
            required: true,
            typeInfo: '.TetelekTipus'
          }
        ]
      },
      {
        localName: 'TetelFokonyvTipus',
        typeName: 'tetelFokonyvTipus',
        propertyInfos: [
          {
            name: 'gazdasagiEsem'
          },
          {
            name: 'gazdasagiEsemAfa'
          },
          {
            name: 'arbevetelFokonyviSzam'
          },
          {
            name: 'afaFokonyviSzam'
          },
          {
            name: 'elszDatumTol',
            typeInfo: 'Date'
          },
          {
            name: 'elszDatumIg',
            typeInfo: 'Date'
          }
        ]
      },
      {
        localName: 'TetelTipus',
        typeName: 'tetelTipus',
        propertyInfos: [
          {
            name: 'megnevezes',
            required: true
          },
          {
            name: 'azonosito'
          },
          {
            name: 'mennyiseg',
            required: true,
            typeInfo: 'Double'
          },
          {
            name: 'mennyisegiEgyseg',
            required: true
          },
          {
            name: 'nettoEgysegar',
            required: true,
            typeInfo: 'Double'
          },
          {
            name: 'afakulcs',
            required: true
          },
          {
            name: 'arresAfaAlap',
            typeInfo: 'Double'
          },
          {
            name: 'nettoErtek',
            required: true,
            typeInfo: 'Double'
          },
          {
            name: 'afaErtek',
            required: true,
            typeInfo: 'Double'
          },
          {
            name: 'bruttoErtek',
            required: true,
            typeInfo: 'Double'
          },
          {
            name: 'megjegyzes'
          },
          {
            name: 'tetelFokonyv',
            typeInfo: '.TetelFokonyvTipus'
          }
        ]
      },
      {
        type: 'enumInfo',
        localName: 'SzamlaNyelveTipus',
        values: ['hu', 'en', 'de', 'it', 'ro', 'sk', 'hr', 'fr', 'es', 'cz', 'pl']
      }
    ],
    elementInfos: [
      {
        name: 'xmlInvoice',
        elementName: 'xmlszamla',
        typeInfo: '.Xmlszamla'
      }
    ]
  };
  return {
    schema: schema
  };
};
if (typeof define === 'function' && define.amd) {
  define([], schema_Module_Factory);
} else {
  var schema_Module = schema_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.schema = schema_Module.schema;
  } else {
    var schema = schema_Module.schema;
  }
}
