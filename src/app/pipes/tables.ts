import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tables',
    pure: false
})
export class TablesPipe implements PipeTransform {

    transform(value: any[], ...args) {
        return value.filter(item => {
            let found=true;
            let params= args[0].split(" ");
            params.forEach(function (param) {
                if(item.name.indexOf(param) === -1){
                    found=false;
                }
            });
            return found;
        });
    }
}
