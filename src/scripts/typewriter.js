let asciiArt = String.raw ` 
__        __  __     ____
\ \      / / / /__  / / /___
 \ \    / /_/ / _ \/ / / __ \ 
 / /   / __  /  __/ / / /_/ / 
/_/   /_/ /_/\___/_/_/\____( )
		           |/
 _       __           __    ____
| |     / /___  _____/ /___/ / /
| | /| / / __ \/ ___/ / __  / / 
| |/ |/ / /_/ / /  / / /_/ /_/  
|__/|__/\____/_/  /_/\__,_(_)
`; /* I use String.raw, since backslash(\) without it will be automatically parsed as an escape character, because of which the ASCII drawing will be drawn without '\', as they will bne not valid operations */

const el = document.getElementById('typewriter');
let i = 0;

function type() {
    if (i < asciiArt.length) {
        el.textContent += asciiArt[i];
        i++;
        setTimeout(type, 8) // in milliseconds
    }
}

type();