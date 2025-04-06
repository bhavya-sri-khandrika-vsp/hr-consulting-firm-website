import React from "react";
import { Shield, Lock, FileText, Cookie, Info } from "lucide-react";

type PolicyItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
};

const policies: PolicyItem[] = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information",
    icon: Shield,
    link: "#",
  },
  {
    title: "Terms & Conditions",
    description: "The rules and guidelines for using our services",
    icon: FileText,
    link: "#",
  },
  {
    title: "Data Protection",
    description: "Our commitment to safeguarding your data",
    icon: Lock,
    link: "#",
  },
  {
    title: "Cookie Policy",
    description: "How we use cookies and similar technologies",
    icon: Cookie,
    link: "#",
  },
];

const LegalPolicies = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-center mb-8">
          <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3">
            <Info className="h-5 w-5 text-corporate-blue" />
          </div>
          <h2 className="text-2xl font-bold text-corporate-blue">
            Transparency You Can Trust
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {policies.map((policy) => (
            <a
              key={policy.title}
              href={policy.link}
              className="group bg-gray-50 hover:bg-corporate-blue/5 rounded-lg p-6 transition-all duration-300 border border-gray-100 hover:border-corporate-blue/20 hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center mb-4 transition-colors duration-300">
                <policy.icon className="h-6 w-6 text-corporate-blue" />
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-corporate-blue transition-colors duration-300">
                {policy.title}
              </h3>

              <p className="text-sm text-gray-600">{policy.description}</p>
            </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-8 text-center text-sm text-gray-500">
          <p>
            At TalentBridge, we believe in complete transparency. All our
            policies are designed to protect your privacy while ensuring a
            secure and trustworthy platform for employers and job seekers alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalPolicies;
