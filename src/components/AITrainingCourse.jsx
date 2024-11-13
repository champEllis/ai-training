import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  DollarSign, 
  MapPin, 
  Phone, 
  Mail,
  Brain,
  Shield,
  Activity
} from 'lucide-react';

const QRCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" className="w-48 h-48 mx-auto">
    <rect width="29" height="29" fill="white"/>
    <path fill="black" d="M0,0 h7 v7 h-7 v-7 M2,2 h3 v3 h-3 v-3 M11,0 h7 v7 h-7 v-7 M13,2 h3 v3 h-3 v-3 M22,0 h7 v7 h-7 v-7 M24,2 h3 v3 h-3 v-3 M0,11 h7 v7 h-7 v-7 M2,13 h3 v3 h-3 v-3 M22,11 h7 v7 h-7 v-7 M24,13 h3 v3 h-3 v-3 M0,22 h7 v7 h-7 v-7 M2,24 h3 v3 h-3 v-3 M8,8 h2 v1 h-2 v-1 M11,8 h2 v2 h-2 v-2 M14,8 h1 v2 h-1 v-2 M16,8 h1 v1 h-1 v-1 M19,8 h2 v1 h-2 v-1 M8,10 h1 v2 h-1 v-2 M10,10 h1 v1 h-1 v-1 M13,10 h2 v1 h-2 v-1 M16,10 h2 v1 h-2 v-1 M19,10 h1 v2 h-1 v-2 M8,13 h2 v2 h-2 v-2 M11,13 h1 v1 h-1 v-1 M13,13 h2 v2 h-2 v-2 M16,13 h1 v1 h-1 v-1 M18,13 h2 v2 h-2 v-2 M8,16 h1 v1 h-1 v-1 M10,16 h2 v1 h-2 v-1 M13,16 h1 v2 h-1 v-2 M15,16 h2 v1 h-2 v-1 M18,16 h1 v1 h-1 v-1 M8,18 h2 v2 h-2 v-2 M11,18 h1 v1 h-1 v-1 M13,18 h2 v2 h-2 v-2 M16,18 h1 v1 h-1 v-1 M18,18 h2 v2 h-2 v-2"/>
  </svg>
);

const AITrainingCourse = () => {
  const registrationLink = "https://forms.office.com/pages/responsepage.aspx?id=d7uP9SS_hku6ZNR3nkgR4HfH9TOWa01HhQbNQiMaqP1UQzhOVkJEWDdMUFBGREFNWjVZWFVCNks5Mi4u&route=shorturl";

  const courseOutline = [
    {
      title: "Introduction to AI",
      points: [
        "Types of AI",
        "Key concepts: machine learning, deep learning, natural language processing"
      ]
    },
    {
      title: "AI in Public Health",
      points: [
        "Key applications of AI in public health (10 Impactful Use Cases)",
        "Challenges and opportunities",
        "Identifying local needs and opportunities"
      ]
    },
    {
      title: "Ethical Considerations in AI for Public Health",
      points: [
        "Ethical Principles in AI",
        "Bias and discrimination in AI",
        "Ethical Dilemmas in AI",
        "WHO AI Ethics Guidelines",
        "Tanzania AI Guidelines"
      ]
    },
    {
      title: "AI for HIV & AIDS Care and Treatment",
      points: [
        "Using AI to improve early diagnosis and risk prediction",
        "AI-Driven Treatment Optimization",
        "Predicting treatment adherence",
        "AI to enhance viral suppression"
      ]
    },
    {
      title: "AI for Reproductive, Maternal, and Child Health",
      points: [
        "Predicting pregnancy complications",
        "Optimizing antenatal and postnatal care",
        "Early detection of childhood diseases"
      ]
    },
    {
      title: "AI for Human Resources for Health",
      points: [
        "AI for Workforce Planning",
        "AI for Training and Education",
        "AI for Performance Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="bg-green-500 text-white px-8 py-3 rounded-full text-2xl font-bold inline-block mb-8">
              Talanta 10 Presents
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Artificial Intelligence for<br />Public Health Interventions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              An Interactive, Fun and Insightful Course Developed for Program Managers, Policy Makers, Researchers, Global Health Innovators and Funders
            </p>
          </div>

          {/* Key Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="font-semibold text-lg">Date</p>
                    <p>December 9-13, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="font-semibold text-lg">Location</p>
                    <p>Giraffe Beach Hotel, Dar Es Salaam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="font-semibold text-lg">Course Fee</p>
                    <p>850 USD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Outcomes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">KEY OUTCOMES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg flex flex-col items-center text-center">
                <Brain className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI Transformative Power</h3>
                <p className="text-sm">Learn how AI is used in key interventions such as HIV & AIDS care and treatment, Reproductive, Maternal and Child Health</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg flex flex-col items-center text-center">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ethical AI Use</h3>
                <p className="text-sm">Develop a framework for making ethical use of AI in public health interventions</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg flex flex-col items-center text-center">
                <Activity className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Unlock Power of AI</h3>
                <p className="text-sm">Design and implement projects that make innovative use of AI in public health</p>
              </div>
            </div>
          </div>

          {/* Course Outline - Header now outside the box */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">COURSE OUTLINE</h2>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {courseOutline.map((module, index) => (
                  <div key={index} className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-bold text-lg mb-2">{module.title}</h3>
                    <ul className="space-y-1">
                      {module.points.map((point, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="text-center mt-12">
            <a 
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold inline-block transition-colors animate-pulse"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-lg p-8 text-blue-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Register Now</h2>
                <img 
                src="/images/qr-code.png" 
                alt="Registration QR Code" 
                className="w-48 h-48 mx-auto"
                />
              <p className="text-sm text-gray-600 mb-6">Scan QR code or click button below to register</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-4">Payment Details</h3>
              <p><strong>Account Name:</strong> Talanta Kumi LTD</p>
              <p><strong>Account Number:</strong> 23110056658 (USD)</p>
              <p><strong>Bank:</strong> NMB Bank</p>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="font-bold text-xl mb-4">Contact Information</h3>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+255755958972</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span>engage@talanta10.com</span>
              </div>
            </div>
            <a 
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg mt-8 font-bold text-lg text-center"
            >
              Complete Registration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrainingCourse;