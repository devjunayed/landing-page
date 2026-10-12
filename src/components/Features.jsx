import { FiFileText, FiLayers } from "react-icons/fi";
import { FeatureCard } from "./shared/FeatureCard";
import { FaCalendarCheck } from "react-icons/fa6";
import { LuChartNoAxesCombined } from "react-icons/lu";

const Features = () => {
  const features = [
    {
      title: "AI Note Summaries",
      icon: <FiFileText />,
      subText:
        "Turn lengthy notes into clear, concise summaries and understand key concepts in less time.",
    },
    {
      title: "Smart Flashcards",
      icon: <FiLayers />,
      subText:
        "Remember what you learn with AI-powered flashcards designed to make revision easier and more effective.",
    },
    {
      title: "Study Planning",
      icon: <FaCalendarCheck />,
      subText:
        "Create personalized study schedules, organize your tasks, and stay on track with your learning goals.",
    },
    {
      title: "Progress Tracking",
      icon: <LuChartNoAxesCombined />,
      subText:
        "Monitor your learning progress, track completed tasks, and discover how far you've come.",
    },
  ];
  return (
    <div  className="flex flex-wrap gap-0 justify-center">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          icon={feature.icon}
          subText={feature.subText}
        />
      ))}
    </div>
  );
};

export default Features;
