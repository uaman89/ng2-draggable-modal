import {Component, OnInit, EventEmitter, Output, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {

  @Input() title: string;
  @Output() close: EventEmitter<any> = new EventEmitter();

  isDraggable: boolean = false;

  constructor(private element: ElementRef) {
    let style = element.nativeElement.style;
    style.position = "fixed";
    style.top = "20%";
    style.left = "50%";
    style["-webkit-transform"] = "translate(-50%, -50%)";
    style.transform = "translate(-50%, -50%)";
  }

  ngOnInit() { }

  emitClose(){
    this.close.emit();
  }
  
  draggable( isDraggable ){
    console.log("my-modal: isDraggable", isDraggable);
    this.isDraggable = isDraggable;

  }

}
