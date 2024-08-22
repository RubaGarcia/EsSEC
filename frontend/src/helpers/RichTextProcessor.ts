import { RichText } from "../types";

export function renderRichText(node: RichText): string {
    switch (node.nodeType) {
      case 'document':
        return node.content ? node.content.map(renderRichText).join('') : '';
      case 'paragraph':
        return `<p class="mb-4">${node.content ? node.content.map(renderRichText).join('') : ''}</p>`;
      case 'text':
        let text = node.value || '';
        if (node.marks) {
          node.marks.forEach(mark => {
            switch (mark.type) {
              case 'bold':
                text = `<strong class="font-bold">${text}</strong>`;
                break;
              case 'italic':
                text = `<em class="italic">${text}</em>`;
                break;
              case 'underline':
                text = `<u class="underline">${text}</u>`;
                break;
            }
          });
        }
        return text;
      case 'unordered-list':
        return `<ul class="list-disc list-inside pl-6">${node.content ? node.content.map(renderRichText).join('') : ''}</ul>`;
      case 'list-item':
        return `<li>${node.content ? node.content.map(renderRichText).join('') : ''}</li>`;
      default:
        return '';
    }
  }