let building = document.querySelector(".elevator-wrapper")
let floors = document.querySelectorAll(".floor")
let elevator = document.querySelector(".elevator")
let ghostElevators = document.querySelectorAll(".ghost-elevator")

// let test = document.querySelector(".test")

let numbers = document.querySelectorAll(".floor-number")
let door = document.querySelector(".door")
let light = document.querySelector(".light")

let cable = document.querySelector(".cable")

let bell = document.querySelector(".bell")
bell.volume = 0.5;
let bellB = document.querySelector(".bell-test")
//bell.play()

function play() {
    bell.play()
}

bellB.addEventListener("click", play)

function see(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function closeDoor() {
    door.style.right = "0"
    light.style.background = "green"
}

function openDoor() {
    door.style.right = "100%"
    light.style.background = "#00FD00"
    console.log(elevator.offsetTop)
    bell.play()
}

numbers.forEach(number => number.addEventListener("click", function () {
    //elevator.style.bottom = `${62 * Number(number.textContent)}px`
    setTimeout(closeDoor, 0)
    setTimeout(function () {
        elevator.style.bottom = `${62 * Number(number.textContent)}px`;
        //console.log(cable.offsetTop + cable.offsetHeight)
        /*
        cable.style.height = `${436 - (436 / 7 * Number(number.textContent))}px`
        */
        //cable.style.height = `${436 - (436 + elevator.offsetTop) - 50}px`
        cable.style.height = `${436 - 62 * Number(number.textContent) - 58}px`;
    }, 2500)

    setTimeout(openDoor, 5000)
}))
/*
test.addEventListener("click", function() {
  //console.log(see(floors.length, 0))
  setTimeout(closeDoor, 0)
  setTimeout(function() { elevator.style.bottom = `${62 * see(floors.length - 1, 0)}px` }, 2500)
  setTimeout(openDoor, 5000)
})
*/

// Math.floor(Math.random() * (max - min + 1)) + min
let lastFloor = floors[floors.length - 1]

//ghostElevators[3].style.setProperty("background", "blue")