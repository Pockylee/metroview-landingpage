// app/page.tsx
import Header from "@/components/Header";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="hero flex-grow py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to MetroView</h1>
          <p className="text-xl mb-10">
            Your personal metro information assistant
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 text-lg">
            Download Now
          </button>
        </div>
      </section>
      <Features />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Stay Informed, Travel Smart
          </h2>
          <p className="text-xl mb-8">
            MetroView provides real-time updates and personalized alerts for
            your daily commute.
          </p>
          {/* Add more content or a call-to-action here */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
