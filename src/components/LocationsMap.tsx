import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ExternalLink,
  Copy,
  Navigation,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type Office = {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  isPrimary?: boolean;
};

const offices: Office[] = [
  {
    name: "San Francisco HQ",
    address: "123 Recruitment Plaza, Suite 500, San Francisco, CA 94107",
    phone: "(555) 123-4567",
    email: "sf@dreamgateway.com",
    hours: "Mon-Fri: 9AM-6PM",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    isPrimary: true,
  },
  {
    name: "New York Office",
    address: "456 Career Avenue, Floor 12, New York, NY 10001",
    phone: "(555) 987-6543",
    email: "ny@dreamgateway.com",
    hours: "Mon-Fri: 8AM-5PM",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    name: "Chicago Office",
    address: "789 Talent Street, Unit 300, Chicago, IL 60601",
    phone: "(555) 456-7890",
    email: "chi@dreamgateway.com",
    hours: "Mon-Fri: 9AM-5PM",
    coordinates: { lat: 41.8781, lng: -87.6298 },
  },
];

const LocationsMap = () => {
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied to clipboard!`,
      description: `${text}`,
    });
  };

  const openDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Visit or Reach Us</h2>
          <p className="section-subtitle">
            Our offices are located in major cities across the country. Feel
            free to drop by or contact us through your preferred channel.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Map Section */}
          <div className="md:col-span-3 rounded-lg overflow-hidden shadow-lg h-[400px] md:h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471655!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1617635246579!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our office locations"
              className="absolute inset-0"
            ></iframe>

            <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-md text-sm font-medium opacity-90 hover:opacity-100 transition-opacity">
              <p className="text-corporate-blue flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                View all TalentBridge offices across the United States
              </p>
            </div>
          </div>

          {/* Office Cards */}
          <div className="md:col-span-2 space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-none">
            {offices.map((office) => (
              <Card
                key={office.name}
                className={`animate-fade-in hover:shadow-md transition-shadow overflow-hidden ${
                  office.isPrimary ? "border-l-4 border-corporate-green" : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-start">
                    <span>{office.name}</span>
                    {office.isPrimary && (
                      <span className="bg-corporate-green/10 text-corporate-green text-xs font-medium px-2 py-1 rounded-full">
                        Headquarters
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                    <span>{office.address}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{office.phone}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-gray-500 hover:text-corporate-blue"
                      onClick={() =>
                        copyToClipboard(office.phone, "Phone number")
                      }
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{office.email}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-gray-500 hover:text-corporate-blue"
                      onClick={() => copyToClipboard(office.email, "Email")}
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                  </div>

                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{office.hours}</span>
                  </div>
                </CardContent>

                <CardFooter className="bg-gray-50 pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-corporate-blue border-corporate-blue hover:bg-corporate-blue hover:text-white group"
                    onClick={() => openDirections(office.address)}
                  >
                    <Navigation className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Get Directions
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
