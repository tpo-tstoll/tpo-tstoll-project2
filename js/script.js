/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Global Variables

const itemsPerPage = 9;
const linkList = document.getElementsByClassName('link-list')[0];
const headline = document.getElementsByTagName('h2')[0];
const search = `
   <label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button" class="search-button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;
headline.insertAdjacentHTML('afterend', search);
const searchInput = document.getElementById('search');
const searchButton = searchInput.nextElementSibling;


//Functions

   // The showPage function inserts html into the page to display the student information

const showPage = (list, page) => {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = '';
   for (i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const li = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
               <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML('beforeend', li);
      } 
   };
   if (list.length === 0) {
      studentList.innerHTML = `<h1>No results found</h1>`;
   };
}


   /* The addPagination fucntion dynamically adds page numbers to page.
      Then the linklList listener changes the page by clicking a button
      and changes the class of the clicked button to active. */

const addPagination = (list) => {
   const numOfPages = Math.ceil(list.length/itemsPerPage);
   linkList.innerHTML = '';
   for (i = 1; i <= numOfPages; i++) {
      const button = `
      <li>
         <button type="button">${i}</button>
      </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
      document.querySelector('li button').className = 'active';
      linkList.addEventListener('click', (e) => {
         e.preventDefault();
         const boxClicked = e.target;
         if (boxClicked.tagName === 'BUTTON') {
            document.querySelector('.active').className = '';
            boxClicked.className = 'active';
            showPage(list, boxClicked.textContent);
         };
      });
   };
}

   //The execute search function utilizes a loop and conditional statement to locate students by searching their name

   const executeSearch = (input) => {
      const filterList = [];
      for (i = 0; i < data.length; i++) {
         let firstName = data[i].name.first.toUpperCase();
         let lastName = data[i].name.last.toUpperCase();
         let fullName = `${firstName} ${lastName}`;
         if (firstName.includes(input.toUpperCase()) || lastName.includes(input.toUpperCase()) || fullName.includes(input.toUpperCase())) {
            filterList.push(data[i]);
         }
      }
      showPage(filterList, 1);
      addPagination(filterList);
   }

// Search Event Listeners

   //The searchButton listener is submitted by clicking the searchbox icon and calls the executeSearch function

searchButton.addEventListener('click', (e) => {
   e.preventDefault();
   if (searchButton.className === 'search-button')
      executeSearch(searchInput.value);
});

   //The searchInput listener is submitted by typing into the searchbox and calls the executeSearch function

searchInput.addEventListener('keyup', (e) => {
   e.preventDefault();
   if (searchInput.tagName === 'INPUT')
   executeSearch(searchInput.value);
});


//calling functions

showPage(data,1);
addPagination(data);
