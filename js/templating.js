function loadArticle() {
  $.get('article-template.mst', function(template) {
    var rendered = Mustache.render(template, view);
    $('#article-wrapper').html(rendered);
  });
}