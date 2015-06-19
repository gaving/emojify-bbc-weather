chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  runner();
});

var runner = function runner() {
  var map = ['grin', 'expressionless', 'smile', 'expressionless',
  'expressionless', 'expressionless', 'expressionless', 'confounded',
  'disappointed', 'weary', 'angry', 'cry', 'astonished', 'sob', 'sob'];

  var contents = document.getElementsByClassName('content');

  while (contents[0]) {
    var content = contents[0],
    img = content.getElementsByTagName('img')[0];
    if (img) {
      var file = img.src.substr(img.src.lastIndexOf('/')+1),
      idx = parseInt(file.replace(/.png/, '')) - 1,
      node = document.createElement('em'),
      code = document.createTextNode([':', map[idx], ':'].join(''));

      node.appendChild(code);
      content.parentNode.insertBefore(node, content);
    }
    content.parentNode.removeChild(content);
  }

  emojify.setConfig({
    mode: 'data-uri'
  });

  emojify.run();

  return runner;
};
