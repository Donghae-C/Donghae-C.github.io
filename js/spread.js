onload = () => {
  initSpread(portfolioData);
};

let initSpread = function (data) {
  console.log(data);
  let container = document.getElementById("portfolioDiv");
  container.innerHTML = "";
  let str = "";
  for (let i = 0; i < data.length; i++) {
    str += `<div class="w3-third w3-container w3-margin-bottom" name="my-tag"  onclick="moveTo('${data[i].url}')">
          <img src="${data[i].img}" alt="${data[i].title}" class="w3-hover-opacity" />
          <div class="w3-container w3-white">
            <p><b>${data[i].title}</b></p>
            <p>${data[i].content}</p>
          </div>
        </div>`;
  }
  container.innerHTML = str;
};

let moveTo = function (url) {
  location.href = url;
};
