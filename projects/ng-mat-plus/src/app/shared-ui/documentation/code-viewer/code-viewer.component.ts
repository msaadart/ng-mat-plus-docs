import { MatTooltip } from '@angular/material/tooltip';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibMatIconButtonComponent } from 'ng-mat-plus/lib-buttons';
import { LibToastService } from 'ng-mat-plus/services'
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

// Register languages
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule, LibMatIconButtonComponent, MatTooltip],
  template: `
    <div class="group relative w-full my-6">
      <!-- Header Bar -->
      <div class="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-t-xl border-b border-slate-700/50">
        <div class="flex items-center gap-3">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
          </div>
          <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">{{ language }}</span>
        </div>
        
        <lib-mat-icon-button
          (click)="copyCode()"
          tabindex="0"
          (keyup.enter)="copyCode()"
          aria-label="Copy code"
          [source]="'content_copy'"
          class="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          [color]="'dark'"
          [matTooltip]="'Copy Source Code'"
        >
        </lib-mat-icon-button>
      </div>

      <!-- Code Block -->
      <div class="relative bg-slate-900 rounded-b-xl overflow-hidden shadow-2xl border border-slate-800">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
        
        <pre class="m-0 overflow-x-auto text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"><code #codeElement class="relative block hljs language-{{language}} !bg-transparent p-6">{{ code() }}</code></pre>
        
        <!-- Line Numbers Overlay Effect -->
        <div class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-950/80 to-transparent pointer-events-none"></div>
      </div>

      <!-- Bottom Accent Line -->
      <div class="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  `,
  styles: [`
    @import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/tokyo-night-dark.min.css';

    /* Custom Scrollbar */
    .scrollbar-thin::-webkit-scrollbar {
      height: 8px;
    }
    
    .scrollbar-thin::-webkit-scrollbar-track {
      background: #0f172a;
      border-radius: 4px;
    }
    
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: #334155;
      border-radius: 4px;
      transition: background 0.3s;
    }
    
    .scrollbar-thin::-webkit-scrollbar-thumb:hover {
      background: #475569;
    }

    /* Enhanced Code Styling */
    code.hljs {
      font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
      font-size: 0.875rem;
      line-height: 1.7;
    }

    /* Smooth animations */
    * {
      transition: all 0.2s ease-in-out;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeViewerComponent implements AfterViewInit {
  private toastService = inject(LibToastService);
  code = input<string>('');
  @Input() language: string = 'typescript';
  @ViewChild('codeElement') codeElement!: ElementRef<HTMLElement>;

  constructor() {
    effect(() => {
      if (this.code()) {
        setTimeout(() => this.highlightCode());
      }
    });
  }

  ngAfterViewInit() {
    const codeBlocks = this.codeElement.nativeElement.querySelectorAll('pre code');
    codeBlocks.forEach((block: any) => {
      block.removeAttribute('data-highlighted');
      hljs.highlightElement(block);
    });
  }

  private highlightCode() {
    if (this.codeElement?.nativeElement) {
      hljs.highlightElement(this.codeElement.nativeElement);
    }
  }

  copyCode() {
    navigator.clipboard
      .writeText(this.code())
      .then(() => {
        this.toastService.success('Code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy code:', err);
        this.toastService.error('Failed to copy code');
      });
  }
}