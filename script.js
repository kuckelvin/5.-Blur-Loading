const counter = document.querySelector(".counter")
const bg = document.querySelector(".bg")


loading = 0
rate = setInterval (blurring, 30)

function blurring() {
    loading++
    if (loading > 99) {
        clearInterval (rate)
    }
    counter.innerText = `${loading}%`
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
    counter.style.opacity = scale(loading, 0, 100, 1, 0) 
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }




// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers









