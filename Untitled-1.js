// var [r, c] = [11, 11]; 
// var m = Array(r).fill().map(()=>Array(c).fill("."));
var ct2=0;
var dots=[],dots2=[];
var big_dots=[],big_dots2=[],big_dots3=[];

function createArray(arr,row, col) {
   

  for (let i = 0; i < row; i++) {
    let subarray = [];

    for (let j = 0; j < col; j++) {
     if(j%2==0&& i%2 ==0){
      subarray.push(".");
     }
     else if(j%2 != 0 && i%2==0){
      subarray.push(" ");
     }else{
      subarray.push(" ");
     }
    }

    arr.push(subarray);
  }

  return arr;
}
createArray(dots,21,21);
createArray(dots2,21,21);
createArray(big_dots,201,201);
createArray(big_dots2,201,201);
createArray(big_dots3,101,101);

var dots33 = [
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."]
    ,arrText=''
  ];
  function clearArray(dos,lenn6){
    for (var c1=0; c1<lenn6; c1++){
      for(var c2=0; c2<lenn6; c2++){
        if(dos[c1][c2]=="|"||dos[c1][c2]=="-"){
          dos[c1][c2]=" ";
        }
      }
    }
  }
  var dots2222 = [
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    ["."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."," ","."]
    ,arrText=''
  ];
//   const prompt = require("prompt-sync")({ sigint: true });
// const age = prompt("enter command");
// if(age=="D"){
//   putVer(3,8);
// }
function reverseColumns(arr3,colm){
    for(var y=0; y<colm; y++){
       var j = 0;
        var k = colm-1;
        while (j < k){
           var t = arr3[j][y];
            arr3[j][y] = arr3[k][y];
            arr3[k][y] = t;
            j += 1;
            k -= 1;
        }
      
}
}
var itemCounter=0;

const prompt = require("prompt-sync")({ sigint: true });
var items = [], action;
var stack=[],stack2=[],stack3=[];
var directionArr=[];
var names=[];
var coor1 =[];
var coor2 = [];
var o1 =0, o2=0, o3=0;

console.log("write 'exit' to leave the program");
while(items[0]!="exit"){
  
action = prompt();
items = items.concat(action.split(" "));
itemCounter++; 
//input--------------------------
var name;
if(items[0]=="LOGO"){
  
  names.push(items[1]);
  directionArr.push(items[2]);
console.log(`${items[1]}` + " is defined");
items=[];
}
else if(items[0]=="ENGRAVE"){
  
  coor1.push(items[2]);
  coor2.push(items[3]);
var o=0;
while(names[o]!=items[1]){
  o++;
}
putVer(dots,directionArr[o],coor1[o],coor2[o],o);
  print_List(dots);
  items=[];
  clearArray(dots,21);
}
else if(items[0]=="SAME"){
  if(names.length==2){
    while(names[o1]!=items[1]){
      o1++;
    }
    while(names[o2]!=items[2]){
      o2++;
    }
  putVer(dots,directionArr[o1],6,6,o1);  
  for (var i1 = 0; i1 < 21; i1++){
    for (var i2=0; i2<21;i2++){
      dots2[i1][i2]=dots[i1][i2];
    }
    }
    clearArray(dots,21);
    putVer(dots,directionArr[o2],6,6,o2);
    search_array(dots,stack,21,21);
    search_array(dots2,stack2,21,21);
    compare_array2(stack,stack2,dots,21);
    items=[];
  }
  else if(names.length!=2){
    while(names[o1]!=items[1]){
      o1++;
    }
    while(names[o2]!=items[2]){
      o2++;
    }
    
    putVer(big_dots,directionArr[o1],51,51,o1);  
    putVer(big_dots2,directionArr[o2],51,51,o2);
    //putVer(big_dots3,directionArr[o3],50,50,o2);
    search_array(big_dots,stack,201,201);
    search_array(big_dots2,stack2,201,201);
    //search_array(big_dots3,stack3,50,50);
    
    compare_array2(stack,stack2,big_dots,201);
    big_dots=[];
    big_dots2=[];
    items=[];
    stack=[];
    stack2=[];
    o1=0;
    o2=0;
    createArray(big_dots,201,201);
    createArray(big_dots2,201,201);
  }

}

}
//printlist------------------
function print_List(list){
  for (var i = 0; i < 21; i++) {
    for (var j = 0; j < 21; j++)    {
        process.stdout.write(list[i][j]);
    }
    console.log(arrText);
    arrText ='';
    }  
}


//directions-----------------------
function putVer(arr5,direction,dot1, dot2,len) {
  var d1,d2;
d1 = dot1*2-2;
d2 = dot2*2-2;
for(var a1=0; a1<directionArr[len].length; a1++){
// console.log(`${d1}`);
// console.log(`${d2}`);
if(direction[a1]=="D"){
  arr5[d1+1][d2]= "|";
  d1 += 2;
}
else if(direction[a1]=="U"){
  arr5[d1-1][d2]= "|";
  d1 -=2;
}
else if(direction[a1]=="R"){
  arr5[d1][d2+1]= "-";
  d2 +=2;
}
else if(direction[a1]=="L"){
  arr5[d1][d2-1]= "-";
  d2 -=2;
}else{
  console.log("Errror");
}
}   
}


 
    // Function to rotate the matrix 90 degree clockwise
    
    function rotate90(matrix1,lenn5) {
      for (var i = 0; i < matrix1.length; i++) {
        for (var j = 0; j < i; j++) {
          const temp = matrix1[i][j];
          matrix1[i][j] = matrix1[j][i];
          matrix1[j][i] = temp;
        }
      }
      
      rotateLine(dots,21,21);
      reverseColumns(dots,21);
      }
      function rotateLine(arr,lenn3,lenn4){
       for(var t=0; t<lenn3; t++){
         for(var t2=0; t2<lenn4; t2++){
           if(arr[t2][t]=="-"){
            arr[t2][t]="|";
           }
           else if(arr[t2][t]=="|"){
            arr[t2][t]="-";
           }

         }
       }

      }
       
      
          
    
    
    
    function search_array(ar1,ar2,lenn1,lenn2){
      for(var p=0; p<lenn1; p++){
        for(var p2=0; p2<lenn2; p2++){

                  if (ar1[p][p2]=="|"){
                    ar2.push("a");
                  }
                  else if (ar1[p][p2]=="-"){
                    ar2.push("b");
                  }
        }
      }
    }
    
    function compare_array2(arrr1, arrr2,arrr3,lenn7){
      var len1=arrr1.length;
      var pr1=arrr3;
      var pr2=lenn7;
      var den=0;
      for(var p3=0; p3<len1; p3++){
          if(arrr1[p3]!=arrr2[p3]){
            den +=1;
          }
        }

            if(den==0){
              console.log("Yes");
              ct2=0;
        }else{
          if(ct2 != 3){
            ct2++;
            rotate90(arrr3,21);
            stack=[];
            search_array(arrr3,stack,lenn7,lenn7);
            compare_array2(stack,stack2,arrr3,lenn7);
          }else{
            console.log("No");
            ct2=0;
          }
     }
     

    }