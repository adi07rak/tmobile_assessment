import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, failedRemoveFromReadingList } from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(
    private readonly store: Store,
    private _snackBar: MatSnackBar  
  ) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    console.log(':::',item);
    const snackBarRef = this._snackBar.open(`${item.title} is removed from My Reading List`, 'Undo', {
      duration: 2000,
    });
    snackBarRef.onAction().subscribe(() => {
      this.store.dispatch(failedRemoveFromReadingList({ item }));
      console.log('The snack-bar action was triggered!::::', item);
    });
  }
}
