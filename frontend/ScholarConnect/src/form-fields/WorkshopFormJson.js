const WorkshopFormDetails = [
  {
    id: "title",
    type: "text",
    name: "workshop[title]",
    placeholder: "Title of Workshop",
    required: true,
  },
  {
    id: "organisedBy",
    type: "text",
    name: "workshop[organisedBy]",
    placeholder: "Organiser of Workshop",
    required: true,
  },
  {
    id: "attendedOn",
    type: "date",
    name: "workshop[attendedOn]",
    placeholder: "Attended On",
    required: true,
  },
  {
    id: "duration",
    type: "text",
    name: "workshop[duration]",
    placeholder: "Duration of Workshop",
    required: false,
  },
  {
    id: "subject",
    type: "text",
    name: "workshop[subject]",
    placeholder: "Subject of Workshop",
    required: true,
  },
];

export default WorkshopFormDetails;
