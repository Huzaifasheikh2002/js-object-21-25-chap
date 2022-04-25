                  // STRING METHODS
                // chapters21-25.pdf

        // 1. Write a program that takes two user inputs for first and
        // last name using prompt and merge them in a new variable
            // titled fullName. Greet the user using his full name.

// var firstName=("huzaifa");           
// var lastName=("sheikh");
// var fullName=firstName.concat(" "+lastName);
// console.log(fullName);
// console.log(fullName.length);


        // 2. Write a program to take a user input about his favorite
        // mobile phone model. Find and display the length of user
        // input in your browser

// var favPhone=prompt("Enter your fav phone")
// document.write("<h1> fav phone is: "+favPhone+"<h1/>")
// document.write("length of string:" +favPhone.length)


        // 3. Write a program to find the index of letter “n” in the word
//         // “Pakistani” and display the result in your browser

// var country=("pakistan")
// console.log(country.indexOf("n"));

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var word=("hello world");
// console.log(word.lastIndexOf("l"));

        // 5. Write a program to find the character at 3rd index in the
        // word “Pakistani” and display the result in your browser.
// var country=("pakistani")
// console.log(country.charAt(4));


        // 6. Repeat Q1 using string concat() method.

//  var firstName =prompt("enter")
//  var lastName =prompt("enter")
//  var fullName=(firstName.concat(lastName));

//  document.write("<h3>Hello "+fullName+" </h3>")


        // 7. Write a program to replace the “Hyder” to “Islam” in the
        // word “Hyderabad” and display the result in your browser.


        // var city="hyderabad"
        // city= city.replace("hyderabad","islamabad");
        // console.log(city);

        // 8. Write a program to replace all occurrences of “and” in the
        // string with “&” and display the result in your browser.
        // var message = “Ali and Sami are best friends. They play cricket and
        // football together.”;

        // var  message = ("Ali and Sami are best friends. They play cricket and football together.");
        // message=message.replace(/and/g,"&")
        // console.log(message);
        //
        
        //  9 .Write a program that converts a string “472” to a number
        // 472. Display the values & types in your browser.

// var name ="472";
// console.log(typeof(name));

// var num=472;
// console.log(typeof(num))


                  ////"java class practice"////

// var city =prompt("enter")
// console.log(city.toUpperCase());
// if(city.toUpperCase()==="KARACHI"){
//     alert("welcome")
// }
// else alert("not found")

// var usercity =prompt("enter").toLowerCase();
// var city =["karachi","multan","islamabad","pindi","lahore"];

// var flag=false;

// console.log(usercity);
// for(var i =0; i<city.length; i++){
//     if(city===city[i]){
//         flag=true
//         alert("welcomeee")
//         break
//     }
// }
// if(flag==false);{
// alert("not found")
// }

            // 10. Write a program that takes user input. Convert and
            // show the input in capital letters.


// var myName =prompt("enter")
// console.log(myName.toUpperCase());

                //  11 .Write a program that takes user input. Convert and
                        // show the input in title case.

// var word=prompt("a")
// var firstletter=word.slice(0,1).toUpperCase()
// var otherletter=word.slice(1).toLowerCase()
// var full=firstletter +otherletter

// document.write("<h3>User input: "+word+"</h3>")
// document.write("<h3>Title case: "+full+"</h3>")



// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num =(422.12)
// var string =num.toString()
// document.write("<h2>number:"+num+"</h2>")
// document.write("<h2>string result:"+string+"</h2>")


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var names =prompt("enter character")
// var flag=false
// for (var i=0;i<names.length;i++){
//         if (names[i].charCodeAt()===33||names[i].charCodeAt()===44||names[i].charCodeAt()===46||names[i].charCodeAt()===64){
//         alert("valid username")  
//         flag=true
//         console.log(names)
//         break
//         }
//        else if(flag==false){
//                alert("not valid")
//        }
// }




// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// var a=["cake","cookie","chips"]
// var userInput =prompt("enter").toLowerCase()
// var flag  =false

// for(var i=0;i<=a.length;i++){
//         if(userInput==a[i]){
//                 document.write("this item is available")
//                 flag=true
// }
// }
// if(flag==false){
//         document.write("this item is not available")
// //         flag =false
// }
// 16 que

// var university = "University of Karachi"

// for (var i = 0;i<university.length; i++){
//     document.write("<h3>"+university[i]+"</h3>")
// }
/////////////////////////////////////////////////////

// var university=("university")
// var array =university.split("")
// document.write(array.join("<br/>"))

////////////////////////////////////////////////////
// 17 que

// var a = prompt("Enter")
// var b = aaa.slice(-1)

// document.write("<h3>User Input: "+a+"</h3>")
// document.write("<h3>Last character of input: "+b+"</h3>")

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var count = string.match(/the/g)
// console.log(count.length)


// var string="the quick brown fox jumps over the lazy the dog".toLowerCase();
// var count =string.match(/the/g)
// console.log(count.length)

/////////////////////end////////////////

