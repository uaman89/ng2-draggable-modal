/**
 * Created by polischuk on 20.12.2016.
 */
import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({selector: '[draggable]'})

export class Draggable implements OnInit{

    md:boolean = false; //flag
    topStart:number;
    leftStart:number;

    @Input() draggable: boolean = true;

    constructor(private element: ElementRef) {
        console.log("draggable!");
        if ( element.nativeElement.style.position !== '' ) {
            element.nativeElement.style.position = 'relative';
        }

        element.nativeElement.className += ' graggable';
    }

    ngOnInit() {
        // $("#modal").draggable();
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event:MouseEvent) {
        if(event.button === 2)
            return; // prevents right click drag, remove his if you don't want it

        console.log("[draggable]", this.draggable);

        if ( !this.draggable ){
            return;
        }

        this.md = true;

        this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px','');
        this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px','');
    }

    @HostListener('document:mouseup')
    onMouseUp(event:MouseEvent) {
        this.md = false;
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event:MouseEvent) {
        if(this.md){
            this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
            this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
        }
    }

}