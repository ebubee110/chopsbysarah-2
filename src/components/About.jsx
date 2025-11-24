import { BiShield } from 'react-icons/bi';
import { GiThreeLeaves } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';

// import React from 'react';

// function About() {
//   return (
// <section id="about" className="container mx-auto px-4 py-16">
//   <h2 className="text-3xl font-bold text-green-700 mb-6">About Us</h2>
//   <p className="mb-4">
//     Chopsbysarah is a culinary concept that is aimed at satisfying your
//     sweet and tasty cravings. We make cakes for every occasion, small chops
//     platters, pastries, yoghurts, parfaits, tigernut drinks, banana bread,
//     and we also offer indoor & outdoor catering services.
//   </p>
//   <p className="mb-4">
//     Our journey started when Sarah left her white-collar job to follow her
//     passion for baking and catering. What makes us unique is that we use the
//     finest ingredients without artificial preservatives, making our food
//     healthier and more affordable.
//   </p>
//   <p className="mb-4 italic">
//     “Our mission is to cook the world into a better place.”
//   </p>
// </section>
//   );
// }

// export default About;

import React from 'react';
// import Icon from '../../../components/AppIcon';
// import { Home } from 'lucide-react';
import AppIcon from './UI/AppIcon';
import Icon from '../components/UI/AppIcon';
import { Section } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      id: 1,
      icon: <GiThreeLeaves size={30} color="green" />,
      title: 'Fresh Ingredients',
      description: 'We source only the finest, freshest ingredients...',
    },
    {
      id: 2,
      icon: <BiShield size={30} color="green" />,
      title: 'Quality Assured',
      description: 'Every product goes through strict quality checks...',
    },
    {
      id: 3,
      icon: <FaUsers size={30} color=" green" />,
      title: 'Customer First',
      description: '24/7 customer support and personalized service...',
    },
  ];

  return (
    <section>
      <section id="about" className="container mx-auto px-4 lg:px-32 py-16">
        <h1 className="text-3xl font-bold uppercase text-emerald-700 mb-6 text-center">
          About Us
        </h1>
        <div className="flex flex-col lg:flex-row  gap-3.5 ">
          <div className="flex-2">
            <p className="mb-4 ">
              Chopsbysarah is a culinary concept that is aimed at satisfying
              your sweet and tasty cravings. We make cakes for every occasion,
              small chops platters, pastries, yoghurts, parfaits, tigernut
              drinks, banana bread, and we also offer indoor & outdoor catering
              services.
            </p>

            <p className="mb-4">
              Our journey started when Sarah left her white-collar job to follow
              her passion for baking and catering. What makes us unique is that
              we use the finest ingredients without artificial preservatives,
              making our food healthier and more affordable.
            </p>
            <p className="mb-4 mt-7 italic">
              “Our mission is to cook the world into a better place.”
            </p>
          </div>

          <div className="rounded-4xl mb-4 shadow-2xl bg-red-700  flex justify-center ">
            <img
              src="./public/Images/Aunty Sarah .jpg"
              alt="Aunty Sarah"
              className="rounded-4xl w-92 h-92 border-4 flex-4"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Icon name="Award" size={16} />
              <span className="font-caption text-sm font-caption-normal">
                Why Choose Us
              </span>
            </div>

            <h2 className="font-heading font-heading-bold text-3xl lg:text-4xl text-text-primary mb-4">
              What Makes Us Special
            </h2>

            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and service that
              keeps our customers coming back for more.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights?.map((highlight) => (
              <div key={highlight?.id} className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {/* <Icon
                      name={highlight?.icon}
                      size={24}
                      color={highlight?.color}
                    /> */}
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        {highlight.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-heading font-heading-semibold text-xl text-text-primary mb-3">
                      {highlight?.title}
                    </h3>

                    <p className="font-body text-text-secondary leading-relaxed">
                      {highlight?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
