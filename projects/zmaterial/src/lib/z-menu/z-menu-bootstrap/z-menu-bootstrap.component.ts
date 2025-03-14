import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Component, OnInit, Input, Output } from '@angular/core';
import {ZMenuBootstrapItens} from '../interfaces/z-menu-bootstrap-itens';
import {ZMenuProfileBootstrap} from '../interfaces/z-menu-itens-bootstrap-profile';

@Component({
    selector: 'z-menu-bootstrap',
    templateUrl: './z-menu-bootstrap.component.html',
    styleUrls: ['./z-menu-bootstrap.component.scss']
})

export class ZMenuBootstrapComponent implements OnInit {

    @Input() titleProject: string;

    @Input() itemsMenu: ZMenuBootstrapItens[];

    @Input() showLogout: boolean;

    @Input() profile: ZMenuProfileBootstrap;

    @Input() logoProject: string;

    @Output() logout = new Subject<boolean>();


    public isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches)
    );

    public hideSidebar = false;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.router.events.pipe(
            filter((event) => event instanceof ActivationStart)
        ).subscribe((event:ActivationStart)=> {
            if(event.snapshot.data.hideSideBar) {
                this.hideSidebar = event.snapshot.data.hideSidebar;
            }
        });
    }

}
