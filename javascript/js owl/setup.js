$(`.owl-carousel`).owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0: {
            itens: 1
        },
        600: {
            itens: 3
        },
        1000: {
            itens: 5
        }
    }
})