import { from } from "rxjs";
import { Observable } from "rxjs";

let numbers = [1, 3, 7, 10];

let source = Observable.create(observer => {
    for (let n of numbers) {
        observer.next(n);
    }
    observer.complete();
}); //from(numbers);

source.subscribe(
    value => console.log(`Value: ${value}`), //Next
    ex => console.error(`Error: ${ex}`),     //Error
    () => console.log('Complete!')           //Complete
);