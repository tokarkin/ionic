import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {shareReplay, debounceTime, filter, tap , switchMap, map, catchError, withLatestFrom} from 'rxjs/operators';
import { Subscription, of } from 'rxjs';
import { IonSearchbar, NavController, ModalController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnDestroy{
 
  searchTerm = new FormControl('');
  customers;
  isLoading = false;
  // states$ = this.commonOffline.getStates(1, { forceCached: true }).pipe(shareReplay());
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
      public modalCtrl: ModalController,
      public platform: Platform
  ) {
      const sub = this.searchTerm.valueChanges
          .pipe(
              debounceTime(500),
              tap(() => (this.isLoading = true)),
              // switchMap(term => this.customerService.getCustomerQuery(term)),
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
              // withLatestFrom(this.states$)
          )
          .subscribe((customers: any) => {
            console.log(customers)
              this.arr = customers
                  // .filter(f => f.CrmObjectTypeId === CrmObjectTypeEnum.Customers)
                  // .map(customer => {
                  //     if (customer.State) {
                  //         const stateObject = states.find(el => el.Name === customer.State);
                  //         customer.State = stateObject ? stateObject.Abbreviation : customer.State;
                  //     }
                  //     return customer;
                  // });
          });
      this.subscriptions.add(sub);
      this.subscriptions.add(
          // this.network.isOnline$.subscribe(online => {
          //     if (online) {
          //         this.searchTerm.enable();
          //     } else {
          //         this.isLoading = false;
          //         this.searchTerm.disable();
          //     }
          // })
      );
  }

  // ionViewDidEnter() {
  //     this.searchBar.setFocus();
  // }

  selectCustomer(customer: any) {
      this.searchTerm.setValue(customer.CustomerName, { emitEvent: false });
      customer.PhoneNumber = customer['Phone'];
      this.modalCtrl.dismiss(customer);
  }

  ngOnDestroy() {
      this.subscriptions.unsubscribe();
  }
  get isAndroid() {
    return this.platform.is('android')
  }
}

