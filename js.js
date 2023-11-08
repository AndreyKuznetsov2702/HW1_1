const node_for_click = document.getElementById("for_click")
const node_for_click2 = document.getElementById("for_click2")
function find_edit(){
    const p1 = document.getElementById("lastname")
    console.log(p1.innerText)
    p1.innerText = "Kuznetsov"

    const p2 = document.getElementById("firstname")
    console.log(p1.innerText)
    p2.innerText = "Andrey"

    const p3 = document.getElementById("date")
    console.log(p1.innerText)
    p3.innerText = "XXVII.II.MMIII"
}
node_for_click.addEventListener("click",find_edit)
function find_edit2(){
    const p1 = document.getElementById("lastname")
    console.log(p1.innerText)
    p1.innerText = "Кузнецов"

    const p2 = document.getElementById("firstname")
    console.log(p1.innerText)
    p2.innerText = "Андрей"

    const p3 = document.getElementById("date")
    console.log(p1.innerText)
    p3.innerText = "27.02.2003"
}
node_for_click2.addEventListener("click",find_edit2)

