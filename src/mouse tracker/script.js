const menu = document.querySelector('.menu');
const content = document.querySelector('.content')
const mainContents = content.querySelectorAll('article')
const menuItems = document.querySelectorAll('.menu-item');
const menuBtn = document.querySelector('.menu-btn');
const mouseTracker = document.querySelector('.mouse-tracker');
const span = mouseTracker.querySelector('span');
const links = menu.querySelectorAll('p');
const currentSection = menu.querySelector('.current-section');
const changeColor = menu.querySelector('.change-color');

let prevScrollVal = 0;
let isClicked = false;
let isFirstHover = true;
let initialRef = '#';

changeColor.onclick = (e) => {
    if(e.target.id === 'black') {
        document.getElementById('color-theme').setAttribute('href', 'black.css')
    } else if(e.target.id === 'white') {
        document.getElementById('color-theme').setAttribute('href', 'white.css')
    }
}

const createSectionCircle = () => {
    //Creates those small circles you see to left

    [...links].forEach(link => {
        const sectionCircle = document.createElement('div')
        sectionCircle.setAttribute('class', 'section-circle link')
        sectionCircle.setAttribute('link', link.getAttribute('link'))
        sectionCircle.setAttribute('data-content', link.textContent)

        sectionCircle.onclick = () => {
            let link = sectionCircle.getAttribute('link')
            initialRef = link
            location.href = link
        }
    
        currentSection.appendChild(sectionCircle)
    })
}

currentSection.onmouseover = () => {
    window.onscroll = null
}

currentSection.onmouseout = () => {
    window.onscroll = handleScroll
}

createSectionCircle()



const removeClasses = () => {
    menu.classList.remove('show-menu')
    content.classList.remove('thin-content')

    setInterval(() => {
        menuBtn.classList.remove('disabled-menu-btn')
    }, 800)
}

const addClasses = () => {
    isFirstHover = true;

    menu.classList.add('show-menu')
    content.classList.add('thin-content')
    setInterval(() => {
        menuBtn.classList.add('disabled-menu-btn')
    }, 400)
}




[...menuItems].forEach(menuItem => {

    //Handles the behavior of each menu link

    menuItem.onmouseover = (e) => {
        const menuLinks = menu.querySelectorAll('p')
        menuLinks.forEach( menuLink => {menuLink.classList.remove('active')})

        const target = e.target.getAttribute('link');

        if(target === null) return;
        location.href = target
        currentSection.innerHTML = '';
        createSectionCircle();
    }

    menuItem.onmouseout = () => {
        const menuLinks = menu.querySelectorAll('p')

        menuLinks.forEach(menuLink => {
            if(menuLink.getAttribute('link') === initialRef) {
                menuLink.classList.add('active')
            } else {
                menuLink.classList.remove('active')
            }
        })


        if(menuItem.getAttribute('link') === initialRef) {
            menuItem.classList.add('active')
        }

        location.href = initialRef

    }

    menuItem.onclick = (e) => {
        const target = e.target.getAttribute('link')

        if(target === null) return;
        isClicked = true
        
        removeClasses()

        initialRef = target
        location.href = target
    }
})



menuBtn.onmouseover = addClasses;

content.onmouseover = () => {
    removeClasses();

    if(!isFirstHover) return;
    
    setTimeout(() => {
        if(isFirstHover) {
            location.href = initialRef
            isFirstHover = false;
        }
    }, 400)
}




window.onmousemove = (e) => {
    if(e.clientX === 0) {
        addClasses();
    }

    //Handles mouse movement


    const link = e.target.closest('.link')
    
    let offsetX = 0;
    let offsetY = 0;
    let pointerContent = '';

    if(link !== null) {
        let linkText = link.getAttribute('link')

        offsetX = 10 + mouseTracker.offsetWidth/2
        offsetY = 10 + mouseTracker.offsetHeight/2
        pointerContent = linkText ? linkText.match(/[a-z]+/gi).join(' '): linkText
    }
    const x = offsetX + e.clientX - mouseTracker.offsetWidth / 2
    const y = offsetY + e.clientY - mouseTracker.offsetHeight / 2
    const span = mouseTracker.querySelector('span')

    mouseTracker.style.transform = `translate(${x}px, ${y}px)`

    span.innerHTML = pointerContent
}




//handles scrolling event

const handleScroll = () => {
    if(menu.getAttribute('class').includes('show-menu')) return;

    if(prevScrollVal <= window.scrollY) {
        menuBtn.classList.add('change-menu-btn')
        currentSection.classList.add('show-current-section')
    } else {
        menuBtn.classList.remove('change-menu-btn')
        currentSection.classList.remove('show-current-section')
    }

    prevScrollVal = window.scrollY
}


window.onscroll = handleScroll





const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {

        if(entry.isIntersecting) {

            const links = currentSection.querySelectorAll('.section-circle');
            initialRef = menu.getAttribute('class').includes('show-menu') || isFirstHover? initialRef: '#' + entry.target.id;

            [...links].forEach( link => {
                link.classList.remove('show-circle-content')
                const linkUrl = link.getAttribute('link').match(/[a-z]+/ig).join('');

                if(linkUrl === entry.target.id) {
                    link.classList.add('active-section-circle')
                    link.classList.add('show-circle-content')

                    setTimeout(() => {
                        link.classList.remove('show-circle-content')
                    }, 1500)
                } else {
                    link.classList.remove('active-section-circle')
                }

            })
        }

    })
});

[...mainContents].forEach(el => observer.observe(el))