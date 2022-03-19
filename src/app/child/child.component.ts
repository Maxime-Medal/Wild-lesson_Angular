import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() isLogged = false; //valeur par default ou boolean | undefined
  @Output() greetEvent = new EventEmitter();
  name = 'maxou';

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }

  constructor() {}

  ngOnInit(): void {}
}
