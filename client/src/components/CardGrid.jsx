import React from "react";

const cards = [
    {
        title: "Total Publications This Year",
        description: "An overview of the number of publications released this year by our researchers and departments.",
      },
      {
        title: "Number of Patents Filed",
        description: "The total number of patents filed by the organization, showcasing innovation and intellectual property.",
      },
      {
        title: "Grants Received",
        description: "Details on the grants received for various research projects, contributing to scientific advancements.",
      },
      {
        title: "Startups Incubated",
        description: "A list of startups incubated, fostering innovation and entrepreneurship within the organization.",
      },
      {
        title: "Awards Won",
        description: "Recognition and awards won by the organization and its members for excellence in various fields.",
      },
      {
        title: "Research Impact Score",
        description: "An analysis of the research impact score, evaluating the reach and influence of the organization's research efforts.",
      },
];

const CardGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {cards.map((card, index) => (
        <a
          key={index}
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gradient-to-r from-indigo-200/30 to-indigo-100/10 bg-gray-900"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {card.description}
          </p>
        </a>
      ))}
    </div>
  );
};


export default CardGrid;
