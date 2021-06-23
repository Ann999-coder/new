import { Component } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-management';

  constructor(private titleService: Title, private meta: Meta)
  {
    titleService.setTitle('NOSCE Project Management System');
    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},true);
    meta.addTag({name: 'keywords', content: 'HR, employee management'},true);
    meta.addTag({name: 'author', content: 'NOSCE Technosolutions'},true);
  }
}
