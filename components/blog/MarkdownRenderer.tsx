'use client';

import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const parseMarkdown = (md: string): string => {
    let html = md.trim();

    // Code blocks (```language ... ```)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_match, lang, code) => {
      const escapedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .trim();
      return `<div class="code-block-wrapper"><pre class="code-block"><code class="language-${lang || 'text'}">${escapedCode}</code></pre></div>`;
    });

    // Inline code (`code`)
    html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Headings
    html = html.replace(/^### (.+)$/gm, '<h3 class="blog-h3">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="blog-h2">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1 class="blog-h1">$1</h1>');

    // Bold and italic
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Unordered lists
    html = html.replace(/^- (.+)$/gm, '<li class="blog-li">$1</li>');
    html = html.replace(/((?:<li class="blog-li">.*<\/li>\n?)+)/g, '<ul class="blog-ul">$1</ul>');

    // Ordered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li class="blog-li-ordered">$1</li>');
    html = html.replace(/((?:<li class="blog-li-ordered">.*<\/li>\n?)+)/g, '<ol class="blog-ol">$1</ol>');

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr class="blog-hr" />');

    // Paragraphs - wrap remaining text lines
    const lines = html.split('\n');
    const result: string[] = [];
    let inBlock = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith('<div') || line.startsWith('<pre') || line.startsWith('<ul') || line.startsWith('<ol')) {
        inBlock = true;
      }
      if (line.startsWith('</div>') || line.startsWith('</pre>') || line.startsWith('</ul>') || line.startsWith('</ol>')) {
        inBlock = false;
      }

      if (
        !inBlock &&
        line.length > 0 &&
        !line.startsWith('<h') &&
        !line.startsWith('<li') &&
        !line.startsWith('<ul') &&
        !line.startsWith('<ol') &&
        !line.startsWith('<hr') &&
        !line.startsWith('<div') &&
        !line.startsWith('<pre') &&
        !line.startsWith('</')
      ) {
        result.push(`<p class="blog-p">${line}</p>`);
      } else {
        result.push(line);
      }
    }

    return result.join('\n');
  };

  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
};
