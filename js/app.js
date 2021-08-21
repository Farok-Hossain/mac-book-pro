const bestPrice = document.getElementById("bestPriceSpan");
const memoryCost = document.getElementById("memoryCostSpan");
const storageCost = document.getElementById("storageCostSpan");
const deliveryCost = document.getElementById("deliveryCostSpan");
const totalCost = document.getElementById("totalCostSpan");
const promoInput = document.getElementById("promoInput");
const subTotalSpan = document.getElementById("subTotalSpan");

var items = {
    Best_Price: 1299,
    Extra_Memory_Cost: 0,
    Extra_Storage_Cost: 0,
    Delivery_charge: 0
}

var total = 0;

function calcCost(costName, ammount){
    if(costName){
        items = {...items, [costName]: ammount};
    }
    console.log(items);
    calcTotal();
}

function calcTotal(){
    total=0;
    for(const key in items){
        total += items[key];
        console.log(items[key]);
    }
    updateHtml();
}

function applyPromo(){
    const promoCode = promoInput.value;
    if(promoCode == "stevekaku"){
        subTotalSpan.innerHTML = total - (total * (20 / 100));
    }
}

function updateHtml(){
    bestPrice.innerHTML = items.Best_Price;
    memoryCost.innerHTML = items.Extra_Memory_Cost;
    storageCost.innerHTML = items.Extra_Storage_Cost;
    deliveryCost.innerHTML = items.Delivery_charge;
    totalCost.innerHTML = total;
    subTotalSpan.innerHTML = total;
}


calcCost()