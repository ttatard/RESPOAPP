// AboutUs.js

import React from 'react';

// TeamMember component to represent each team member
const TeamMember = ({ name, role, description }) => (
  <li>
    <strong>{name}:</strong> {description}
  </li>
);

// FeatureItem component to represent each feature of RESPO
const FeatureItem = ({ title, description }) => (
  <li>
    <strong>{title}:</strong> {description}
  </li>
);

const AboutUs = () => {
  return (
    <div>
      <h1>About RESPO: Your Trusted Emergency Response Companion</h1>

      <p>
        Welcome to RESPO, your reliable partner in emergency situations. Born and bred in the vibrant city of Cebu, RESPO is more than just an application; it's a commitment to the safety and well-being of our community.
      </p>

      <h2>Our Mission:</h2>
      <p>
        At RESPO, our mission is crystal clear — to create a safer and more connected community by providing swift and efficient emergency response services. We believe that every second counts in times of crisis, and our dedicated team is here to ensure that help is just a tap away.
      </p>

      <h2>Meet the Team:</h2>
      <ul>
        <TeamMember
          name="Mike Lawrence Alpas"
          description="The visionary mind behind RESPO, Mike Lawrence Alpas brings a wealth of experience in technology and a passion for leveraging it to benefit society. His commitment to creating positive change in emergency response services is the driving force behind RESPO's innovation."
        />
        <TeamMember
          name="Kenneth Orland Ayade"
          description="Kenneth Orland Ayade is the tech wizard behind RESPO's seamless functionality. With a keen eye for detail and a knack for problem-solving, Kenneth ensures that our application is not just user-friendly but also technologically advanced to meet the ever-evolving demands of emergency situations."
        />
        <TeamMember
          name="Godwin Sanjorjo"
          description="Godwin Sanjorjo, the heart and soul of RESPO, is dedicated to building strong community connections. His background in community engagement and passion for social impact drive RESPO's commitment to not only responding to emergencies but also fostering a sense of unity and support within the community."
        />
        <TeamMember
          name="Richard Molina"
          description="As the operations guru, Richard Molina ensures that RESPO's emergency response systems are not only effective but also efficient. His experience in logistics and operations management guarantees that help reaches those in need in the shortest possible time, minimizing the impact of emergencies."
        />
      </ul>

      <h2>Why RESPO:</h2>
      <ul>
        <FeatureItem
          title="Swift Response"
          description="Our advanced technology ensures that emergency services are dispatched promptly, reducing response times to a minimum."
        />
        <FeatureItem
          title="Community-Centric Approach"
          description="RESPO is more than an app; it's a community-driven initiative, fostering a sense of solidarity among residents."
        />
        <FeatureItem
          title="User-Friendly Design"
          description="We understand that in emergencies, simplicity is key. RESPO is designed to be intuitive and easy to use, ensuring that help is accessible to everyone."
        />
        <FeatureItem
          title="Continuous Innovation"
          description="RESPO is not just a one-time solution; we are committed to continuous improvement and innovation to stay ahead in the ever-changing landscape of emergency response services."
        />
      </ul>

      <p>
        Join us in making Cebu a safer place to live. Download RESPO today and be part of the movement towards a more secure and connected community. Your safety is our priority.
      </p>
    </div>
  );
};

export default AboutUs;
