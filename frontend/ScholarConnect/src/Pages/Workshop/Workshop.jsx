import { useEffect, useState } from "react";
import WorkshopCard from "./WorkshopCard";

const Workshop = () => {
  const [workshopData, setWorkshopData] = useState({});
  const [visibleWorkshops, setVisibleWorkshops] = useState(3);

  const url =
    "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/workshop";

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     console.log(res);
  //     setPublicationData(res.data);
  //   });
  // }, []);
  // console.log(workshopData);

  const Workshop = [
    {
      id: 1,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Something Comm",
      organisedBy: "Smith Doe",
      attendedOn: "2023-07-20",
      duration: "6 hrs",
      subject: "IT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "WIFI",
      organisedBy: "Payal Doe",
      attendedOn: "2022-12-11",
      duration: "3 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Training model",
      organisedBy: "SOme Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "ML",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const loadMoreWorkshops = () => {
    setVisibleWorkshops(visibleWorkshops + 3); // You can adjust the number as needed
  };

  const id = Workshop[0].id;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mt-4">Workshops</h1>
      <div className="flex flex-wrap justify-center">
        {Workshop.slice(0, visibleWorkshops).map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            id={workshop.id}
            title={workshop.title}
            organisedBy={workshop.organisedBy}
            attendedOn={workshop.attendedOn}
            duration={workshop.duration}
            subject={workshop.subject}
            summary={workshop.summary}
          />
        ))}
      </div>
      <div className="flex">
        {visibleWorkshops < Workshop.length && (
          <button
            className="mx-auto px-4 py-2 rounded-md bg-[#1D3792] text-white"
            onClick={loadMoreWorkshops}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Workshop;
