/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
var first = function(array, cb) {
  for(var i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var last = function(array, cb) {
  var lname = "";
  for(var i = 0; i < array.length; i++) {
    lname = array[i].split(" ", length-1);
    cb(lname[1]);
  }
}


var names = ['Tyler White', 'Cahlan Sharp', 'Ryan Hart', 'Colt Peacemaker', 'Tyler White', 'Blaine Fredericks', 'Cahlan Sharp'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
var multiply = function(num1, num2, cb) {
  if(typeof num1 === "number" && typeof num2 === "number") {
    var ans = num1 * num2;
    cb(ans);
  }
  else {
    console.log("You did not enter a number, try again.");
  }
}


multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
var contains = function(array, name, cb) {
  var found = false;
  for(var i = 0; i < array.length; i++) {
    if(name === array[i]) {
      found = true;
    }
  }
  cb(found);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
var uniq = function(array, cb) {
  var arr = [];
  var len = array.length;
  var found;
  var curPos;
  for(var i = 0; i < len; i++) {
    curPos = array[i];
    found = false;
    for(var j = 0; !found && (j < len); j++) {
       if(curPos === array[j]) {
         if(i === j) {
           arr.push(curPos);
         }
         found = true;
       }
    }
  }
  cb(arr);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for 
var each = function(array, cb) {
  /*var index;
  for(var thing in array) {
    index = array.indexOf(array[thing]);
    cb(array[thing], index);
  }*/
  for(var i = 0; i < array.length; i++) {
    cb(array[i], i);
  }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
 
var getUserById = function(arr, id, cb) { 
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].id === id) {
      cb(arr[i]);
    }
  }
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});