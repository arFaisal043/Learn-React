const changeHeading = () => {
    let a = document.createElement("h1");
    a.innerHTML = "Hello";
    // console.log(a)

    let b = document.querySelector(".root");
    b.appendChild(a);
}