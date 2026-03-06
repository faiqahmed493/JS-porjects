
const cardtitle = document.getElementsByClassName('card-title')[0];
const img = document.getElementsByTagName('img')
const biosec = document.getElementById('bios');

const requesturl = "https://api.github.com/users/faiqahmed493";

const xhr = new XMLHttpRequest();

xhr.open('GET',requesturl);

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
        const data = JSON.parse(this.responseText);
        console.log(data)
        const imageurl = data.avatar_url;
        const bios = data.bio;
        const name = data.name;
        console.log(bios)

        cardtitle.innerHTML = name;
        biosec.innerHTML = bios;
        img[0].src = imageurl;

    }
}
xhr.send();
console.log('hello')