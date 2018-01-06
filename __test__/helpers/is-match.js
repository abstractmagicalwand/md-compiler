const isMatched = (object, sources, test) => {
  sources = sources || [ {} ];

  sources.forEach(source => {
    Object.keys(object).forEach(key => {
      if (typeof object[key] !== 'object' || object[key] === null) {
        test(object[key], source[key]);
      }
    });
  });

  if (object.body) {
    object.body.forEach((object, i) => isMatched(
      object,
      sources.map(source => source.body && source.body[i] || {}),
      test
    ));
  }
};

module.exports = isMatched;
