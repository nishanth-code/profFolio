const WorkshopFormDetails = [
  {
    id: "title",
    type: "text",
    name: "workshop[title]",
    placeholder: "Title of Workshop",
    required: true,
  },
  {
    id: "organizedBy",
    type: "text",
    name: "workshop[organizedBy]",
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
    id: "subject",
    type: "text",
    name: "workshop[subject]",
    placeholder: "Subject of Workshop",
    required: true,
  },
];

export default WorkshopFormDetails;
