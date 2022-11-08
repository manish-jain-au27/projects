var electricCars = [];
const mainContentEle = document.querySelector("#mainContent");
const getordersEle = document.querySelector("#getorders");

(async () => {
  const response = await fetch("http://localhost:8000/electric/");
  electricCars = await response.json();
  console.log(electricCars);
  displayCars(electricCars);
})();

const displayCars = (cars) => {
  let n = cars.length;
  if (n === 0) return;
  else {
    for (let i = 0; i < n; i++) {
        let productCardEle = document.createElement("div");
        productCardEle.setAttribute("class","productcard");
        productCardEle.innerHTML = `<div class="logocart"></div>
                                    <div class="mainimages">
                                        <img id="car" class="p1car" src=${cars[i].imagePath}>  
                                    </div>
                                    <div class="cardetails">
                                        <span class="carname">${cars[i].title}</span>
                                        <p>
                                            <span class="carname">Topspeed : ${cars[i].topspeed}KMPH</span>
                                            <span class="carname">Range : ${cars[i].range}KM</span>
                                        </p>
                                        <div class="price">
                                            <span class="price_num">$${cars[i].priceStr}</span>
                                        </div>
                                    </div>
                                    <div class="button">
                                        <div class="button-layer"></div>
                                        <button name ="addToCartBtn" id ="${cars[i]._id}">Add To Cart</button>
                                    </div>`
        mainContentEle.append(productCardEle);
        const addToCartBtnEle = document.getElementById(cars[i]._id);
        addToCartBtnEle.addEventListener("click",async()=>{
            const orderCar = addToCartBtnEle.id;
            console.log(orderCar);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({electriCarID:orderCar}),
            }
            const response = await fetch("http://localhost:8000/orders/addOrder",requestOptions);
            const data = await response.json();
            console.log(data);
            location.href="http://localhost:8000/cart.html"
        });
    }
  }
};

getordersEle.addEventListener("click",async()=>{
    const response = await fetch("http://localhost:8000/orders/")
    const data = await response.json();
    console.log(data);
})

