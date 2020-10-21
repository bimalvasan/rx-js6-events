import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';

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
}).pipe(map(n => n * 2), filter(n => n > 4));

source.subscribe(
    value => console.log(`Value: ${value}`), //Next
    ex => console.error(`Error: ${ex}`),     //Error
    () => console.log('Complete!')           //Complete
);