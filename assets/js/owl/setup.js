// Esse é o documento que, de fato, liga o JQuery no nosso código HTML.

$('.owl-carousel').owlCarousel({
    // O efeito de "Loop" diz se quando o carroussel terminar ele automaticamente começa de novo ou não. (true: automaticamente começa de novo / false: não começa de novo de forma automática)
    loop:true,
    
    //Aqui fica definido o tamanho da margem de uma miniatura de cartaz de série e outra.
    margin:10,

    // Você pode ainda ter setinhas para ajudar na rolagem do carrossel. (true: você tem as setinhas e tem umas bolinhas embaixo/ false: você não tem as setinhas, ficam apenas umas bolinhas embaixo)
    nav:false,


    responsive:{
        
        // Abaixo vamos informar que, se a tela tiver 0px até 600px, poderão ser colocadas 1 miniatura de cartaz na tela, por vez.
        0:{
            items:1
        },

        // Abaixo vamos informar que, se a tela tiver 600px até 1000px, poderão ser colocadas 3 miniaturas de cartazes na tela, de uma vez. 
        600:{
            items:3
        },
        // Abaixo vamos informar que, se a tela tiver 1000px ou mais, poderão ser colocadas 5 miniaturas de cartazes na tela, de uma vez. 
        1000:{
            items:5
        }
    }
})