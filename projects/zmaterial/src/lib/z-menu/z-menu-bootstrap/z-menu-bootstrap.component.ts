import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'z-menu-bootstrap',
    templateUrl: './z-menu-bootstrap.component.html',
    styleUrls: ['./z-menu-bootstrap.component.scss']
})

export class ZMenuBootstrapComponent implements OnInit {

    @Input() titleProject: string;

    constructor() {}

    ngOnInit(): void {}

}
