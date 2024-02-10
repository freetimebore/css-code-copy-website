import { Component, OnDestroy, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { Editor } from 'ngx-editor';
import { formsData2 } from './form-data';


@Component({
  selector: 'app-form-html-copy-code',
  templateUrl: './form-html-copy-code.component.html',
  styleUrls: ['./form-html-copy-code.component.css']
})
export class FormHtmlCopyCodeComponent {

  forms2: any[] = formsData2;
  reactiveForm: FormGroup;
  dynamicForm: FormGroup;
  // editors: Editor[] = [];

  // Add @ViewChildren to get a reference to Editor components
  // @ViewChildren(Editor) editorComponents!: QueryList<Editor>;

  // Map to store HTML output for each form
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

    // Initialize HTML content for each form in forms
    this.forms2.forEach(form => {
      this.getTrustedHtml2(form);
    });

    // Initialize HTML content for each form in forms2

  }



  getTrustedHtml2(form: any): SafeHtml {

    const output = this.sanitizer.bypassSecurityTrustHtml(form.code);

    // Use form.name as a key to store HTML content in outputMap2 for forms2
    this.outputMap[form.name] = output;

    return output;
  }

  copyToClipboard(index: number, isForms2: boolean = false) {
    const selectedForms = this.forms2;
    const selectedOutputMap = this.outputMap;

    const textArea = document.createElement('textarea');
    textArea.value = selectedForms[index].code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    document.body.removeChild(textArea);

    // Update the isCopied property for the selected form
    selectedForms[index].isCopied = true;

    console.log('Copied content:', selectedOutputMap[selectedForms[index].name]);
  }

  // ngOnDestroy(): void {
  //   this.editors.forEach(editor => editor.destroy());
  // }

  // ngAfterViewInit(): void {
  //   // Here you can access the ngx-editor instances after the view has been initialized
  //   this.editorComponents.toArray().forEach(editor => {
  //     // Do any specific configuration or manipulation with each editor instance
  //   });
  // }

  // onEditorCreated(editor: Editor) {
  //   this.editors.push(editor);
  // }
}