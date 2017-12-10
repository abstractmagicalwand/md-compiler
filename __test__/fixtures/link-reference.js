const strip = require('../helpers/strip');

let text = {
  linkDefinitions: strip(`
      This is [an example][double quotation mark] reference-style link.
      This is [an example][single quotation mark] reference-style link.
      This is [an example][angle brackets and parenthesis] reference-style link.
      [double quotation mark]: http://example.com/  "Optional Title Here"
      [single quotation mark]: http://example.com/  'Optional Title Here'
      [angle brackets and parenthesis]: <http://example.com/>  (Optional Title Here)
    `),
  titleOnNextLine: strip(`
      This is [an example][id] reference-style link.
      [id]: http://example.com/longish/path/to/resource/here
        "Optional Title Here"
    `),
  notCaseSensitive: strip(`
      This is [an example][ID] reference-style link.
      This is [an example][id] reference-style link.
      [id]: http://example.com/  "Optional Title Here"
    `),
  implicitLinkName: strip(`
      I get 10 times more traffic from [Google][] than from
      [Yahoo][] or [MSN][].

        [google]: http://google.com/        "Google"
        [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
        [msn]:    http://search.msn.com/    "MSN Search"
    `),
  idents: strip(`
      This is [an example][id] reference-style link.
      [Open][Google].
        [id]: http://example.com/ "Optional Title Here"
          [Google]: http://google.com/ "Optional Title Here"
    `),
  invalid: '[Google][]',
};

const html = {
  linkDefinitions: '<p>This is <a href="http://example.com/" title="Optional Title Here">an example</a> reference-style link. This is <a href="http://example.com/" title="Optional Title Here">an example</a> reference-style link. This is <a href="http://example.com/" title="Optional Title Here">an example</a> reference-style link.</p>',
  titleOnNextLine: '<p>This is <a href="http://example.com/longish/path/to/resource/here" title="Optional Title Here">an example</a> reference-style link.</p>',
  notCaseSensitive: '<p>This is <a href="http://example.com/" title="Optional Title Here">an example</a> reference-style link. This is <a href="http://example.com/" title="Optional Title Here">an example</a> reference-style link.</p>',
  implicitLinkName: '<p>I get 10 times more traffic from <a href="http://google.com/" title="Google">Google</a> than from <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>',
  idents: '<p>This is <a href="http://example.com/" title="Optional Title Here">an example</a> reference-style link. [Open][Google].     [Google]: http://google.com/ "Optional Title Here"</p>',
  invalid: '<p>[Google][]</p>',
};


const tokens = {};

tokens.linkDefinitions = [
  {
    type: 'BOF',
  },
  {
    type: 'Chars',
    value: 'This is ',
    start: 0,
    end: 8,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 8,
    end: 9,
  },
  {
    type: 'Chars',
    value: 'an example',
    start: 9,
    end: 19,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 19,
    end: 20,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 20,
    end: 21,
  },
  {
    type: 'Chars',
    value: 'double quotation mark',
    start: 21,
    end: 42,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 42,
    end: 43,
  },
  {
    type: 'Chars',
    value: ' reference-style link. This is ',
    start: 43,
    end: 74,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 74,
    end: 75,
  },
  {
    type: 'Chars',
    value: 'an example',
    start: 75,
    end: 85,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 85,
    end: 86,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 86,
    end: 87,
  },
  {
    type: 'Chars',
    value: 'single quotation mark',
    start: 87,
    end: 108,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 108,
    end: 109,
  },
  {
    type: 'Chars',
    value: ' reference-style link. This is ',
    start: 109,
    end: 140,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 140,
    end: 141,
  },
  {
    type: 'Chars',
    value: 'an example',
    start: 141,
    end: 151,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 151,
    end: 152,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 152,
    end: 153,
  },
  {
    type: 'Chars',
    value: 'angle brackets and parenthesis',
    start: 153,
    end: 183,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 183,
    end: 184,
  },
  {
    type: 'Chars',
    value: ' reference-style link.',
    start: 184,
    end: 206,
  },
  {
    type: 'EOF',
  },
];

tokens.titleOnNextLine = [
  {
    type: 'BOF',
  },
  {
    type: 'Chars',
    value: 'This is ',
    start: 0,
    end: 8,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 8,
    end: 9,
  },
  {
    type: 'Chars',
    value: 'an example',
    start: 9,
    end: 19,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 19,
    end: 20,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 20,
    end: 21,
  },
  {
    type: 'Chars',
    value: 'id',
    start: 21,
    end: 23,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 23,
    end: 24,
  },
  {
    type: 'Chars',
    value: ' reference-style link.',
    start: 24,
    end: 46,
  },
  {
    type: 'EOF',
  },
];

tokens.notCaseSensitive = [
  {
    type: 'BOF',
  },
  {
    type: 'Chars',
    value: 'This is ',
    start: 0,
    end: 8,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 8,
    end: 9,
  },
  {
    type: 'Chars',
    value: 'an example',
    start: 9,
    end: 19,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 19,
    end: 20,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 20,
    end: 21,
  },
  {
    type: 'Chars',
    value: 'ID',
    start: 21,
    end: 23,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 23,
    end: 24,
  },
  {
    type: 'Chars',
    value: ' reference-style link. This is ',
    start: 24,
    end: 55,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 55,
    end: 56,
  },
  {
    type: 'Chars',
    value: 'an example',
    start: 56,
    end: 66,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 66,
    end: 67,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 67,
    end: 68,
  },
  {
    type: 'Chars',
    value: 'id',
    start: 68,
    end: 70,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 70,
    end: 71,
  },
  {
    type: 'Chars',
    value: ' reference-style link.',
    start: 71,
    end: 93,
  },
  {
    type: 'EOF',
  },
];

tokens.implicitLinkName = [
  {
    type: 'BOF',
  },
  {
    type: 'Chars',
    value: 'I get 10 times more traffic from ',
    start: 0,
    end: 33,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 33,
    end: 34,
  },
  {
    type: 'Chars',
    value: 'Google',
    start: 34,
    end: 40,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 40,
    end: 41,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 41,
    end: 42,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 42,
    end: 43,
  },
  {
    type: 'Chars',
    value: ' than from ',
    start: 43,
    end: 54,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 54,
    end: 55,
  },
  {
    type: 'Chars',
    value: 'Yahoo',
    start: 55,
    end: 60,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 60,
    end: 61,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 61,
    end: 62,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 62,
    end: 63,
  },
  {
    type: 'Chars',
    value: ' or ',
    start: 63,
    end: 67,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 67,
    end: 68,
  },
  {
    type: 'Chars',
    value: 'MSN',
    start: 68,
    end: 71,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 71,
    end: 72,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 72,
    end: 73,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 73,
    end: 74,
  },
  {
    type: 'Chars',
    value: '.',
    start: 74,
    end: 75,
  },
  {
    type: 'EOF',
  },
];

tokens.idents = [
  {
    type: 'BOF',
  },
  {
    type: 'Chars',
    value: 'This is ',
    start: 0,
    end: 8,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 8,
    end: 9,
  },
  {
    type: 'Chars',
    value: 'an example',
    start: 9,
    end: 19,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 19,
    end: 20,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 20,
    end: 21,
  },
  {
    type: 'Chars',
    value: 'id',
    start: 21,
    end: 23,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 23,
    end: 24,
  },
  {
    type: 'Chars',
    value: ' reference-style link. ',
    start: 24,
    end: 47,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 47,
    end: 48,
  },
  {
    type: 'Chars',
    value: 'Open',
    start: 48,
    end: 52,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 52,
    end: 53,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 53,
    end: 54,
  },
  {
    type: 'Chars',
    value: 'Google',
    start: 54,
    end: 60,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 60,
    end: 61,
  },
  {
    type: 'Chars',
    value: '.     ',
    start: 61,
    end: 67,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 67,
    end: 68,
  },
  {
    type: 'Chars',
    value: 'Google',
    start: 68,
    end: 74,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 74,
    end: 75,
  },
  {
    type: 'Chars',
    value: ': http://google.com/ "Optional Title Here"',
    start: 75,
    end: 117,
  },
  {
    type: 'EOF',
  },
];

tokens.invalid = [
  {
    type: 'BOF',
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 0,
    end: 1,
  },
  {
    type: 'Chars',
    value: 'Google',
    start: 1,
    end: 7,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 7,
    end: 8,
  },
  {
    type: 'LeftSquareBracket',
    value: '[',
    start: 8,
    end: 9,
  },
  {
    type: 'RightSquareBracket',
    value: ']',
    start: 9,
    end: 10,
  },
  {
    type: 'EOF',
  },
];

