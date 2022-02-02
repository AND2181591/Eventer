import { animate, animation, keyframes, style } from "@angular/animations";


export const cardAppear = animation([
    style({
        opacity: '{{ startOpacity }}'
    }), 
    animate(
        '{{ time }}', 
        keyframes([
            style({ opacity: '{{ startOpacity }}', transform: '{{ startTransform }}' }), 
            style({ opacity: '{{ endOpacity }}', transform: '{{ endTransform }}' })
        ])
    )
]);