window.onload = () => {
  const buttonElement = document.getElementById("addButton")

  const inputElement = document.getElementById("inputType")

  const createLiElement = () => {
    const liElement = document.createElement('li')

    const checkBox = document.createElement('input')

    checkBox.setAttribute('type', 'checkBox')

    const span = document.createElement('span')

    const inputvalue = inputElement.value;

    checkBox.addEventListener('click', (event) => {
      const checked = event.target.checked

      if (checked) {
        span.style.textDecoration = 'line-through'
      }

      else {
        span.style.textDecoration = 'none'
      }

    })

    span.innerHTML = inputvalue

    liElement.appendChild(checkBox)
    liElement.appendChild(span)

    return liElement
  }

  buttonElement.addEventListener("click", () => {
    const listElement = document.getElementById('list')

    const liElement = createLiElement()

    listElement.appendChild(liElement)
    inputElement.value = ''
  });
};
