const blockquote = require('./blockquote');
const emphasis = require('./emphasis');
const paragraph = require('./paragraph');
const unorderList = require('./unorder-list');
const orderList = require('./order-list');
const traverser = require('./traverser');
const setextHeader = require('./setext-header');
const atxHeader = require('./atx-header');
const HorizontalRule = require('./horizontal-rule');
const codeBlock = require('./code-blocks');
const code = require('./code');
const linkInline = require('./link-inline');
const linkReference = require('./link-reference');
const image = require('./image');

module.exports = {
  text: {
    blockquote: blockquote.text,
    emphasis: emphasis.text,
    paragraph: paragraph.text,
    unorderList: unorderList.text,
    orderList: orderList.text,
    setextHeader: setextHeader.text,
    atxHeader: atxHeader.text,
    HorizontalRule: HorizontalRule.text,
    codeBlock: codeBlock.text,
    code: code.text,
    linkInline: linkInline.text,
    linkReference: linkReference.text,
    image: image.text,
  },
  tokens: {
    blockquote: blockquote.tokens,
    emphasis: emphasis.tokens,
    paragraph: paragraph.tokens,
    unorderList: unorderList.tokens,
    orderList: orderList.tokens,
    setextHeader: setextHeader.tokens,
    atxHeader: atxHeader.tokens,
    HorizontalRule: HorizontalRule.tokens,
    codeBlock: codeBlock.tokens,
    code: code.tokens,
    linkInline: linkInline.tokens,
    linkReference: linkReference.tokens,
    image: image.tokens,
  },
  variables: {
    linkReference: linkReference.variables,
    image: image.variables,
  },
  ast: {
    blockquote: blockquote.ast,
    emphasis: emphasis.ast,
    paragraph: paragraph.ast,
    unorderList: unorderList.ast,
    orderList: orderList.ast,
    setextHeader: setextHeader.ast,
    atxHeader: atxHeader.ast,
    HorizontalRule: HorizontalRule.ast,
    codeBlock: codeBlock.ast,
    code: code.ast,
    linkInline: linkInline.ast,
    linkReference: linkReference.ast,
    image: image.ast,
  },
  html: {
    blockquote: blockquote.html,
    emphasis: emphasis.html,
    paragraph: paragraph.html,
    unorderList: unorderList.html,
    orderList: orderList.html,
    setextHeader: setextHeader.html,
    atxHeader: atxHeader.html,
    HorizontalRule: HorizontalRule.html,
    codeBlock: codeBlock.html,
    code: code.html,
    linkInline: linkInline.html,
    linkReference: linkReference.html,
    image: image.html,
  },
  traverser,
};
