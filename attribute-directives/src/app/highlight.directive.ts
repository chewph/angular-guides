/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[myHighlight]'
})
export class HighlightDirective{

	constructor(private el: ElementRef){
	}

	@Input('colour') defaultColor: string;

	@Input('myHighlight') highlightColor: string;

	/*
	* The @HostListener decorator lets you subscribe to events of the DOM element
	* that hosts an attribute directive, the <p> in this case.
	* */
	@HostListener('mouseenter') onMouseEnter(){
		this.highlight(this.highlightColor || this.defaultColor || 'red');
	}

	@HostListener('mouseleave') onMouseLeave(){
		this.highlight(null);
	}

	private highlight(color: string){
		this.el.nativeElement.style.backgroundColor = color;
	}
}
