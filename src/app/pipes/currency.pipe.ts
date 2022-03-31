import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currency'
})

export class CurrencyPipe implements PipeTransform {
    transform(value: Object): string {
        if (value) {
            let arr: { name: string, symbol: string }[] = Object.values(value);
            let res = arr.map(x => x.name)
            return res.join(',  ');
        }
        return '';
    }
}