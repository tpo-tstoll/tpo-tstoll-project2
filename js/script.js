/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 9;
const linkList = document.getElementsByClassName('link-list')[0];

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   let studentList = document.getElementsByClassName('student-list')[0];
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
      };
   };
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {
   const numOfPages = Math.ceil(list.length/itemsPerPage);
   linkList.innerHTML = '';
   for (i = 1; i <= numOfPages; i++) {
      const button = `
      <li>
         <button type="button">${i}</button>
      </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
      document.querySelector('button').className = 'active';
   };
}

linkList.addEventListener('click', (e) => {
   e.preventDefault();
   const boxClicked = e.target;
   if (boxClicked.tagName === 'BUTTON') {
      document.querySelector('.active').className = '';
      boxClicked.className = 'active';
      showPage(data, boxClicked.textContent);
   };
});


showPage(data,1);
addPagination(data);
