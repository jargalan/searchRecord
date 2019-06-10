import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'highLight'})
export class HighLightPipe implements PipeTransform {
    constructor() {}
    
    transform(content: string, keyword: string) {
        return content.replace(new RegExp(keyword, "gmi"), `<span class="highlight">${keyword}</span>`);
    }
}
