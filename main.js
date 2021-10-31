const imgBox = document.querySelectorAll('.imgBox')

const colors = document.querySelectorAll('.color')

colors.forEach(color => {
    color.addEventListener('click', () =>  {
        imgBox.forEach(img => {
            img.className = 'imgBox'
        })
        document.getElementById(color.dataset.id).className = 'imgBox active'
        colors.forEach(color => {
            color.className = 'color'
        })
        color.className = 'color active'
    })
})