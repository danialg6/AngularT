import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-mike',
    template: `
    <p>Mike Works</p>
    `
    ,
    styles: [`
        p {
            color: green
        }
`],
    encapsulation: ViewEncapsulation.None
})
export class MikeComponent {
    constructor() {
        this.log('constuctor');
    }
    private log(msg: string) {
        console.log(msg);
    }
    ngOnChanges() {
        this.log('ngOnChanges');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }

    ngDoCheck() {
        this.log('ngDoCheck');
    }

    ngAfterContentInit() {
        this.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        this.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        this.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        this.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        this.log('ngOnDestroy');
    }
}