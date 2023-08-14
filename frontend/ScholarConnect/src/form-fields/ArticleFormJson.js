const ArticleFormDetails = [
  {
    id: "title",
    type: "text",
    name: "publication[title]",
    placeholder: "Title of Article",
    required: true,
  },
  {
    id: "author",
    type: "text",
    name: "publication[author]",
    placeholder: "Author of Article",
    required: true,
  },
  {
    id: "publishedMedia",
    type: "text",
    name: "publication[publishedMedia]",
    placeholder: "Published Media",
    required: true,
  },
  {
    id: "publishedOn",
    type: "date",
    name: "publication[ publishedOn]",
    placeholder: "Published On",
    required: true,
  },
  {
    id: "subject",
    type: "text",
    name: "publication[subject]",
    placeholder: "Subject of Article",
    required: true,
  },
];

export default ArticleFormDetails;
