const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryRef = document.querySelector('#gallery');
// console.log(galleryRef);

const urlRef = images.map(el => el.url);
const altRef = images.map(el => el.alt);
// console.log(urlRef);
// console.log(altRef);

const imageRefArr = [];
const arrToString = imageRefArr.join(' ');
// console.log(arrToString)

const imageRef = function (url, alt) { 
    for (let i = 0; i < url.length; i += 1) {
        const image = document.createElement('img');
        image.setAttribute('src', `${url[i]}`);
        image.setAttribute('alt', `${alt[i]}`);
        imageRefArr.push(image);
    }
}

imageRef(urlRef, altRef);
// console.log(imageRefArr)

const a = imageRefArr.map(el => `<li><img class="size" src="${el['src']}" alt="${el.alt}"></li>`).join(' ');
// console.log(a)
galleryRef.insertAdjacentHTML('afterbegin' , a);

// galleryRef.append(...imageRefArr) // так работает

// const image1 = document.createElement('img');
// image1.setAttribute('src', `${urlRef[0]}`);
// image1.setAttribute('alt', `${altRef[0]}`);
// image1.setAttribute('src', `${images.url}`); // не работает - выдает ошибку
// image1.setAttribute('alt', `${images.alt}`); // не работает - alt="undefined"


