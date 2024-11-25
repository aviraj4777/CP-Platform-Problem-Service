const marked = require('marked'); // Convert markdown to HTML
const sanitizeHtmlLib = require('sanitize-html'); // convert HTML to malicious free html (it only keeps the tags required)
const TurndownService = require('turndown'); // converts HTML back to markdown

function sanitizeMarkdownContent(markdownContent) {
    const turnDownService = new TurndownService();

    // 1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    
    // 2. Sanitize html
    const sanitizedHtml = sanitizeHtmlLib(convertedHtml, {allowedTags: sanitizeHtmlLib.defaults.allowedTags});
  
    // 3. Convert the sanitizedHtml back to markdown
    const sanitizedMarkdown = turnDownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;