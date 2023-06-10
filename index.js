const input = document.querySelector("input");
input.onchange = () =>{
    let btn = document.getElementById('btn');    
    btn.addEventListener('click', function onClick(event) {
        document.body.style.backgroundColor = input.value;
    })
}