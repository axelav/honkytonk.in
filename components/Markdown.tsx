import { CSS } from 'gfm'

export const MarkdownStyle = () => (
  <style>
    {`
      .markdown-body {
        background-color: #f9fafb; // gray-50
      }

      .markdown-body h1,
      .markdown-body h2,
      .markdown-body h3,
      .markdown-body h4,
      .markdown-body h5,
      .markdown-body h6 {
        margin: 16px 0;
      }

      .markdown-body img,
      .markdown-body iframe {
        margin: 0 auto 16px;
        border: 1px solid #f3f4f6; // gray-100
      }

      .markdown-body ul {
        list-style: disc;
      }

      .markdown-body ol {
        list-style: number;
      }

      .markdown-body a {
        color: #1d4ed8; // blue-700
        text-decoration: none;
      }

      ${CSS}
    `}
  </style>
)
