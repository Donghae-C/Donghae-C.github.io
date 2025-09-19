onload = () => {
  initData(mockData);

  let dateObj = new Date();
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();
  let day2 = dateObj.getDay();
  let dateBox = document.querySelector(".Header>h1");
  dateBox.innerText = `${year}년 ${month}월 ${date}일 ${day[day2]}요일`;
};

const initData = (data) => {
  let container = document.querySelector("[class='todos_wrapper']");
  container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let date = new Date(data[i].date);
    let checked;
    if (data[i].isDone) {
      checked = "checked";
    } else {
      checked = "";
    }

    let str = `<div class="TodoItem">
            <input type="checkbox" name="isDone" id="check${data[i].id}" ${checked}  onchange="onUpdate(${
      data[i].id
    })"/>
            <div class="content">${data[i].content}</div>
            <div class="date">${date.toLocaleString()}</div>
            <button onclick="del(${data[i].id})">삭제</button>
          </div>`;
    container.innerHTML += str;
  }
};

const onUpdate = function (id) {
  mockData.find((d) => d.id === id).isDone = document.getElementById("check" + id).checked;
};

let idIndex = 3;
document.querySelector(".Editor>button").addEventListener("click", (e) => {
  e.preventDefault();
  let content = document.getElementById("new");
  let add = {
    id: idIndex,
    isDone: false,
    content: content.value,
    date: new Date().getTime(),
  };
  idIndex++;
  mockData.push(add);
  initData(mockData);
  content.value = "";
  content.focus();
});

const del = function (id) {
  let num = mockData.findIndex((d) => d.id === id);
  console.log(num);
  mockData.splice(num, 1);
  initData(mockData);
};

document.getElementById("search").addEventListener("keyup", (e) => {
  let str = e.target.value;
  let data = mockData.filter((d) => d.content.includes(str));
  initData(data);
});
