import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SearchService } from '../../service/search.service';
import { Record } from '../../record';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  displayedColumns: string[] = ['id', 'text'];
  data: Record[] = [];
  keyword: string;

  resultsLength = 0;
  isLoadingResults = false;
  isAPIError = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private searchService: SearchService) {}

  fetchData(search: string | null) {
    this.keyword = search;
    this.paginator.pageIndex = 0;
    // merge(this.sort.sortChange, this.paginator.page)
    this.paginator.page.pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.searchService.getRecords(this.paginator.pageIndex, search);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isAPIError = false;
          this.resultsLength = data.total;

          return data.recordList;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isAPIError = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}




