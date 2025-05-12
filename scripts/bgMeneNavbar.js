// adcioina a class
function bgNavbarMenuEnter(classCSS) {
    // pega o elemtno
    const element = document.querySelector(`.${classCSS}`);
    
    //adciona a classe de bg
    element.classList.add('bg-menu')
}


// remove a class
function bgNavbarMenuLeave(classCSS) {
    // pega o elemtno
    const element = document.querySelector(`.${classCSS}`);
    
    //adciona a classe de bg
    element.classList.remove('bg-menu')
}