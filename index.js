const header = document.querySelector('header')

let lastScroll =  0

document.addEventListener('scroll', function () {

    let scrollTop = document.documentElement.scrollTop

    if (scrollTop <= 100) {
        header.classList.remove('appear')
        return
    }

    if (scrollTop < lastScroll) {
        //up
        header.classList.remove('hide')
    } else {
        //down
        header.classList.add('hide')
    }
    lastScroll = scrollTop
})