/*google-ads.js*/
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})();
googletag.cmd.push(function() {
  googletag.defineSlot('/1675662/Preview_Cube', [300,250], 'ad-cube-1').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});
