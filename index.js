const header = document.querySelector('header')

let lastScroll = 0

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

const sectionElems = document.querySelectorAll('section')

let options = {
  threshold: 0.5
}

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
        } else {
            entry.target.classList.remove('fade-in')
        }
    })
}, options)

sectionElems.forEach((el) => {
    fadeInObserver.observe(el);
})