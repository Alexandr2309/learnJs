//5.1
for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;
  // let title = li.innerHTMl || li.textContent;
}
//5.2
{/* <html>

<body>
  <script>
    alert(document.body.lastChild.nodeType); // 1 - document.body.lastChild.nodeType = тегу script, а он элемент => 1
  </script>
</body>

</html> */}
//5.3
{/* <script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // BODY
</script> */}
//5.4
// document – объект класса HTMLDocument.