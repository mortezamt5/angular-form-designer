import { Component, OnInit } from '@angular/core';
import {
  FormComponentCategory,
  FormComponentDto,
} from './types/form-component-dto';
import { FORM_COMPONENTS } from './types/form-designer-data';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.scss'],
})
export class FormDesignerComponent implements OnInit {
  sections = Object.values(FormComponentCategory);
  data = FORM_COMPONENTS;
  selectedData: FormComponentDto[] =[];
  ngOnInit(): void {
    console.log(this.sections);
  }
  getBoxComponentsByCategory(cat: string) {
    return FORM_COMPONENTS.filter((f) => f.category === cat);
  }
  drop(event: any) {
    console.log(event);

    const current = event.item.data;
    this.selectedData.push(current);
    // console.log(current);



    // if (event.previousContainer === event.container) {
    //   moveItemInArray(
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // } else {
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
}
