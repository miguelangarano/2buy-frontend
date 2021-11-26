import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() inputType: string | undefined
  @Input() placeHolder: string | undefined
  @Input() img: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
