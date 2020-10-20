import { from } from "rxjs";
import { Observable } from "rxjs";

let numbers = [1, 3, 7, 10];

let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 2000);
        } else {
            observer.complete();
        }
    }
    produceValue();
    // for (let n of numbers) {
    //     observer.next(n);
    // }
    // observer.complete();
}); //from(numbers);

source.subscribe(
    value => console.log(`Value: ${value}`), //Next
    ex => console.error(`Error: ${ex}`),     //Error
    () => console.log('Complete!')           //Complete
);