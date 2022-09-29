const input = document.querySelector('input')

const defaultText = document.getElementById('default')
const debounceText = document.getElementById('debounce')
const throttleText = document.getElementById('throttle')




const updateDecounceText = debounce((text) => {
    debounceText.textContent = text
})

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text
})

input.addEventListener('input', e => {
    defaultText.textContent = e.target.value
    updateDecounceText(e.target.value)
    updateThrottleText(e.target.value)

})

function debounce(callback, delay=1000) {

    let timer

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

function throttle(callback, delay=1000) {
    let shouldWait = false
    let lastArgs

    const timeout = () => {
        if (lastArgs == null) {
            shouldWait = false
        } else {
            callback(...lastArgs)
            lastArgs = null
            setTimeout(timeout, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            lastArgs = args
            return
        }
        callback(...args)
        shouldWait = true
        setTimeout(timeout, delay)
    }
}