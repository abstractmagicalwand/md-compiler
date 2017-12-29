const text = {
  url: {
    valid: [
      '<http://foo.bar.baz>',
      '<http://foo.bar.baz/test?q=hello&id=22&boolean>',
      '<irc://foo.bar:2233/baz>',
    ],
    withBackslashEscapes: '<http://example.com/\[\>',
  },
  email: {
    valid: ['<foo@bar.example.com>', '<foo+special@Bar.baz-bar0.com>'],
    withBackslashEscapes: '<foo\\+@bar.example.com>',
  },
  areNotAutolinks: [
    '<>',
    '< http://foo.bar >',
    '<m:abc>',
    '<foo.bar.baz>',
    'http://example.com',
    'foo@bar.example.com',
  ],
};

const html = {
  url: {
    valid: [
      '<p><a href="http://foo.bar.baz">http://foo.bar.baz</a></p>',
      '<p><a href="http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean">http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>',
      '<p><a href="irc://foo.bar:2233/baz">irc://foo.bar:2233/baz</a></p>',
    ],
    withBackslashEscapes: '<p><a href="http://example.com/%5C%5B%5C">http://example.com/\[\</a></p>',
  },
  email: {
    valid: [
      '<p><a href="mailto:foo@bar.example.com">foo@bar.example.com</a></p>',
      '<p><a href="mailto:foo+special@Bar.baz-bar0.com">foo+special@Bar.baz-bar0.com</a></p>',
    ],
    withBackslashEscapes: '<p>&lt;foo+@bar.example.com&gt;</p>',
  },
  areNotAutolinks: [
    '<p>&lt;&gt;</p>',
    '<p>&lt; http://foo.bar &gt;</p>',
    '<p>&lt;m:abc&gt;</p>',
    '<p>&lt;foo.bar.baz&gt;</p>',
    '<p>http://example.com</p>',
    '<p>foo@bar.example.com</p>',
  ],
};

const tokens = {
  url: {},
  email: {},
};

tokens.url.withBackslashEscapes =

tokens.url.valid = [
  [
    {
      type: 'BOF',
    },
    {
      type: 'Autolink',
      kind: 'url',
      operators: ['<', '>'],
      value: 'http://foo.bar.baz',
      start: 0,
      end: 20,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Autolink',
      kind: 'url',
      operators: ['<', '>'],
      value: 'http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean',
      start: 0,
      end: 47,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Autolink',
      kind: 'url',
      operators: ['<', '>'],
      value: 'irc://foo.bar:2233/baz',
      start: 0,
      end: 24,
    },
    {
      type: 'EOF',
    },
  ],
];

tokens.url.withBackslashEscapes = [
  {
    type: 'BOF',
  },
  {
    type: 'Autolink',
    kind: 'url',
    operators: ['<', '>'],
    value: 'http://example.com/\[\\',
    start: 0,
    end: 24,
  },
  {
    type: 'EOF',
  },
];

tokens.email.valid = [
  [
    {
      type: 'BOF',
    },
    {
      type: 'Autolink',
      kind: 'email',
      operators: ['<', '>'],
      value: 'foo@bar.example.com',
      start: 0,
      end: 21,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Autolink',
      kind: 'email',
      operators: ['<', '>'],
      value: 'foo+special@Bar.baz-bar0.com',
      start: 0,
      end: 30,
    },
    {
      type: 'EOF',
    },
  ],
];

tokens.email.withBackslashEscapes = [
  {
    type: 'BOF',
  },
  {
    type: 'Autolink',
    kind: 'email',
    operators: ['<', '>'],
    value: 'foo\\+@bar.example.com',
    start: 0,
    end: 24,
  },
  {
    type: 'EOF',
  },
];

