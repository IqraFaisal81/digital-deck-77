
import ClientShowcase from "@/components/ClientShowcase";

const ClientsSection = () => {
  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Trusted by</span>
          <span className="ml-2 bg-gradient-to-r from-[#ff3a3a] to-[#ff3a3a]/80 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <ClientShowcase />
      </div>
    </section>
  );
};

export default ClientsSection;
