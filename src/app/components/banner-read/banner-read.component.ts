import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-read',
  templateUrl: './banner-read.component.html',
  styleUrls: ['./banner-read.component.scss'],
})
export class BannerReadComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  explore():void{
    this.router.navigate(["/home/explore"])
  }

}
