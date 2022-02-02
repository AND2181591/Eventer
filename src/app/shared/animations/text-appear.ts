import { animate, animation, keyframes, style } from "@angular/animations";


export const textAppear = animation([
    style({
        opacity: '{{ startOpacity }}'
    }), 
    animate(
        '{{ time }}', 
        keyframes([
            style({ opacity: '{{ startOpacity }}' }), 
            style({ opacity: '{{ endOpacity }}' })
        ])
    )
]);