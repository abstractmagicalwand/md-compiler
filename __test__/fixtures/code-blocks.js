const strip = require('../helpers/strip');

const text = {
  main: strip(`
    This is a normal paragraph:

    \`\`\`
    This is a code block.
    \`\`\`

    \`\`\`
    <div class="footer">
      &copy; 2004 Foo Corporation
    </div>
    \`\`\`
  `),
  withBackslashEscape: [
    '    \\[\\]',
    strip(`
      \`\`\` foo\\+bar
      foo
      \`\`\`
    `),
  ],
};

const html = {
  main: strip(`
    <p>This is a normal paragraph:</p>
    <pre><code>
    This is a code block.
    </code></pre>
    <pre><code>
    &lt;div class=&quot;footer&quot;&gt;
      &amp;copy; 2004 Foo Corporation
    &lt;/div&gt;
    </code></pre>
  `),
  withBackslashEscape: [
    '<pre><code>\\[\\]</code></pre>',
    '<pre><code class="language-foo+bar">foo</code></pre>',
  ],
};

const tokens = {};

tokens.main = [
  {
    type: 'Chars',
    value: 'This is a normal paragraph:',
    start: 0,
    end: 27,
  },
  {
    type: 'CodeBlock',
    value: 'This is a code block.',
    isClosed: true,
    start: 27,
    end: 59,
  },
  {
    type: 'CodeBlock',
    value: strip(`
        <div class="footer">
          &copy; 2004 Foo Corporation
        </div>
      `),
    isClosed: true,
    start: 59,
    end: 126,
  },
];

tokens.withBackslashEscape = [
  [
    {
      type: 'CodeBlock',
      value: '\\[\\]',
      language: null,
      isClosed: true,
      start: 0,
      end: 8,
    },
  ],
  [
    {
      type: 'CodeBlock',
      value: 'foo',
      language: 'foo\\+bar',
      isClosed: true,
      start: 0,
      end: 20,
    },
  ],
];

const ast = {};

ast.main = {
  type: 'Program',
  body: [
    {
      type: 'Paragraph',
      body: [
        {
          type: 'Chars',
          value: 'This is a normal paragraph:',
        },
      ],
      isClosed: true,
    },
    {
      type: 'CodeBlock',
      body: [
        {
          type: 'Chars',
          value: 'This is a code block.',
        },
      ],
      isClosed: true,
    },
    {
      type: 'CodeBlock',
      body: [
        {
          type: 'Chars',
          value: strip(`
              &lt;div class=&quot;footer&quot;&gt;
                &amp;copy; 2004 Foo Corporation
              &lt;/div&gt;
            `),
        },
      ],
      isClosed: true,
    },
  ],
  parent: null,
};

ast.withBackslashEscape = [
  {
    type: 'Program',
    body: [
      {
        type: 'CodeBlock',
        language: null,
        body: [
          {
            type: 'Chars',
            value: '\\[\\]',
          },
        ],
        isClosed: true,
      },
    ],
    parent: null,
  },
  {
    type: 'Program',
    body: [
      {
        type: 'CodeBlock',
        language: 'foo\\+bar',
        body: [
          {
            type: 'Chars',
            value: 'foo',
          },
        ],
        isClosed: true,
      },
    ],
    parent: null,
  },
];

ast.withBackslashEscape[0].body[0].parent = ast.withBackslashEscape[0];
ast.withBackslashEscape[0].body[0].body[0].parent = ast.withBackslashEscape[0].body[0];

ast.withBackslashEscape[1].body[0].parent = ast.withBackslashEscape[1];
ast.withBackslashEscape[1].body[0].body[0].parent = ast.withBackslashEscape[1].body[0];

module.exports = {
  text,
  tokens,
  ast,
  html,
};
