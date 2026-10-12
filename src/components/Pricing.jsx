import PricingCard from "./shared/PricingCard";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      description: "Perfect for getting started with smarter learning.",
      features: [
        { text: "5 AI note summaries per month", included: true },
        { text: "Basic flashcard generation", included: true },
        { text: "Basic study planning", included: true },
        { text: "Progress tracking", included: true },
        { text: "Unlimited AI summaries", included: false },
        { text: "Advanced learning analytics", included: false },
      ],
      buttonText: "Get Started Free",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9",
      period: "/month",
      description: "Everything you need to study smarter and faster.",
      features: [
        { text: "Unlimited AI note summaries", included: true },
        { text: "Smart flashcard generation", included: true },
        { text: "Personalized study plans", included: true },
        { text: "Detailed progress tracking", included: true },
        { text: "Unlimited AI summaries", included: true },
        { text: "Advanced learning analytics", included: false },
      ],
      buttonText: "Upgrade to Premium",
      popular: true,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Advanced tools for ambitious learners and students.",
      features: [
        { text: "Unlimited AI note summaries", included: true },
        { text: "Advanced smart flashcards", included: true },
        { text: "Personalized study plans", included: true },
        { text: "Detailed progress tracking", included: true },
        { text: "Priority AI processing", included: true },
        { text: "Advanced learning analytics", included: true },
      ],
      buttonText: "Get Pro",
      popular: false,
    },
  ];
  return (
    <div className="flex justify-center gap-4">
      {pricingPlans.map((plan, index) => (
        <PricingCard
          key={index}
          features={plan.features}
          price={plan.price}
          period={plan.period}
          buttonText={plan.buttonText}
          name={plan.name}
          popular={plan.popular}
        />
      ))}
    </div>
  );
};

export default Pricing;
