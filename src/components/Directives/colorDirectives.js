let interval;
let color1;

const mouseover = event => {
    event.target.style.color = 'purple'
}

const mouseout = event => {
    event.target.style.color = color1;
}

export default {
    mounted(el, binding) {
        // el.style.color = binding.value
        el.style[binding.arg] = binding.value
        color1 = binding.value;

        if (binding.modifiers.blink1) {
            let item = true;
            interval = setInterval(() => {
                el.style.color = item ? 'white' : binding.value
                item = !item
            }, 1500)
        }
        if (binding.modifiers.hover) {
            el.addEventListener('mouseover', mouseover)
            el.addEventListener('mouseout', mouseout)
        }
    },

     updated(el, binding) {
        // console.log(el),
        // console.log(binding)
        el.style[binding.arg] = binding.value
        
    },
     
    unmounted(el) {
        console.log('unmounted');
        if (interval) {
            clearInterval(interval)
        }
        el.addEventListener('mouseover', mouseover)
        el.addEventListener('mouseout', mouseout)
    },
}