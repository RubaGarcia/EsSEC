import { RichText } from "../types";

export function renderRichText(input: RichText | string): string {
    // Si la entrada es una cadena de texto, simplemente la devolvemos envuelta en un párrafo.
    if (typeof input === 'string') {
      const paragraphs = input.split("\n").filter((p) => p.trim() !== "");
        return `<p><p>${paragraphs}</p></p>`;
    }

    // Asumimos que la entrada es un objeto de tipo RichText si no es una cadena.
    const node = input as RichText;

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
