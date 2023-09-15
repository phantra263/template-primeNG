import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
// export class BacklogComponent implements OnInit {
//   listData: any = [];
//   listOpen: any = [
//     {
//       "id": 1,
//       "name": 'task1',
//       "description": 'des1'
//     },
//     {
//       "id": 2,
//       "name": 'task2',
//       "description": 'des2'
//     },
//   ];
//   listProcess: any = [
//     {
//       "id": 3,
//       "name": 'task3',
//       "description": 'task3'
//     },
//     {
//       "id": 4,
//       "name": 'task4',
//       "description": 'task4'
//     },
//   ];
//   draggedCard: any = {};

//   constructor() { }

//   ngOnInit() {
//   }

//   dragStart(card: any) {
//     this.draggedCard = card;
//   }

//   drop() {
//       if (this.draggedCard) {
//         this.listProcess = [...this.listProcess, this.draggedCard];
//         this.listOpen = this.listOpen.filter((item:any) => item.id != this.draggedCard.id);
//         this.draggedCard = null;
//       }
//   }

//   dragEnd() {
//       this.draggedCard = null;
//   }

//   dragEnter(event: Event) {
//     console.log(event)
//   }

//   findIndex(product: any) {
//     let index = -1;
//     for(let i = 0; i < this.listOpen.length; i++) {
//         if (product.id === this.listOpen[i].id) {
//             index = i;
//             break;
//         }
//     }
//     return index;
//   }
// }


export class BacklogComponent {
  list1: string[] = ['Item 1', 'Item 2', 'Item 3'];
  list2: string[] = ['Item 4', 'Item 5', 'Item 6'];

  onDrop(event: CdkDragDrop<string[]>, targetList: string[]) {
    if (event.previousContainer === event.container) {
      // Move within the same list
      this.moveItemInList(targetList, event.previousIndex, event.currentIndex);
    } else {
      // Move between lists
      this.transferItemBetweenLists(targetList, event.previousContainer.data, event.previousIndex, event.currentIndex);
    }
  }

  private moveItemInList(list: string[], startIndex: number, endIndex: number) {
    const [movedItem] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, movedItem);
  }

  private transferItemBetweenLists(
    targetList: string[],
    sourceList: string[],
    startIndex: number,
    endIndex: number
  ) {
    const [movedItem] = sourceList.splice(startIndex, 1);
    targetList.splice(endIndex, 0, movedItem);
  }
}


