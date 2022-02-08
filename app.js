async function getGiff(search) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=V3UgH5XNo9026IjUMk18jBfPZDHK8Pr6`;
    const results = await axios.get(url);
    const giffArr = [];
    let randomGif;
    console.log(results);
    let gifArr = results.data.data
    console.log(results.data.data[0].images.original.url)
    console.log(gifArr)
    random = Math.floor(Math.random() * gifArr.length);
    randomGif = gifArr[random].images.original.url;
    const container = document.querySelector('#container');
    const gif = document.createElement('img');
    gif.setAttribute('src', randomGif);
    container.appendChild(gif);
    
}
const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    getGiff(input.value);
});

$('#remove').on('click', function() {
    $('#container').empty();
});

