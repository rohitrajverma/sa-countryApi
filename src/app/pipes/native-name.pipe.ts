import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nativeName'
})

export class NativeNamePipe implements PipeTransform {
    transform(value: Object): string {
        if (value) {
            let arr: { official: string, common: string }[] = Object.values(value);
            let res = arr.map(x => x.common)
            return res.join(',  ');
        }
        return '';
    }
}