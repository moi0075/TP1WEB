console.log("Le fichier JavaScript est connecté.");

const navbar = document.getElementById('nav');
console.log(navbar);

const tooggle = document.getElementById('tooggle');
console.log(tooggle.children[1]);


var open = false;
tooggle.addEventListener("click", () => {
    if (open === false) {
        navbar.style.right = "0px";
        tooggle.style.position = "fixed";
        tooggle.children[0].style.transform = "translateY(9.5px) rotate(45deg)";
        tooggle.children[1].style.opacity = "0";
        tooggle.children[2].style.transform =  "translateY(-9.5px) rotate(-45deg)";

        open = true;
    } else { 
        navbar.style.right = "-300px";
        tooggle.style.position = "absolute";
        tooggle.children[0].style.transform = "rotate(0deg)";
        tooggle.children[1].style.opacity = "100";
        tooggle.children[2].style.transform = "rotate(0deg)";

        open = false;
    }
});