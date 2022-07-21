const panels = document.querySelectorAll('.panel') // The querySelectorAll()method returns all elements in the document that matches a specified CSS selector(s)and it as a static NodeList Object
    //Loop through nodelist using forEach()
    //Loops through and shows each panel
panels.forEach(panel => { // The forEach()method calls a function once for each element in an array, in order
    //addEventListener: add an listener that fires when a user clicks a button
    panel.addEventListener('click', () => { //key to search: Arrow functions what is introduced in ES6
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}