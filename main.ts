import { fromEvent } from "rxjs";
import { filter, map } from 'rxjs/operators';

let circle = document.getElementById('circle');

let source = fromEvent(document, 'mousemove')
    .pipe(map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    }), filter(value => value.x < 500));

function onNext(value) {
    circle.style.left = value.x.toString();
    circle.style.right = value.y.toString();
}
source.subscribe(
    onNext,                                  //Next
    ex => console.error(`Error: ${ex}`),     //Error
    () => console.log('Complete!')           //Complete
);