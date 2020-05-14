import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap , map, catchError} from 'rxjs/operators';
import { Subscription, of } from 'rxjs';
import { IonSearchbar, NavController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnDestroy{
  searchTerm = new FormControl('');
  customers: any[];
  isLoading = false;
  private readonly subscriptions = new Subscription();
  @ViewChild('searchBar', { static: false }) searchBar: IonSearchbar;
  arr = [
    {name: 'Jonh', street: '2331 Sherman Way', phone: '123123123', email:'test' },
    {name: 'Test', street: '341 Sherman Way', phone: '123123123', email:'test' },

    {name: 'Aaaa', street: '123 Sheldon Way', phone: '123123123', email:'test' },

    {name: 'Bbsa', street: '546 Sherman Way', phone: '123123123', email:'test' },

    {name: 'ASd', street: '2342 Sherman Way', phone: '123123123', email:'test' },

    {name: 'asd', street: '2331 Sherman Way', phone: '123123123', email:'test' }

  ]
  constructor(
      public navCtrl: NavController,
      public platform: Platform
  ) {
      const sub = this.searchTerm.valueChanges
          .pipe(
              debounceTime(500),
              tap(() => (this.isLoading = true)),
              map(() => {
                return  this.arr.filter(element => {
                  return element.name.toLowerCase().split(' ').some(word => word.startsWith(this.searchTerm.value.toLowerCase()))
                });
              }),
              tap(() => (this.isLoading = false)),
              catchError(() => {
                  this.isLoading = false;
                  return of([]);
              }),
          )
          .subscribe((customers: any) => {
            console.log(customers)
              this.arr = customers;
          });
      this.subscriptions.add(sub);
  }

  ionViewDidEnter() {
      this.searchBar.setFocus();
  }
  ngOnDestroy() {
      this.subscriptions.unsubscribe();
  }
  get isAndroid() {
    return this.platform.is('android')
  }
}

