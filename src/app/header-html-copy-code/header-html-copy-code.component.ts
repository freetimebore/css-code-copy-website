import { Component, OnDestroy, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { headerData } from './header-data';


@Component({
  selector: 'app-header-html-copy-code',
  templateUrl: './header-html-copy-code.component.html',
  styleUrls: ['./header-html-copy-code.component.css']
})
export class HeaderHtmlCopyCodeComponent {
  header2: any[] = headerData;
  reactiveForm: FormGroup;
  dynamicForm: FormGroup;

  outputMap: { [key: string]: SafeHtml } = {};


  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.reactiveForm = this.fb.group({
      name: [''],
      email: [''],
      subscribe: [false]
    });

    this.dynamicForm = this.fb.group({
      name: [''],
      email: [''],
      subscribe: [false]
    });

    // Initialize HTML content for each form in header
    this.header2.forEach(form => {
      this.getTrustedHtml2(form);
    });

    // Initialize HTML content for each form in header2

  }



  getTrustedHtml2(form: any): SafeHtml {

    const output = this.sanitizer.bypassSecurityTrustHtml(form.code);

    // Use form.name as a key to store HTML content in outputMap2 for header2
    this.outputMap[form.name] = output;

    return output;
  }

  copyToClipboard(index: number, isheader2: boolean = false) {
    const selectedheader = this.header2;
    const selectedOutputMap = this.outputMap;

    const textArea = document.createElement('textarea');
    textArea.value = selectedheader[index].code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    document.body.removeChild(textArea);

    // Update the isCopied property for the selected form
    selectedheader[index].isCopied = true;

    console.log('Copied content:', selectedOutputMap[selectedheader[index].name]);
  }

}
