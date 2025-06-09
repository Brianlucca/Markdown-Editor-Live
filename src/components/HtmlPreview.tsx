import React, { forwardRef } from 'react';
import { marked } from 'marked';

interface HtmlPreviewProps {
  markdownText: string;
}

const HtmlPreview = forwardRef<HTMLDivElement, HtmlPreviewProps>(
  ({ markdownText }, ref) => {
    const getMarkdownHtml = () => {
      const rawMarkup = marked.parse(markdownText, { 
        breaks: true, 
        gfm: true, 
        pedantic: false 
      }) as string;
      return { __html: rawMarkup };
    };

    return (
      <div
        ref={ref}
        className="w-full h-full p-6 overflow-y-auto prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none bg-gray-900 text-gray-300 focus:outline-none"
        dangerouslySetInnerHTML={getMarkdownHtml()}
      />
    );
  }
);

HtmlPreview.displayName = 'HtmlPreview';
export default HtmlPreview;