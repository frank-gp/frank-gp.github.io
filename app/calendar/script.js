const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
  let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(); //6 = saturday
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); //30
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); //0
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //31
  console.log(lastDayofMonth);
  let liTag = "";

  for (let index = firstDateofMonth + 21; index > 0; index--) {
    // const element = array[index];
    // console.log(index)
    liTag += `<li class="inactive">${lastDateofLastMonth - index + 1}</li>`;
  }

  for (let index = 1; index <= lastDateofMonth; index++) {
    let isToday = index === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}">${index}</li>`;
  }

  for (let index = lastDayofMonth; index < 6 + 21; index++) {
    // const element = array[index];
    liTag += `<li class="inactive">${index - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.onclick = () => {
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
      
      if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth);
          currYear = date.getFullYear();
          currMonth = date.getMonth();
      } else {
          date = new Date();
      }
      
    renderCalendar();
  };
});
