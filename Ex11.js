const isEven = function(number){
    return number % 2 
}
console.log(isEven(10))



/*1.2************************************************************* */

function printOddNumbers(numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
      if (isEven(numbers[i])) {
        console.log(numbers[i]);
      }
    }
  }
  
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Odd numbers:");
  printOddNumbers(numbersArray);

/*1.3************************************************************* */

function checkExists(array, number) {
    
    for (let i = 0; i < array.length; i++) {
    
      if (array[i] === number) {
        return true; 
      }
    }
  
    
    return false;
  }

  const array1 = [1, 2, 3];
  console.log(checkExists(array1, 3)); 
  
  const array2 = [1, 2, 3];
  console.log(checkExists(array2, 5)); 
  
  /*1.4************************************************************* */

  const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    }
  };
  
  
  const result1 = calculator.add(20, 1);
  const result2 = calculator.subtract(30, 9);
  
  console.log(calculator.add(result1, result2)); // should print 42
  
  /*1.5************************************************************* */

  
  const turnToKing = function(name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins");
}

const makeRegal = name => "His Royal Highness, " + name.toUpperCase();

const increaseByNameLength = (money, name) => money * name.length;

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"