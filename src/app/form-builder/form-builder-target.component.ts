import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { FormBuilderService } from './service/form-builder.service';
import { DnDFormConfig } from './type';

@Component({
  selector: 'app-form-builder-target',
  template: `
    <div
      cdkDropList
      [class]="listContainerClass"
      [class.hidden-placeholder]="service.dropInputs.length === 0"
      [cdkDropListData]="service.dropInputs"
      [class.list]="service.dropInputs.length > 0"
      (cdkDropListEntered)="_forcePreviewIconContainerHidden = true"
      (cdkDropListExited)="_forcePreviewIconContainerHidden = false"
      (cdkDropListDropped)="drop($event)"
    >
      <div
        cdkDrag
        *ngFor="
          let item of service.dropInputs;
          let isLast = last;
          let index = index
        "
        (mouseenter)="_mouserOverItemIndex = index"
        (mouseleave)="_mouserOverItemIndex = -1"
        [cdkDragData]="item"
        [class]="itemContainerClass"
      >
        <div
          class="form-builder-target-item {{ item.selected ? 'selected' : '' }}"
          (click)="handleSelect(item, $event)"
        >
          <!--
          cdkDragHandle must be a direct descendant of the cdkDrag item.
          E.g. we can't do this:
            <ng-template let-it #item>
              <mat-icon cdkDragHandle>drag_indicator</mat-icon> // won't work!
              <mat-icon>{{ it.item.dndIcon }}</mat-icon>
              <span>
                {{ it.item.templateOptions.label }}
              </span>
            </ng-template>
        -->
          <span cdkDragHandle *ngIf="dragHandleRef">
            <ng-container [ngTemplateOutlet]="dragHandleRef"></ng-container>
          </span>
          <ng-template
            [ngTemplateOutlet]="itemRef || null"
            [ngTemplateOutletContext]="{
              $implicit: {
                item,
                isHovered: _mouserOverItemIndex === index
              }
            }"
          >
          </ng-template>
        </div>
      </div>

      <!-- TODO apply transform scale animation when icon container disappears? -->
      <ng-container
        *ngIf="
          !_forcePreviewIconContainerHidden && service.dropInputs.length < 1
        "
      >
        <ng-template [ngTemplateOutlet]="placeholderRef || null"></ng-template>
      </ng-container>
    </div>

    <ng-template #body> </ng-template>
  `,
  styles: [':host {display: block;}'],
})
export class FormBuilderTargetComponent {
  constructor(public service: FormBuilderService) {}

  @ContentChild('item') itemRef?: TemplateRef<any>;
  @ContentChild('placeholder') placeholderRef?: TemplateRef<any>;
  @ContentChild('dragHandle') dragHandleRef?: TemplateRef<any>;

  @Input() listContainerClass: string = '';
  @Input() itemContainerClass: string = '';

  @Output() inputAdded = new EventEmitter<DnDFormConfig>();
  @Output() select = new EventEmitter<any>();

  _mouserOverItemIndex = -1;
  _forcePreviewIconContainerHidden = false;

  drop(event: CdkDragDrop<DnDFormConfig[]>): void {
    const item = this.service.handleDropEvent(event);
    if (item) this.inputAdded.next(item);
  }

  handleSelect(config: DnDFormConfig, event: any) {
    console.log(config , event);

    if (config) this.select.next(config);
  }
}
