let input = document.getElementById('input');
let btn = document.getElementById('btn');
let boxs = document.querySelectorAll('.box');
let drag = null;
btn.onclick = function () {
    if (input.value != '') {
        boxs[0].innerHTML += `<p class='item' draggable='true'>${input.value}</p>`;
        input.value = '';
    }
    
    dragItems();
}

function dragItems() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            drag = item;
            this.style.opacity = '0.7';
        })
        item.addEventListener('dragend', function () {
            drag = null;
            this.style.opacity = '1';
        })

        boxs.forEach(box => {
            box.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.style.backgroundColor = '#090';
                this.style.color = '#fff';
            })

            box.addEventListener('dragleave', function () {
                this.style.backgroundColor = '#fff';
                this.style.color = '#000';
            })

            box.addEventListener('drop', function () {
                box.append(drag);
                this.style.backgroundColor = '#fff';
                this.style.color = '#000';
            })
        })
    })
}

