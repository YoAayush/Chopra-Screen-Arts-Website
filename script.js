document.getElementById("con").onclick = function(){
    location.href = "contact.html";
}

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
        Username : "aayushking37@gmail.com",
        Password : "5080AA3C610ABEAA13EFB334E3857289468B",
        To : 'aayushking37@gmail.com',
        From : "aayushking37@gmail.com",
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