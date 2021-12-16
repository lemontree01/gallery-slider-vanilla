let items = document.querySelectorAll('.el')
items.forEach(el => {
    el.addEventListener('click', () => {
        console.log('success')
        items.forEach(el1 => {
            el1.classList.remove('active')
        })
        el.classList.add('active')
    })
})