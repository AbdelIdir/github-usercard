/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

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

function gitCard(gitData) {
  //// Creating my elements :

  const divCard = document.createElement("div");
  const anImg = document.createElement("img");
  const divCardInfo = document.createElement("div");
  const h3 = document.createElement("h3");
  const pUsername = document.createElement("p");
  const pLocation = document.createElement("p");
  const pProfile = document.createElement("p");
  const aGitPage = document.createElement("a");
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");

  //// Appending my elements to the relevant parent elements :

  divCard.append(anImg);
  divCard.append(divCardInfo);
  divCardInfo.append(h3);
  divCardInfo.append(pUsername);
  divCardInfo.append(pLocation);
  divCardInfo.append(pProfile);
  divCardInfo.append(aGitPage);
  divCardInfo.append(pFollowers);
  divCardInfo.append(pFollowing);
  divCardInfo.append(pBio);

  pProfile.append(aGitPage);

  ////// giving classes to some elements :

  divCard.classList.add("card");
  divCardInfo.classList.add("card-info");
  h3.classList.add("name");
  pUsername.classList.add("username");

  ///// Feeding data to the elements :

  anImg.src = gitData.image;
  h3.textContent = gitData.name;
  pUsername.textContent = gitData.gender;
  pLocation.textContent = gitData.location.name;
  // aGitPage.textContent = gitData.avatar_url;
  pFollowers.textContent = gitData.species;
  pFollowing.textContent = gitData.status;
  // pBio.textContent = gitdata.bio;

  return divCard;
}
axios
  .get("https://rickandmortyapi.com/api/character/2")
  .then(response => {
    console.log(response);
    const cardHolder = document.querySelector(".cards");

    cardHolder.append(gitCard(response.data));
  })

  .catch(error => {
    console.log(error);
  });

const followersArray = [
  // "https://api.github.com/user/estheragbaje",
  // "https://api.github.com/user/jasynmarais",
  // "https://api.github.com/user/richanynguon",
  // "https://api.github.com/user/mikeattara",
  // "https://api.github.com/user/domeccleston"

  //   "9",
  //   "3",
  //   "4",
  //   "5",
  //  "6"
  "character"
];

// function followers(apiLinks) {
  // axios.get(`https://api.github.com/user/${apiLinks}`)
  axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(response => {
      console.log(response);
      const cardHolder = document.querySelector(".cards");
      response.data.results.forEach(info => {

            cardHolder.appendChild(gitCard(info));
      }
      )
    })
    .catch(error => {
      console.error(error);
    });
// }

// followersArray.forEach(people => followers(people));

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell


*/
