import {get, gets} from '../Utils/getElement.js';

const img = get('.user-img');
const title = get('.user-title');
const info = get('.user-info');
const btn = get('.btn');
const icons = [...gets('.icon')];
const RandomUser = 'https://randomuser.me/api/';


// fetches the users data
async function getUser(){
    const response = await fetch(RandomUser);
    const data = await response.json();
    // destructuring
    const person = await data.results[0];
   // console.log(data.results[0]);
    const {first, last} = person.name;
    const {street : {name, number},} = person.location;
    const {country, city, state} = person.location;
    const {email} = person;
    const {username} = person.login;
    const {age} = person.dob;
    const {cell} = person;
    const {large : image} = person.picture;

    return {
        name : `${first} ${last}`,
        street : `${number} ${name} ${state}`,
        location : `${state} ${city} ${country}`,
        email,
        username,
        age,
        cell,
        image
    }
}

// displays the info of the users on the screen
const displayUser = async (person) => {
    img.src = person.image;
    info.textContent = person.name;
    title.textContent = `My name is`;

    // removes the active color from all icons
    icons.forEach((icon)=>{icon.classList.remove('active')});
    // adds the active color to the default, which is name
    icons[0].classList.add('active');

    icons.forEach((icon)=>{
        const label = icon.dataset.label;

        icon.addEventListener('click', ()=>{
        //console.log(label);
        title.textContent = `My ${label} is`;
        // person[label] connects the dataset to the object property
        info.textContent = person[label]; 

        // removes the active color from all icons
        icons.forEach((icon)=>{icon.classList.remove('active')});
        // adds the active color to the current icon
        icon.classList.add('active');

    } )
})
}

// shows different users on the screen
const showUser = async () => {
    // Get user from the API
    const person = await getUser();
    // Display user from the API
    displayUser(person);
}

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);




