const reactiveElement = document.querySelector('.Reactive-element');
//reactive event when mouse hover on element
reactiveElement.addEventListener('mousemove', (e) => {
    //returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    let rect = e.target.getBoundingClientRect();
    //calculate where the mouse hover on element
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    //rotate index
    let roateIndex = 2;
    //calculate vertical and horizontal values of element
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    //Check the area where the mouse is located
    if (x < halfWidth) {
        if (y < halfHeight) {
            reactiveElement.style.transform = `perspective(200px) rotateX(${roateIndex}deg) rotateY(-${roateIndex}deg)`;
        } else if (y > halfHeight) {
            reactiveElement.style.transform = `perspective(200px) rotateX(-${roateIndex}deg) rotateY(-${roateIndex}deg)`;
        }
    } else {
        if (y < halfHeight) {
            reactiveElement.style.transform = `perspective(200px) rotateX(${roateIndex}deg) rotateY(${roateIndex}deg)`;
        } else if (y > halfHeight) {
            reactiveElement.style.transform = `perspective(200px) rotateX(-${roateIndex}deg) rotateY(${roateIndex}deg)`;
        }
    }

});
//reset element
reactiveElement.addEventListener('mouseout', () => {
    reactiveElement.style.transform = `perspective(200px) rotateX(0deg) rotateY(0deg)`;
})
