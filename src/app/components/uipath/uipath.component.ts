import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-uipath',
  templateUrl: './uipath.component.html',
  styleUrls: ['./uipath.component.css']
})
export class UiPathComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    document.getElementById('title')?.scrollIntoView(true);
  }

}
