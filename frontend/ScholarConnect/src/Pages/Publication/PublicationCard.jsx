import React, { useState } from "react";

import { formatDate } from "../../utils/dateFormater";

const PublicationCard = (props) => {
  return (
    <div className="text-white h-auto w-auto">
      <div className="bg-gradient-to-b pb-2 bg-[#550C6B]  h-auto w-72 z-10 rounded-xl my-10 mx-8">
        <div className="mx-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto opacity-75"
            src={props.profilePicture}
            alt="Prof"
          />
          <p className="my-3">{props.author}</p>
          {/* <Link to={`/profile/publication/edit/${id}`}>
            <div className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-20">
              <MdEdit />
            </div>
          </Link> */}
        </div>
        <p className="mx-4 my-2">Title: {props.title}</p>
        <p className="mx-4 my-2 text-gray-400">DOI: {formatDate(props.doi)}</p>
        <p className="mx-4 my-2 ">Subject: {props.subject}</p>
        <p className="mx-4 my-2">Media: {props.publishedMedia}</p>
        {/* Check if its book or journal and render accordingly */}
        <p className="mx-4 my-2 ">Volume: {props.volume}</p>
        <p className="mx-4 my-2 ">Year: {props.year}</p>
        <p className="mx-4 my-2 ">Publisher: {props.publisher}</p>
        <p className="mx-4 my-2 ">Editor: {props.editor}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 my-2 text-white hover:underline"
        >
          <span className="font-semibold text-white">URL: </span>
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;
