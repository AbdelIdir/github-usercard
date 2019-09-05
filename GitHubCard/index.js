/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


console.log(`curl -u "AbdelIdir" https://api.github.com`);
let userInfo = {}
axios.get("https://lambda-github-api-server.herokuapp.com/")
.then(response => {
  const cards = document.querySelector(".cards");
  cards.appendChild(api(response.data))
})
.catch(error => {
 console.error(error)
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:


<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function api (obj) {
console.log(obj);
  const divCard = document.createElement("div");
  const img = document.createElement("img");
  const divCardInfo = document.createElement("div");
  const h3 = document.createElement("h3");
  const pa = document.createElement("p");
  const pb = document.createElement("p");
  const pc = document.createElement("p");
  const a = document.createElement("a");
  const pd = document.createElement("p");
  const pe = document.createElement("p");
  const pf = document.createElement("p");


  divCard.classList.add("card");
  divCardInfo.classList.add("card-info");
  h3.classList.add("h3");
  pa.classList.add("username");

  img.setAttribute ("src", obj["avatar_url"]);


h3.textContent = obj.name;
pa.textContent = obj.login;
pb.textContent = obj.location;

pd.textContent = obj.followers;
pe.textContent = obj.following;
pf.textContent = obj.bio;

const aURL = obj["html_url"];
 a.setAttribute("href", aURL);
 a.href = aURL;
 a.textContent = aURL;





//append a to pc here
pc.appendChild(a);

//                    appending everything to the object;


divCard.appendChild(img);
divCard.appendChild(divCardInfo);
divCardInfo.appendChild(h3);
divCardInfo.appendChild(pa);
divCardInfo.appendChild(pb);
divCardInfo.appendChild(pc);
divCardInfo.appendChild(pd);
divCardInfo.appendChild(pe);
divCardInfo.appendChild(pf);









return divCard;
}




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
