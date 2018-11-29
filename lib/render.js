const fs = require('fs');
const path = require('path');

function render(movie, temlate, done) {
  let data = temlate.replace(/{{(.+)}}/g, (str, placeholder) => {
    
    return movie[placeholder];
  });

  done(data);
}

module.exports = render;


