import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-titolo-cv',
  templateUrl: './titolo-cv.component.html',
  styleUrls: ['./titolo-cv.component.css']
})
export class TitoloCvComponent implements OnInit {

  isHidden = true;

  constructor() { }

  ngOnInit() {
  }

  getMouseOver(){
    this.isHidden = false;
  }
  getMouseOut(){
    this.isHidden = true;
  }

}
