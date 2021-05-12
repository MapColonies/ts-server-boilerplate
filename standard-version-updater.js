const yaml = require('js-yaml');

module.exports.readVersion = function (contents) {
  let doc;
  try {
    doc = yaml.load(contents, 'utf8');
  } catch (e) {
    console.error(e);
    throw e;
  }
  return doc.info.version;
}

module.exports.writeVersion = function (contents, version) {
  const doc = yaml.load(contents, 'utf8');
  doc.info.version = version;
  return yaml.dump(doc, { indent: 2 });
}
