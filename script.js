let btnIs = document.getElementById("btnIs")
let btnAre = document.getElementById("btnAre")
let btnArent = document.getElementById("btnArent")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnArent.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    answer.innerHTML = "aren't"
    btnArent.style.background = 'lime'
    answer.style.color = 'lime'
    btnArent.disabled = 'true'
    btnIs.disabled = 'true'
    btnAre.disabled = 'true'
})

btnIs.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let img02 = document.getElementById('img02')
    img02.style.visibility = 'visible'
    setTimeout(() => {
        img02.style.visibility = 'hidden'
    }, 500);
    answer.innerHTML = 'is'
    btnIs.style.background = 'red'
    answer.style.color = 'red'
    btnIs.disabled = 'true'
})

btnAre.addEventListener('click', function() {
    let audio = document.getElementById('wrong2')
    audio.play()
    let img02 = document.getElementById('img02')
    img02.style.visibility = 'visible'
    setTimeout(() => {
        img02.style.visibility = 'hidden'
    }, 500);
    answer.innerHTML = "are"
    answer.style.color = 'red'
    btnAre.style.background = ' red'
    btnAre.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Não há muitas pessoas no shopping center hoje.'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate'
    }, 3000);
})



