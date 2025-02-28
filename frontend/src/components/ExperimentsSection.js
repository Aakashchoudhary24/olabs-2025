import Card from "@/components/Card";

const experiments = [
  { title: "Physics Lab", description: "Explore physics experiments online." },
  { title: "Chemistry Lab", description: "Perform virtual chemistry experiments." },
  { title: "Biology Lab", description: "Learn about biology with interactive simulations." },
];

export default function ExperimentsSection() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Experiments</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {experiments.map((exp, index) => (
          <Card key={index} title={exp.title} description={exp.description} />
        ))}
      </div>
    </section>
  );
}
