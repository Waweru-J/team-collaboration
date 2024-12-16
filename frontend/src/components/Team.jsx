const Team = () => {
  const teamMembers = [
    {
      image: "/images/robert.jpg", // Replace with the actual image path
      name: "Robert Finn Kibachio",
      role: "Managing Director",
      description: "Visionary founder and CEO with 10+ years of experience in strategic business development.",
    },
    {
      image: "/images/nicholas.jpg", // Replace with the actual image path
      name: "Nicholas Kathiari",
      role: "Technical Director",
      description: "23 years of expertise in hardware, software, and business information technology.",
    },
    {
      image: "/images/patrick.jpg", // Replace with the actual image path
      name: "Patrick Mwirigi",
      role: "Project Manager",
      description: "Over 15 years of experience in technical project management and client service.",
    },
    {
      image: "/images/mercy.jpg", // Replace with the actual image path
      name: "Mercy",
      role: "General Manager",
      description: "Specialized in administration and risk management with 13 years of experience.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={member.image || "https://via.placeholder.com/150"}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
              <p className="text-gray-600 italic">{member.role}</p>
              <p className="text-gray-700 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
