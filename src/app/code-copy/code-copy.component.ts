// code-copy.component.ts

import { Component } from '@angular/core';
import { Box } from './box.interface';
import { boxes } from './boxes';

@Component({
  selector: 'app-code-copy',
  templateUrl: './code-copy.component.html',
  styleUrls: ['./code-copy.component.css'],
})
export class CodeCopyComponent {
  boxes: Box[] = boxes;

  copyCode(box: Box) {
    const textarea = document.createElement('textarea');
    textarea.value = `box-shadow: ${box.cssCode};`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    box.isCopied = true;

    setTimeout(() => {
      box.isCopied = false;
    }, 2000);
  }

  showSuccessMessage(box: Box) {
    if (box.isCopied) {
      // Logic to handle showing the success message
      console.log('Success message should be displayed');
    }
  }
}
