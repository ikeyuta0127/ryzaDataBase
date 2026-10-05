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

/**
 * アイテムリストテーブルの行作成
 * @param {*} item 
 */
const createTr = (item) => {
  const itemName = item.name;
  const itemCategory = item.category;
  const itemElement = item.element;

  const tbody = document.querySelector(".main .tbody");
  const tr = document.createElement("tr");

  //名前要素作成
  const nameTd = document.createElement("td");
  nameTd.textContent = itemName;
  tr.appendChild(nameTd);

  //カテゴリ要素作成
  const categoryTd = document.createElement("td");
  const categoryTdWrapDiv = document.createElement("div");
  categoryTdWrapDiv.classList.add("d-flex");
  itemCategory.forEach(data => {
    let categoryDiv = document.createElement("div");console.log(data,categoryList,categoryList[0])
    categoryDiv.textContent = categoryList[data - 1].name;
    categoryTdWrapDiv.appendChild(categoryDiv);
  });
  categoryTd.appendChild(categoryTdWrapDiv);
  tr.appendChild(categoryTd);

  //属性要素作成
  const elementTd = document.createElement("td");
  const elementTdWrapDiv = document.createElement("div");
  elementTdWrapDiv.classList.add("d-flex");
  itemElement.forEach(data => {
    let elementDiv = document.createElement("div");
    elementDiv.textContent = elementList[data - 1].name;
    elementTdWrapDiv.appendChild(elementDiv);
  });
  elementTd.appendChild(elementTdWrapDiv);
  tr.appendChild(elementTd);

  tbody.appendChild(tr);
}

(async () => {
  console.log("test");

  await getItemList();
})();