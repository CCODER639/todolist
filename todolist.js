let items = [];

const itemsdiv = document.getElementById('items')
const input = document.getElementById('iteminput')
const storagekey = 'items'

function renderitems(){
  itemsdiv.innerHTML = null;

  for (const [idx, item] of Object.entries(items)){
    const content = document.createElement('div')
    content.style.marginBottom = '10px'

    const text = document.createElement('p')
    text.style.display = 'inline'
    text.style.marginRight = '10px'
    text.textContent = item;


    const button = document.createElement('button')
    button.textContent = 'delete'
    button.onclick = () => removeitems(idx)

   content.appendChild(text)
   content.appendChild(button)
    itemsdiv.appendChild(content)
  }
}



function loaditems(){
  const olditems = localStorage.getItem(storagekey)
if(olditems) items = JSON.parse(olditems)
renderitems()
} 


function saveitems(){
  const stringitems = JSON.stringify(items);
  localStorage.setItem(storagekey, stringitems)
}

function additems(){
  const value = input.value;
  if (!value){
    alert('you cannot add an empty item')
    return
  }
  items.push(value)
  renderitems()
  input.value = ''
  saveitems()


}


function removeitems(idx){
  items.splice(idx, 1)
  renderitems()
  saveitems()

}

document.addEventListener('DOMContentLoaded', loaditems)