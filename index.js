let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow , or stay?`)
if(secondAnswer === "follow"){ 
    let thirdAnswer = window.prompt("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.") 
} 
    else if(thirdAnswer === "stay"){ 
let thirdAnswer = window.prompt("You live happily amongst the cats.")}

} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take, chest or leave?`)
if(thirdAnswer === "chest"){
    let thirdAnswer = ("The dragon wakes up and eats you.")
}
else if(thirdAnswer === "leave"){
    let thirdAnswer = window.prompt("You come across a sword in a lake, upon pikcing it up you awake as if from a dream ruling your own kingdom.")}


}