const variables = {};

variables.linkDefinitions = {
  'double quotation mark': 'http://example.com/  "Optional Title Here"',
  'single quotation mark': 'http://example.com/  \'Optional Title Here\'',
  'angle brackets and parenthesis': '<http://example.com/>  (Optional Title Here)',
};

variables.titleOnNextLine = {
  id: 'http://example.com/longish/path/to/resource/here\n  "Optional Title Here"',
};

variables.notCaseSensitive = {
  id: 'http://example.com/  "Optional Title Here"',
};

variables.implicitLinkName = {
  google: 'http://google.com/        "Google"',
  yahoo: ' http://search.yahoo.com/  "Yahoo Search"',
  msn: '   http://search.msn.com/    "MSN Search"',
};

variables.idents = {
  id: 'http://example.com/ "Optional Title Here"',
};

const ast = {};

ast.linkDefinitions = {
  type: 'Program',
  body: [
    {
      type: 'BOF',
    },
    {
      type: 'Paragraph',
      body: [
        {
          type: 'Chars',
          value: 'This is ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'double quotation mark',
          href: {
            operators: null,
            value: 'http://example.com/',
          },
          title: {
            operators: ['"'],
            value: 'Optional Title Here',
          },
          body: [
            {
              type: 'Chars',
              value: 'an example',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' reference-style link. This is ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'single quotation mark',
          href: {
            operators: null,
            value: 'http://example.com/',
          },
          title: {
            operators: ['\''],
            value: 'Optional Title Here',
          },
          body: [
            {
              type: 'Chars',
              value: 'an example',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' reference-style link. This is ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'angle brackets and parenthesis',
          href: {
            operators: ['<', '>'],
            value: 'http://example.com/',
          },
          title: {
            operators: ['(', ')'],
            value: 'Optional Title Here',
          },
          body: [
            {
              type: 'Chars',
              value: 'an example',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' reference-style link.',
        },
      ],
      isClosed: true,
    },
    {
      type: 'EOF',
    },
  ],
  parent: null,
};

ast.linkDefinitions.body[0].parent = ast.linkDefinitions;
ast.linkDefinitions.body[1].parent = ast.linkDefinitions;
ast.linkDefinitions.body[2].parent = ast.linkDefinitions;

ast.linkDefinitions.body[1].body[0].parent = ast.linkDefinitions.body[1];
ast.linkDefinitions.body[1].body[1].parent = ast.linkDefinitions.body[1];
ast.linkDefinitions.body[1].body[2].parent = ast.linkDefinitions.body[1];
ast.linkDefinitions.body[1].body[3].parent = ast.linkDefinitions.body[1];
ast.linkDefinitions.body[1].body[4].parent = ast.linkDefinitions.body[1];
ast.linkDefinitions.body[1].body[5].parent = ast.linkDefinitions.body[1];
ast.linkDefinitions.body[1].body[6].parent = ast.linkDefinitions.body[1];

ast.linkDefinitions.body[1].body[1].body[0].parent = ast.linkDefinitions.body[1].body[1];
ast.linkDefinitions.body[1].body[3].body[0].parent = ast.linkDefinitions.body[1].body[3];
ast.linkDefinitions.body[1].body[5].body[0].parent = ast.linkDefinitions.body[1].body[5];

ast.titleOnNextLine = {
  type: 'Program',
  body: [
    {
      type: 'BOF',
    },
    {
      type: 'Paragraph',
      body: [
        {
          type: 'Chars',
          value: 'This is ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'id',
          href: {
            operators: null,
            value: 'http://example.com/longish/path/to/resource/here',
          },
          title: {
            operators: ['"'],
            value: 'Optional Title Here',
          },
          body: [
            {
              type: 'Chars',
              value: 'an example',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' reference-style link.',
        },
      ],
      isClosed: true,
    },
    {
      type: 'EOF',
    },
  ],
  parent: null,
};

ast.titleOnNextLine.body[0].parent = ast.titleOnNextLine;
ast.titleOnNextLine.body[1].parent = ast.titleOnNextLine;
ast.titleOnNextLine.body[2].parent = ast.titleOnNextLine;

ast.titleOnNextLine.body[1].body[0].parent = ast.titleOnNextLine.body[1];
ast.titleOnNextLine.body[1].body[1].parent = ast.titleOnNextLine.body[1];
ast.titleOnNextLine.body[1].body[2].parent = ast.titleOnNextLine.body[1];

ast.titleOnNextLine.body[1].body[1].body[0].parent = ast.titleOnNextLine.body[1].body[1];

ast.notCaseSensitive = {
  type: 'Program',
  body: [
    {
      type: 'BOF',
    },
    {
      type: 'Paragraph',
      body: [
        {
          type: 'Chars',
          value: 'This is ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'id',
          href: {
            operators: null,
            value: 'http://example.com/',
          },
          title: {
            operators: ['"'],
            value: 'Optional Title Here',
          },
          body: [
            {
              type: 'Chars',
              value: 'an example',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' reference-style link. This is ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'id',
          href: {
            operators: null,
            value: 'http://example.com/',
          },
          title: {
            operators: ['"'],
            value: 'Optional Title Here',
          },
          body: [
            {
              type: 'Chars',
              value: 'an example',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' reference-style link.',
        },
      ],
      isClosed: true,
    },
    {
      type: 'EOF',
    },
  ],
  parent: null,
};

ast.notCaseSensitive.body[0].parent = ast.notCaseSensitive;
ast.notCaseSensitive.body[1].parent = ast.notCaseSensitive;
ast.notCaseSensitive.body[2].parent = ast.notCaseSensitive;

ast.notCaseSensitive.body[1].body[0].parent = ast.notCaseSensitive.body[1];
ast.notCaseSensitive.body[1].body[1].parent = ast.notCaseSensitive.body[1];
ast.notCaseSensitive.body[1].body[2].parent = ast.notCaseSensitive.body[1];
ast.notCaseSensitive.body[1].body[3].parent = ast.notCaseSensitive.body[1];
ast.notCaseSensitive.body[1].body[4].parent = ast.notCaseSensitive.body[1];

ast.notCaseSensitive.body[1].body[1].body[0].parent = ast.notCaseSensitive.body[1].body[1];
ast.notCaseSensitive.body[1].body[3].body[0].parent = ast.notCaseSensitive.body[1].body[3];

ast.implicitLinkName = {
  type: 'Program',
  body: [
    {
      type: 'BOF',
    },
    {
      type: 'Paragraph',
      body: [
        {
          type: 'Chars',
          value: 'I get 10 times more traffic from ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'google',
          href: {
            operators: null,
            value: 'http://google.com/',
          },
          title: {
            operators: ['"'],
            value: 'Google',
          },
          body: [
            {
              type: 'Chars',
              value: 'Google',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' than from ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'yahoo',
          href: {
            operators: null,
            value: 'http://search.yahoo.com/',
          },
          title: {
            operators: ['"'],
            value: 'Yahoo Search',
          },
          body: [
            {
              type: 'Chars',
              value: 'Yahoo',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' or ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'msn',
          href: {
            operators: null,
            value: 'http://search.msn.com/',
          },
          title: {
            operators: ['"'],
            value: 'MSN Search',
          },
          body: [
            {
              type: 'Chars',
              value: 'MSN',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: '.',
        },
      ],
      isClosed: true,
    },
    {
      type: 'EOF',
    },
  ],
  parent: null,
};

ast.implicitLinkName.body[0].parent = ast.implicitLinkName;
ast.implicitLinkName.body[1].parent = ast.implicitLinkName;
ast.implicitLinkName.body[2].parent = ast.implicitLinkName;

ast.implicitLinkName.body[1].body[0].parent = ast.implicitLinkName.body[1];
ast.implicitLinkName.body[1].body[1].parent = ast.implicitLinkName.body[1];
ast.implicitLinkName.body[1].body[2].parent = ast.implicitLinkName.body[1];
ast.implicitLinkName.body[1].body[3].parent = ast.implicitLinkName.body[1];
ast.implicitLinkName.body[1].body[4].parent = ast.implicitLinkName.body[1];
ast.implicitLinkName.body[1].body[5].parent = ast.implicitLinkName.body[1];
ast.implicitLinkName.body[1].body[6].parent = ast.implicitLinkName.body[1];

ast.implicitLinkName.body[1].body[1].body[0].parent = ast.implicitLinkName.body[1].body[1];
ast.implicitLinkName.body[1].body[3].body[0].parent = ast.implicitLinkName.body[1].body[3];
ast.implicitLinkName.body[1].body[5].body[0].parent = ast.implicitLinkName.body[1].body[5];

ast.idents = {
  type: 'Program',
  body: [
    {
      type: 'BOF',
    },
    {
      type: 'Paragraph',
      body: [
        {
          type: 'Chars',
          value: 'This is ',
        },
        {
          type: 'Link',
          operators: ['[', ']', '[', ']'],
          label: 'id',
          href: {
            operators: null,
            value: 'http://example.com/',
          },
          title: {
            operators: ['"'],
            value: 'Optional Title Here',
          },
          body: [
            {
              type: 'Chars',
              value: 'an example',
            },
          ],
          isClosed: true,
        },
        {
          type: 'Chars',
          value: ' reference-style link. ',
        },
        {
          type: 'Link',
          operators: ['['],
          label: null,
          href: null,
          title: null,
          body: [
            {
              type: 'Chars',
              value: 'Open]',
            },
            {
              type: 'Link',
              operators: ['['],
              label: null,
              href: null,
              title: null,
              body: [
                {
                  type: 'Chars',
                  value: 'Google].     ',
                },
                {
                  type: 'Link',
                  operators: ['['],
                  label: null,
                  href: null,
                  title: null,
                  body: [
                    {
                      type: 'Chars',
                      value: 'Google]: http://google.com/ "Optional Title Here"',
                    },
                  ],
                  isClosed: false,
                },
              ],
              isClosed: false,
            },
          ],
          isClosed: false,
        },
      ],
      isClosed: true,
    },
    {
      type: 'EOF',
    },
  ],
  parent: null,
};

ast.idents.body[0].parent = ast.idents;
ast.idents.body[1].parent = ast.idents;
ast.idents.body[2].parent = ast.idents;


ast.idents.body[1].body[0].parent = ast.idents.body[1];
ast.idents.body[1].body[1].parent = ast.idents.body[1];
ast.idents.body[1].body[2].parent = ast.idents.body[1];
ast.idents.body[1].body[3].parent = ast.idents.body[1];

ast.idents.body[1].body[1].body[0].parent = ast.idents.body[1].body[1];

ast.idents.body[1].body[3].body[0].parent = ast.idents.body[1].body[3];
ast.idents.body[1].body[3].body[1].parent = ast.idents.body[1].body[3];

ast.idents.body[1].body[3].body[1].body[0].parent = ast.idents.body[1].body[3].body[1];
ast.idents.body[1].body[3].body[1].body[1].parent = ast.idents.body[1].body[3].body[1];

ast.idents.body[1].body[3].body[1].body[1].body[0].parent = ast.idents.body[1].body[3].body[1].body[1];

ast.invalid = {
  type: 'Program',
  body: [
    {
      type: 'BOF',
    },
    {
      type: 'Paragraph',
      body: [
        {
          type: 'Link',
          operators: ['['],
          label: null,
          href: null,
          title: null,
          body: [
            {
              type: 'Chars',
              value: 'Google]',
            },
            {
              type: 'Link',
              operators: ['['],
              label: null,
              href: null,
              title: null,
              body: [
                {
                  type: 'Chars',
                  value: ']',
                },
              ],
              isClosed: false,
            },
          ],
          isClosed: false,
        },
      ],
      isClosed: true,
    },
    {
      type: 'EOF',
    },
  ],
  parent: null,
};

ast.invalid.body[0].parent = ast.invalid;
ast.invalid.body[1].parent = ast.invalid;
ast.invalid.body[2].parent = ast.invalid;

ast.invalid.body[1].body[0].parent = ast.invalid.body[1];

ast.invalid.body[1].body[0].body[0].parent = ast.invalid.body[1].body[0];
ast.invalid.body[1].body[0].body[1].parent = ast.invalid.body[1].body[0];

ast.invalid.body[1].body[0].body[1].body[0].parent = ast.invalid.body[1].body[0].body[1];

module.exports = {
  text,
  tokens,
  variables,
  ast,
  html,
};
