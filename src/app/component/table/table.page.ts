import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: 'table.page.html',
  styleUrls: ['table.page.scss']
})
export class TablePage {
  photoArray = [
    {photo: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85'}
    ,
    {photo: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85'},
    {photo: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85'},
    {photo: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85'}
    ,
    {photo: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85'},
    {photo: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85'},
    {photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQK4VRGURFgHBsHIYB7v8am8LO666ie646D5t_9PaPRJi5Z4d9e&usqp=CAU'},
    {photo:'https://i.ytimg.com/vi/-1E_Fjpqyjk/hqdefault.jpg' },
    {photo: 'https://i.pinimg.com/originals/19/43/18/19431859261e12c5ba63da8f57b776ee.jpg'},
    {photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEYMgvKJ338uluZ2NvM1OKNYvb-2dWO2WY6VU_nv4PGBfkMHTL&usqp=CAU'}
  ]
  constructor( ) {
  }
}
