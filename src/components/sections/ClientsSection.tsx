
import ClientShowcase from "@/components/ClientShowcase";

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Trusted By <span className="text-blue-600 relative">
              Industry Leaders
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-1"></span>
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-center text-lg mt-4">
            I've had the privilege of working with these remarkable businesses, helping them transform their digital presence and automate their success.
          </p>
        </div>
        
        <ClientShowcase />
        
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