tokens.areNotAutolinks = [
  [
    {
      type: 'BOF',
    },
    {
      type: 'Chars',
      value: '&lt;&gt;',
      start: 0,
      end: 2,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Chars',
      value: '&lt; http://foo.bar &gt;',
      start: 0,
      end: 18,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Chars',
      value: '&lt;m:abc&gt;',
      start: 0,
      end: 7,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Chars',
      value: '&lt;foo.bar.baz&gt;',
      start: 0,
      end: 13,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Chars',
      value: 'http://example.com',
      start: 0,
      end: 18,
    },
    {
      type: 'EOF',
    },
  ],
  [
    {
      type: 'BOF',
    },
    {
      type: 'Chars',
      value: 'foo@bar.example.com',
      start: 0,
      end: 19,
    },
    {
      type: 'EOF',
    },
  ],
];

const ast = {
  url: {},
  email: {},
};

ast.url.valid = [
  {
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
            operators: ['<', '>'],
            label: null,
            href: {
              operators: null,
              value: 'http://foo.bar.baz',
            },
            title: null,
            body: [
              {
                type: 'Chars',
                value: 'http://foo.bar.baz',
              },
            ],
            isClosed: true,
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            operators: ['<', '>'],
            label: null,
            href: {
              operators: null,
              value: 'http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean',
            },
            title: null,
            body: [
              {
                type: 'Chars',
                value: 'http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean',
              },
            ],
            isClosed: true,
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            operators: ['<', '>'],
            label: null,
            href: {
              operators: null,
              value: 'irc://foo.bar:2233/baz',
            },
            title: null,
            body: [
              {
                type: 'Chars',
                value: 'irc://foo.bar:2233/baz',
              },
            ],
            isClosed: true,
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
];

ast.url.valid[0].body[0].parent = ast.url.valid[0];
ast.url.valid[0].body[1].parent = ast.url.valid[0];
ast.url.valid[0].body[2].parent = ast.url.valid[0];

ast.url.valid[0].body[1].body[0].parent = ast.url.valid[0].body[1];

ast.url.valid[1].body[0].parent = ast.url.valid[1];
ast.url.valid[1].body[1].parent = ast.url.valid[1];
ast.url.valid[1].body[2].parent = ast.url.valid[1];

ast.url.valid[1].body[1].body[0].parent = ast.url.valid[1].body[1];

ast.url.valid[2].body[0].parent = ast.url.valid[2];
ast.url.valid[2].body[1].parent = ast.url.valid[2];
ast.url.valid[2].body[2].parent = ast.url.valid[2];

ast.url.valid[2].body[1].body[0].parent = ast.url.valid[2].body[1];

ast.url.withBackslashEscapes = {
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
          operators: ['<', '>'],
          label: null,
          href: {
            operators: null,
            value: 'http://example.com/%5C%5B%5C',
          },
          title: null,
          body: [
            {
              type: 'Chars',
              value: 'http://example.com/\[\\',
            },
          ],
          isClosed: true,
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

ast.url.withBackslashEscapes.body[0].parent = ast.url.withBackslashEscapes;
ast.url.withBackslashEscapes.body[1].parent = ast.url.withBackslashEscapes;
ast.url.withBackslashEscapes.body[2].parent = ast.url.withBackslashEscapes;

ast.url.withBackslashEscapes.body[1].body[0].parent = ast.url.withBackslashEscapes.body[1];

ast.email.valid = [
  {
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
            operators: ['<', '>'],
            label: null,
            href: {
              operators: null,
              value: 'mailto:foo@bar.example.com',
            },
            title: null,
            body: [
              {
                type: 'Chars',
                value: 'foo@bar.example.com',
              },
            ],
            isClosed: true,
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            operators: ['<', '>'],
            label: null,
            href: {
              operators: null,
              value: 'mailto:foo+special@Bar.baz-bar0.com',
            },
            title: null,
            body: [
              {
                type: 'Chars',
                value: 'foo+special@Bar.baz-bar0.com',
              },
            ],
            isClosed: true,
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
];

ast.email.valid[0].body[0].parent = ast.email.valid[0];
ast.email.valid[0].body[1].parent = ast.email.valid[0];
ast.email.valid[0].body[2].parent = ast.email.valid[0];

ast.email.valid[0].body[1].body[0].parent = ast.email.valid[0].body[1];

ast.email.valid[1].body[0].parent = ast.email.valid[1];
ast.email.valid[1].body[1].parent = ast.email.valid[1];
ast.email.valid[1].body[2].parent = ast.email.valid[1];

ast.email.valid[1].body[1].body[0].parent = ast.email.valid[1].body[1];

ast.email.withBackslashEscapes = {
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
          value: '&lt;foo+@bar.example.com&gt;',
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

ast.email.withBackslashEscapes.body[0].parent = ast.email.withBackslashEscapes;
ast.email.withBackslashEscapes.body[1].parent = ast.email.withBackslashEscapes;
ast.email.withBackslashEscapes.body[2].parent = ast.email.withBackslashEscapes;

ast.email.withBackslashEscapes.body[1].body[0].parent = ast.email.withBackslashEscapes.body[1];

ast.areNotAutolinks = [
  {
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
            value: '&lt;&gt;',
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            value: '&lt; http://foo.bar &gt;',
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            value: '&lt;m:abc&gt;',
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            value: '&lt;foo.bar.baz&gt;',
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            value: 'http://example.com',
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
  {
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
            value: 'foo@bar.example.com',
          },
        ],
        isClosed: true,
      },
      {
        type: 'EOF',
      },
    ],
    parent: null,
  },
];

ast.areNotAutolinks[0].body[0].parent = ast.areNotAutolinks[0];
ast.areNotAutolinks[0].body[1].parent = ast.areNotAutolinks[0];
ast.areNotAutolinks[0].body[2].parent = ast.areNotAutolinks[0];

ast.areNotAutolinks[0].body[1].body[0].parent = ast.areNotAutolinks[0].body[1];

ast.areNotAutolinks[1].body[0].parent = ast.areNotAutolinks[1];
ast.areNotAutolinks[1].body[1].parent = ast.areNotAutolinks[1];
ast.areNotAutolinks[1].body[2].parent = ast.areNotAutolinks[1];

ast.areNotAutolinks[1].body[1].body[0].parent = ast.areNotAutolinks[1].body[1];

ast.areNotAutolinks[2].body[0].parent = ast.areNotAutolinks[2];
ast.areNotAutolinks[2].body[1].parent = ast.areNotAutolinks[2];
ast.areNotAutolinks[2].body[2].parent = ast.areNotAutolinks[2];

ast.areNotAutolinks[2].body[1].body[0].parent = ast.areNotAutolinks[2].body[1];

ast.areNotAutolinks[3].body[0].parent = ast.areNotAutolinks[3];
ast.areNotAutolinks[3].body[1].parent = ast.areNotAutolinks[3];
ast.areNotAutolinks[3].body[2].parent = ast.areNotAutolinks[3];

ast.areNotAutolinks[3].body[1].body[0].parent = ast.areNotAutolinks[3].body[1];

ast.areNotAutolinks[4].body[0].parent = ast.areNotAutolinks[4];
ast.areNotAutolinks[4].body[1].parent = ast.areNotAutolinks[4];
ast.areNotAutolinks[4].body[2].parent = ast.areNotAutolinks[4];

ast.areNotAutolinks[4].body[1].body[0].parent = ast.areNotAutolinks[4].body[1];

ast.areNotAutolinks[5].body[0].parent = ast.areNotAutolinks[5];
ast.areNotAutolinks[5].body[1].parent = ast.areNotAutolinks[5];
ast.areNotAutolinks[5].body[2].parent = ast.areNotAutolinks[5];

ast.areNotAutolinks[5].body[1].body[0].parent = ast.areNotAutolinks[5].body[1];

module.exports = {
  text,
  tokens,
  ast,
  html,
};