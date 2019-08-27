# hotel-hu

- Running `java -jar node_modules/jsonix/lib jsonix-schema-compiler-full.jar -d mappings -p schema schema.xsd` generates a js variable out of the given schema definition.

- Run `curl -v -F action-xmlagentxmlfile=@teszt.xml -c ./cookies.txt -o response.pdf https://www.szamlazz.hu/szamla`OR `node index.ts` to get the invoice pdf inside the folder.

- `node xml-fiddle.ts` to test the utilities of [jsonix](https://www.npmjs.com/package/jsonix), demonstrating the conversion between XML and JSON.

After having the generated schema js file, there should be `name` properties in there, and optionally `elementName` properties next to them. The idea is that you edit the value of `name` while keeping `elementName` (if it doesn't exist, add it with the initial value of `name`).  
Example:

```diff
...
{
-  name: 'vevoAzonosito',
+  name: 'buyerID',
+  elementName: 'vevoAzonosito'
},
...
```
By these modifications, we should be able to provide a js object with the appropriate properties and map them to an acceptable xml.
