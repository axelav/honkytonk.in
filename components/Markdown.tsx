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

      .markdown-body img {
        margin-bottom: 16px;
        border: 1px solid #f3f4f6; // gray-100
      }

      .markdown-body ul {
        list-style: disc;
      }

    `}
  </style>
)
