const header = document.querySelector(".header")
const headerInner = document.querySelector(".header_inner")

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;
    
    if(scrollPos > 0) {
        header.classList.add("header1")
        headerInner.classList.add("inner_2")
         headerInner.classList.remove("header_inner")
    }else {
         header.classList.remove("header1")
         headerInner.classList.remove("inner_2")
         headerInner.classList.add("header_inner")
    }
    
})
