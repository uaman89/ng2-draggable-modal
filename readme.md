for draggable.ts used https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts

# draggable modal window using Angular2 & Bootstrap4.

### Usage:

1. import to your module:

    import { MyModalComponent } from '../shared/my-modal/my-modal.component';
    import { Draggable } from '../shared/draggable';
    
    ...

    @NgModule({
        declarations: [
            ...
            Draggable,
            MyModalComponent
        ],
        ...
    });
    
2. html code:

    <my-modal title="My modal window!" *ngIf="isShowModal" (close)="hideModal()">
        Your content here!
    </my-modal>
    
    * use *ngIf directive to show/hide modal window.
    * the (close) event fires when press close button.
    