// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.
let users = [];
// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
function validationOfName(nameInput) {
  //             - Check for leading or trailing spaces.
 let Name = nameInput.trim();
  //             - The first letter should be capitalized.
  let = fullName = Name.split(" ");
  let = finalName = "";
  //             - After each space, the first letter should remain capitalized.
  //             - Check that all other characters are in lowercase.
  for (let i = 0; i < fullName.length; i++) {
    let name = fullName[i];
    if (name.length > 0) {
      let capitalLetter = name[0].toUpperCase() + name.slice(1).toLowerCase();

      finalName = finalName + capitalLetter + " ";
    }
  }
  //             - Do not save the Name if it has less than 5 characters (excluding spaces).
  let nameChareCount = 0;
  for (let i = 0; i < Name.length; i++) {
    if (Name[i] !== " ") {
      nameChareCount++;
    }
  }
  if (nameChareCount < 5) {
    return "the name is too short it must be 5 or more letters";
  }
  //             - Do not save the Name if it contains numbers, "@", or similar special characters.
  let validCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  for (let i = 0; i < Name.lengtht; i++) {
    if (validCharacters.indexOf(Name[i]) == -1) {
      return "numbers, @, or similar special characters are not allowed ";
    }
  }
  return finalName.trim();
}

//             # Email:
function validationOfEmail(emailInput) {
//             - Check for leading or trailing spaces.
let email = emailInput.trim()
//             - Convert all letters to lowercase.
let lowercaseEmail = email.toLowerCase();
//             - Do not save the Email if it has spaces in the middle.
if (lowercaseEmail.includes(" ")) {
    return "Email cannot has spaces"
}
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
if (lowercaseEmail.length < 10) {
    return "Email can't has fewer than 10 characters "
}
//             - Do not save the Email if it does not contain exactly one "@" symbol.
let emailChareCount = 0;
for (let i = 0; i < lowercaseEmail.length; i++) {
    if (lowercaseEmail[i] == "@") {
        emailChareCount++;
    }
}
    if (emailChareCount != 1) {
        return "Email must contain exactly one '@' symbol"
    }
//             - Ensure the email is unique.
let existEmail = users.find(u => u.email === email);
if (existEmail) return false
return lowercaseEmail
}



//             # Age:   
function validationOfAge(ageInput) {
//             - Check for leading, trailing, or middle spaces.
  let age = ageInput.trim();
   if (age.includes(" ")) {
    return "age cannot has spaces"
   }
//             - Verify that only digits are entered.
let nums = "0123456789"
for (let i = 0; i < age.length; i++) {
   if (nums.indexOf(age[i]) === -1) {
    return "age must contain only digits"
   }
    
}
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.
   if (age.length == 0 ) {
    return "age cannot be empty"
   }
if (age.length >= 3) {
    return "age must be only 2 digits"
}
return "age is valid"
}
//             # Password:
function validationOfPassword(passwordInput) {
    //             - Check for leading or trailing spaces.
  let  password = passwordInput.trim();
  if (passwordInput.length !== password.length) {
    return "password cannot have leading or trailing spaces"
  }
//             - Do not save the Password if it has spaces in the middle.
if (password.includes(" ")) {
    return "password cannot has spaces in the middle";
}
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
let specialPassChars = "@#-+*/";
let passwordCount = 0  
for (let i = 0; i < password.length; i++) {
    if (specialPassChars.indexOf(password[i]) !== -1) {
        passwordCount = passwordCount + 1;
    } 
}
if (passwordCount == 0) {
        return "password must has at least one special character"
    }
//             - Require at least 7 characters to confirm the password.
if (password.length < 7) {
    return "password must has at least 7 characters"
}
        return "password is valid"
}
//             # Password_confirmed:
function confirmPassword(validationOfPassword, secondPassInput) {
    //             - The user must re-enter their exact password; otherwise, they are blocked.
    if (validationOfPassword === secondPassInput) {
        return "password confirmed"
    }else {
        return "password is not matched"
    }
}

function signUp() {
    let enterName = prompt("Enter Your FullName You can exit");
    if (enterName == "exit")return ;
    let name = validationOfName(enterName);
    while (name.includes("too short") || name.includes("not allowed")) {
        alert(name);
        enterName = prompt("invalid name, try Again: ");
        if (enterName === "exit" || enterName === null)return;
        name = validationOfName(enterName)
    }
    let enterEmail = prompt("Enter Email You can exit ")
    if (enterEmail === "exit" || enterEmail === null)return;
    let email = validationOfEmail(enterEmail);
    while (typeof email === "string" && (email.includes("fewer"))) {
        alert(email);
        enterEmail = prompt("invalid or used email, try again");
        if (enterEmail === "exit" || enterEmail === null) return ;
        email = validationOfEmail(enterEmail)
    }
    let age = prompt("Enter Age: ");
    while (validationOfAge(age) !== "age is valid") {
        alert(validationOfAge(age))
        age = prompt("invalid age Try again: ")
    }
    let password = prompt( "create password: ");
    while (validationOfPassword(password) !== "password is valid") {
        alert(validationOfPassword(password));
        password = prompt("invalid password, try again: ");
    }
    let confirm = prompt("Confirm password : ");
    if (confirmPassword(password, confirm) !== "password confirmed"){
        alert("password not matched")
        return;
    }
    users.push({
        name, 
        email,
        age,
        password : password ,
        balance: 0,
        loan: 0,
        loanToPay: 0,
        investment: 0,
        investmentProfit: 0,
        history: []
    });
    alert("signUp successful ")
};
console.log(users);

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.

//             # Password:
//             - Check if the entered password is associated with the previously entered email.
function login() {
    let email = prompt("Enter Your email:");
    let user = users.find(u => u.email === email);
    if (!user){
        alert("Email not found.");
        return;
    }

    let pass = prompt("enter Your password: ")
    if (user.password === pass) {
        currentUser = user; 
        alert("Welcome back, " + user.name)
    } else {
        alert("incorrect password.");
    }
}

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.

//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).

//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).

//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.

//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).

//             # History:
//             - Ability to view the entire transaction history.


