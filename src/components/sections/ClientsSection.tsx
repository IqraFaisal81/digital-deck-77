
import ClientShowcase from "@/components/ClientShowcase";

const ClientsSection = () => {
  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto">
        <ClientShowcase />
      </div>
    </section>
  );
};

export default ClientsSection;
