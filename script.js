function CD(artistName, albumName, albumTotalTime){
    this.artistName = artistName;
    this.albumName = albumName;
    this.albumTotalTime = albumTotalTime;

};
console.log("hej");
/*
fetchContent("/albums.json").then((data) => {
  for (let i = 0; i < data.length; i++) {
    let elementToInsert = contentElement.cloneNode(true);
    elementToInsert.id = i;
  }});

//magi - han forklarer det senere
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
*/
