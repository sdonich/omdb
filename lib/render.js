const fs = require('fs');
const path = require('path');

function render(templateName, data, done) {
  fs.readFile(path.resolve('templates', templateName), 'utf-8', (error, template) => {
    if (error) return done(error);
    if (!data) return done(null, template);

    let result = template.replace(/{{(.+)}}/g, (placeholder, property) => {
      return data[property] || placeholder;
    });

    done(null, result);
  });
}

module.exports = render;