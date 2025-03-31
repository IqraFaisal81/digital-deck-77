
import ClientShowcase from "@/components/ClientShowcase";

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">
            Trusted By <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-center">
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
