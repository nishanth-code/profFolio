const WorkshopFormDetails = [
  {
    id: "title",
    type: "text",
    name: "publication[title]",
    placeholder: "Title of Workshop",
    required: true,
  },
  {
    id: "organisedBy",
    type: "text",
    name: "publication[organisedBy]",
    placeholder: "Organiser of Workshop",
    required: true,
  },
  {
    id: "attendedOn",
    type: "date",
    name: "publication[attendedOn]",
    placeholder: "Attended On",
    required: true,
  },
  {
    id: "duration",
    type: "number",
    name: "publication[duration]",
    placeholder: "Duration of Workshop",
    required: false,
  },
  {
    id: "subject",
    type: "text",
    name: "publication[subject]",
    placeholder: "Subject of Workshop",
    required: true,
  },
];

export default WorkshopFormDetails;
