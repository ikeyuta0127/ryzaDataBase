let itemList,categoryList,elementList;

const getItemList = async () => {
  fetch("https://ikeyuta0127.github.io/ryzaDataBase/dataAsset/database.json").then(res => {
    if(res.ok){
      return res.json();
    }
  }).then(data => {
    console.log(data);
    itemList = data.itemList;
    categoryList = data.categoryList;
    elementList = data.elementList;

    itemList.forEach(item => {
      createTr(item);
    });
  });
}

const createTr = (item) => {
  const itemName = item.name;
  const itemCategory = item.category;
  const itemElement = item.element;

  const tbody = document.querySelector(".main .tbody");
  const tr = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = itemName;
  tr.appendChild(nameTd);

  const categoryTd = document.createElement("td");
  const categoryTdWrapDiv = document.createElement("div");
  categoryTdWrapDiv.classList.add("d-flex");
  itemCategory.forEach(data => {
    let categoryDiv = document.createElement("div");
    categoryDiv.textContent = data.name;
    categoryTdWrapDiv.appendChild(categoryDiv);
  });
  categoryTd.appendChild(categoryTdWrapDiv);
  tr.appendChild(categoryTd);

  tbody.appendChild(tr);
}

(async () => {
  console.log("test");

  await getItemList();
})();