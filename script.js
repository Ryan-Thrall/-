const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  selected: false
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  selected: false
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  selected: false
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  selected: false
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  selected: false
}, {
  name: 'Dipped Cone',
  image: 'http://thiscatdoesnotexist.com',
  price: 5,
  selected: false
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  selected: false
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  selected: false
}, {
  name: 'Gummy Worms',
  image: 'http://thiscatdoesnotexist.com',
  price: 2,
  selected: false
}]

let allItems = [...vessels, ...iceCream, ...toppings]

function drawItems(sectionID, sectionArray) {
  let Section = document.getElementById(sectionID);

  sectionArray.forEach(item => {
    Section.innerHTML +=
      `
<div class="col-4">
  <div class="p-1 my-2 bg-light"  id="${item.name}" onclick="addToSelection('${item.name}')">
    <img src="${item.image}" alt="food-item" class="img-fluid food-image">

    <div class="d-flex justify-content-between">
      <p>${item.name}</p>
      <p>$${item.price}</p>
    </div>
  </div>
</div>`
  })
}

function addToSelection(selected) {
  selectedItem = allItems.filter(item => selected == item.name)

  // Style Items based on Input
  if (!selectedItem[0].selected) {
    selectedItem[0].selected = true;
    updateItems()
  } else {
    selectedItem[0].selected = false;
    updateItems()
  }

  // Update Button If requirements Met
  checkButton()
}

function checkButton() {
  let button = document.getElementById('add-to-cart-button')

  // check that only one vessel is selected
  let selectedInList = vessels.filter(item => item.selected)

  if (selectedInList.length != 1) {
    button.disabled = true;
    return button.disabled + " Vessel Error"
  }

  // check that at least one ice cream is selected
  selectedInList = []
  selectedInList = iceCream.filter(item => item.selected)

  if (selectedInList < 1) {
    button.disabled = true;
    return button.disabled + " IceCream Error"
  }



  button.disabled = false;
  return button.disabled + " Success"
}

function updateItems() {
  allItems.forEach(item => {
    let selectedObject = document.getElementById(item.name)
    if (item.selected) {
      selectedObject.className = 'p-1 my-2 bg-info';
    } else {
      selectedObject.className = 'p-1 my-2 bg-light'
    }
  })
}

function addToCart() {
  let selectedItems = allItems.filter(item => item.selected)

  price = 0;
  let itemNamesList = []
  let itemNames = ''
  selectedItems.forEach(item => {
    // Add the price of this item
    price += item.price;
    itemNamesList.push(item.name)

  })
  itemNames = itemNamesList.join(`</br>`)
  console.log(price)
  let cartObject = document.getElementById("cart-area")
  cartObject.innerHTML +=
    `
<section class="row border border-dark">
  <div class="col-12 d-flex justify-content-between">
    <div class="col-4 d-flex justify-content-center">
      ${itemNames}
    </div>
    <div class="col-4 d-flex justify-content-center">
      <p>x1</p>
    </div>
    <div class="col-4 d-flex justify-content-center">
      <p>$${price}</p>
    </div>
  </div>
</section>
  `
}


//<section class="row border border-dark">
//  <div class="col-12 d-flex justify-content-between">
//  <div class="col-4 d-flex justify-content-center">
//     <p>Potato</p>
//   </div>
//   <div class="col-4 d-flex justify-content-center">
//     <p>x1</p>
//   </div>
//   <div class="col-4 d-flex justify-content-center">
//     <p>$10</p>
//   </div>
// </div>
//</section>

drawItems("vessel-section", vessels)
drawItems("icecream-section", iceCream)
drawItems("topping-section", toppings)

// Item Section

// Item
{/* < div class="col-4" >
  <div class="bg-info p-1 my-2">
    <img src="https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg" alt="cat" class="img-fluid">

    <div class="d-flex justify-content-between">
      <p>Name</p>
      <p>$4.00</p>
    </div>
  </div>
</div>  */}