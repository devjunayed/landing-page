const HowItWorksCard = ({ title, description }) => {
  return (
    <div className="card w-96 bg-base-100 card-sm ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Upload Your Notes",
      subText:
        "Upload your study materials and let AI organize your content into clear, easy-to-understand notes.",
    },
    {
      title: "Generate a Study Plan",
      subText:
        "Get a personalized study schedule based on your goals, subjects, and available study time.",
    },
    {
      title: "Start Learning",
      subText:
        "Practice with smart flashcards, review key concepts, and track your progress as you learn.",
    },
  ];

  return (
    <ul className="timeline timeline-vertical">
      {steps.map((step, index) => (
        <>
          <li key={index}>
            <hr />
            <div
              className={`${index % 2 == 0 ? "timeline-start" : "timeline-end"} timeline-box`}
            >
              <HowItWorksCard
                key={index}
                title={step.title}
                description={step.subText}
              />
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
        </>
      ))}
    </ul>
  );
};

export default HowItWorks;
