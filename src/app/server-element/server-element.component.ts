import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges works');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
    //console.log('text content: ' + this.header.nativeElement.textContent);
    // console.log('text content: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('ng afterContentInit called');
    console.log(
      'text content of Paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked() {
    console.log('ng afterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ng afterViewInit called');
    console.log('text content: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ng afterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ng On Destroy called');
  }
}
