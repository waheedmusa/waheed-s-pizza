function Pizza(selectedSize,selectedToppings,selectedCrust,selectedDelivery,selectedNumber) {
  this.selectedSize = selectedSize;
  this.selectedToppings = selectedToppings;
  this.selectedCrust = selectedCrust;
  this.selectedDelivery = selectedDelivery;
  this.selectedNumber = selectedNumber;
}



Pizza.prototype.sizeCost = function() {
  var sizes = {

    small: 1000,
    medium: 1500,
    large: 2000,
  };

  return sizes[this.selectedSize];
}


Pizza.prototype.toppingsCost = function() {
  var totalToppingsCost = 0;
  var toppings = {
    pepperoni: 500,
    mushroom: 500,
    cheesetop: 600,
    pineapple: 550,
  };

  this.selectedToppings.forEach(function(topping) {
    totalToppingsCost += toppings[topping];
  });

  return totalToppingsCost;
};


Pizza.prototype.crustCost = function () {
  var crusts = {

    thin: 400,
    thick: 500,
    deep: 660,
  };

  return crusts[this.selectedCrust];
};


Pizza.prototype.deliveryCost = function () {
  var deliverys = {

    delivery: 1000,
    no: 0,
  };

  return deliverys[this.selectedDelivery];
};


Pizza.prototype.numberCost = function () {
  var numbers = {

    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
  };

  return numbers[this.selectedNumber];
};

Pizza.prototype.pizzaCost = function() {
  return (((this.sizeCost() + this.toppingsCost() + this.crustCost()) * this.numberCost()) + this.deliveryCost());
}



$(document).ready(function() {
  $('#form1').submit(function(event) {
    event.preventDefault();

    var size = $("input[name=pizzasize]:checked").val();
    var crust = $("input[name=pizzacrust]:checked").val();
    var delivery = $("input[name=pizzadelivery]:checked").val();
    var number = $('#drop').val();
    var toppings = [];


    $("input:checkbox:checked").map(function(){
      toppings.push($(this).val());
    });
    
    var userPizza = new Pizza(size,toppings,crust,delivery,number);
    var grandTotal = userPizza.pizzaCost();

    $('#order').text(grandTotal);
  });

  $('.butt0').click(function() {
   $('#result').show();
  });

    $('.butt1').click(function() {
     $('.form2').show();
    });


      $('.butt2').click(function() {
       $('#demo').show();
      });

});
