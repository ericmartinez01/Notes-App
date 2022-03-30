let notes = []

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {

  notes.push({
    notey: e.target[0].value
  })

  e.preventDefault()
  renderNotes()
  e.target[0].value = ''
})

let renderNotes = () => {
  let notesDiv = document.getElementById('notes')
  let pEl = document.createElement('p')
  let arrowEl = document.createElement('i').classList.add("fa-arrow-down")
  let spanEl = document.createElement('span')

  console.log(arrowEl)
  spanEl.appendChild(arrowEl)

  notes.forEach((note) => {
    pEl.textContent = note.notey
    notesDiv.appendChild(pEl)
    notesDiv.appendChild(spanEl)
  })
}