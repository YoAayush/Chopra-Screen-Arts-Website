function openNav(){
    let x = document.getElementById("asdf");
    let y = document.getElementById("close-menu");
    let z = document.getElementById("hamburger-menu");
    x.style.display = 'block';
    y.style.display = 'flex';
    z.style.display = 'none';
}

function closenav(){
    let x = document.getElementById("asdf");
    let y = document.getElementById("close-menu");
    let z = document.getElementById("hamburger-menu");
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'flex';
}

let res = [];
var checkboxes = document.querySelectorAll('.checkbox');
console.log(checkboxes);

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkboxes.forEach(function(item) {
        if(item.checked === true){
            res.push(item.value);
        }
    })
    console.log(res);
    // console.log(`you have selected ${res}`);
    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "chopraaayush2004@gmail.com",
        Password : "313BDE959A20F6BC60C551C3B27D417EF40C",
        To : 'chopraaayush2004@gmail.com',
        From : "chopraaayush2004@gmail.com",
        Subject : "New client enquiry",
        Body: "Name: " + document.getElementById("name").value + 
            "<br>Email: " + document.getElementById("mail").value +
            "<br>Phone Number: " + document.getElementById("phn").value +
            "<br>They have selected the option: " + res +
            "<br>Message: " + document.getElementById("mesg").value
    }).then(
        alert("your message has been sent"),
        location.reload()
    ); 
})
