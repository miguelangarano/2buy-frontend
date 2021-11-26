import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-pink',
  templateUrl: './btn-pink.component.html',
  styleUrls: ['./btn-pink.component.css']
})
export class BtnPinkComponent implements OnInit {
  
  constructor() { }
  @Input() name: string | undefined
  ngOnInit(): void {
  }

}
