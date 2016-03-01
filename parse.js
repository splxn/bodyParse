"use strict";
var fs = require('fs');

fs.readFile('index.html', function(err, file) {

  if (err) {
    throw Error('Unable to read file');
  }

  var str = file.toString();
  var body = str.match(/<(body)(\s.+)?>(.+|\n|\s)*<\/\1>/gi).toString();
  var h1 = str.match(/<h1(\s.+)?>(.+|\n|\s)*<\/h1>/gi).toString();
  var innerH1 = h1.replace(/<\/*h1(\s.+?)?>/gi, '');

  console.log(body);
  console.log(innerH1);

});

