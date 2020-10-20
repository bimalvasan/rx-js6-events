import { from } from "rxjs";
import { Observable } from "rxjs";

let numbers = [1, 3, 7, 10];

let source = from(numbers);

source.subscribe(
    value => console.log(`Value: ${value}`), //Next
    ex => console.error(`Error: ${ex}`),     //Error
    () => console.log('Complete!')           //Complete
);