const GoogleSearch = () => {
  return (
    <script>
    (function() {
      var cx = '018290986897611681181:oiwlngnimyy';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
    </script>
    <gcse:search></gcse:search>
    )
}

export default GoogleSearch;