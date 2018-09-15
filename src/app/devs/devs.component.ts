import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {DevsService} from "../devs.service";

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit, OnDestroy {
  private sub : Subscription;
  private language : string;
  devs : any = [];

  constructor(private route: ActivatedRoute, private devsService: DevsService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.language = params['language']; 

      this.devsService.getDevs(this.language).subscribe(devs => {
        this.devs = devs;
      });

    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}