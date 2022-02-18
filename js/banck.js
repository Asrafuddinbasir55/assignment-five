

function calculate(food,rent,clothes) {

    const myCost = document.getElementById('my-cost')
    const inComeConvert = parseInt(myCost.value)
    console.log(inComeConvert);

    const foodCost = document.getElementById('food-cost')
    console.log(foodCost);
    const foodConvert = parseInt(foodCost.value)
    console.log(foodConvert, 'food')


// income convert number

    const rentCost = document.getElementById('rent-cost')
    const rentConvert = parseInt(rentCost.value)
    const colthCost = document.getElementById('colth-cost')
    const colthConvert = parseInt(colthCost.value)


    const totalBalence = foodConvert + rentConvert + colthConvert
    console.log(totalBalence)
    document.getElementById("total-balence").innerText = totalBalence 

    const balence = inComeConvert-totalBalence
    console.log('balence')

    if (totalBalence < 0 || foodCost < 0 || rentCost < 0  || colthCost < 0) {

    } else {
        const expensesTotal = parseInt(foodCost) + parseInt(rentCost) + parseInt(colthCost);
        
        if(expensesTotal > totalBalence) {
            window.alert("you have a money to expenses worng")
        }
    }


}

 const amount = document.getElementById('calculate-item').addEventListener('click', function () {
    calculate('food-value', 'rent-value', 'colth-value');
   
})


document.getElementById('btn-save').addEventListener('click', function() {
    const saveBalence = myCost('save-catch');
    console.log('saveBalence');
    
    const savingAmount = parseFloat('saving-amount');
    const totalBalence  = savingAmount.toExponential(2);

    const saving = (totalBalence * savingAmount / 100) 


    if (savingAmount > totalBalence) {
        window.alert('worng the balence chack')
    }
    else if (savingAmount < 0) {
         window.alert('enter a positive number');
    }
    else {
        document.getElementById('saving-amount').innerText = savingAmount;
    
        document.getElementById('remening-amount').innerText = totalBalence - savingAmount;
    }
    
})


