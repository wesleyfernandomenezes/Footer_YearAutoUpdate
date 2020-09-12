window.addEventListener ('load', start)

function start () {

    yearAutoUpdate ()

}

function yearAutoUpdate () {

    const year = document.querySelector ('.year')
    const data = new Date()
    const yearUpdate = data.getFullYear()

    year.innerText = yearUpdate

}