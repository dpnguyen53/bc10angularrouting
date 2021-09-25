import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/services/share-data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  course: any;
  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.shareCourse.subscribe((result: any) => {
      console.log(result);
      this.course = result;
    })
  }

}
