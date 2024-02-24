var elementsDoubt = document.querySelectorAll(".doubt")

elementsDoubt.forEach(function(doubt) {
    doubt.addEventListener('click', function (){
        doubt.classList.toggle('active')
    })
})
// console.log(elementsDoubt)