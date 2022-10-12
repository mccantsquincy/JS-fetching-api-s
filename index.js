// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// setting a variable to where data will be stored on front end
const usersListHtml = document.querySelector('.user-list');
// create a function to Retreive data from back end using async await
async function main() {
   // fetching data
   const users = await fetch("https://jsonplaceholder.typicode.com/users");
   //  converting data to be legible for front end using.json()  
   const usersData = await users.json();
   console.log(usersData);
   // mapping through array to convert to data to html
   usersListHtml.innerHTML = usersData.map((user) => userHTML(user)).join("")
}

main()

function showUserPosts(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html` 
}



// putting the HTML element that will be mapped through the array into a function to keep code clean
function userHTML(user) {
    return `<div class="user" onclick="showUserPosts(${user.id})">
    <div class="user-card">
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
    </div>
</div> `;
}
