// Some Important Variables


let password = document.querySelector(".pa");
let sub = document.querySelector(".gen");
let subi = document.querySelector(".gen i");
let form = document.querySelector(".form")


// Start copy Func

function copy() {
    let copyText = document.querySelector(".pa");
    navigator.clipboard.writeText(copyText.innerHTML);
}

// End Copy Func

// Range Func

let range = document.querySelector("[type='range']");
document.querySelector("[type='range']")
let le = document.querySelector(".le");
range.oninput = function(){
    le.innerHTML = range.value
    let r = (range.value *5 / 100)*100;
    if(r <= 25){
        r = r + 1.4;
    }
    if(r >= 75){
        r = r - 1.55;
    }
    if(r <= 5){
        r = r + 2;
    }
    range.style.background = `linear-gradient(90deg, #a0f8ab ${r}%, rgb(15, 14, 20) ${r}% )`
}
le.innerHTML = range.value


// End Of Range Func



// Form Edetting

// Variables
let ULetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let LLetters = ULetters.map((a)=>{return a.toLowerCase()});
let Numbers = [0,1,2,3,4,5,6,7,8,9];
let Symbols = ['!','@','#','$','%','^','&','*','_','_'];
let e = document.querySelectorAll("[type=\"checkbox\"]");
let f = document.querySelectorAll(".strength div");
//End Variables

// Functions

e.forEach((a,i)=>{
    a.onclick = ()=>{
        a.classList.toggle("aq");
    }
})

let aqa = document.querySelector(".word");
form.oninput = ()=>{
    let c = 0;
    for(let i = 0; i < f.length; i++){
        f[i].classList.remove("fill");
        f[i].classList.remove("fil");
        f[i].classList.remove("fi");
    }
    for(let i = 0; i < e.length; i++){
        if(e[i].className == "aq"){
            c++;
        }
    }
    if(c == 1){
        for(let i = 0; i < c; i++){
            f[i].classList.add("fi");
        }
        aqa.innerHTML = "WEEK";
    }
    if(c == 2 || c == 3){
        for(let i = 0; i < c; i++){
            f[i].classList.add("fil");
        }
        aqa.innerHTML = "MEDIUM";
    }
    if(c == 4){
        for(let i = 0; i < c; i++){
            f[i].classList.add("fill");
        }
        aqa.innerHTML = "STRONG";
    }
    if(c == 0){
        aqa.innerHTML = "";
    }
}

let conf = document.querySelector(".con")
let p = document.querySelector(".p1")
sub.onclick = function(){
    if(range.value > 2 && (e[0].className == "aq" || e[1].className == "aq" || e[2].className == "aq" || e[3].className == "aq")){
        let p = [];
        if(e[0].className == "aq"){
            p.push(...ULetters)
        }
        if(e[1].className == "aq"){
            p.push(...LLetters)
        }
        if(e[2].className == "aq"){
            p.push(...Numbers)
        }
        if(e[3].className == "aq"){
            p.push(...Symbols)
        }
        let r = [];
        for(let i  = 0; i < range.value;i++){
            r.push(p[Math.floor(Math.random() * p.length)])
        }
        password.innerHTML = r.join("")
        password.style.color = '#fff'
    }
    else{
        conf.style.display = 'flex';
        p.style.opacity = '.2'
    }
}

let ee = document.querySelector(".con div");

ee.onclick = ()=>{
    conf.style.display = 'none';
    p.style.opacity = '1'
}