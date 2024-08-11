// src/components/Features.tsx (continued)
import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Real-time Updates",
      description:
        "Get up-to-the-minute information on metro schedules and delays.",
      icon: "/icons/clock.svg", // You'll need to add these icons to your public folder
    },
    {
      title: "Customizable Alerts",
      description: "Set personalized notifications for your frequent routes.",
      icon: "/icons/bell.svg",
    },
    {
      title: "Route Planning",
      description: "Plan your journey with our intelligent route suggestions.",
      icon: "/icons/map.svg",
    },
    {
      title: "Offline Access",
      description:
        "Access essential information even without an internet connection.",
      icon: "/icons/wifi-off.svg",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
