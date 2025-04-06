
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Play, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Resume tips data
const resumeTips = [
  {
    id: 1,
    title: "Optimize for ATS",
    description: "Use keywords from the job description to pass through Applicant Tracking Systems.",
    videoUrl: "#",
    icon: CheckCircle
  },
  {
    id: 2,
    title: "Quantify Achievements",
    description: "Use numbers and percentages to demonstrate your impact in previous roles.",
    videoUrl: "#",
    icon: Info
  },
  {
    id: 3,
    title: "Common Mistakes",
    description: "Avoid generic statements and ensure your contact information is correct.",
    videoUrl: "#",
    icon: AlertTriangle
  }
];

const ResumeSubmission = () => {
  const [dragging, setDragging] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [validationFeedback, setValidationFeedback] = useState<string[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileUpload(e.target.files);
    }
  };

  const handleFileUpload = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      setResumeUploaded(true);
      
      // Simulate resume validation feedback
      setTimeout(() => {
        const feedback = [];
        if (Math.random() > 0.5) feedback.push("Missing relevant keywords for your target role");
        if (Math.random() > 0.7) feedback.push("Consider adding more quantifiable achievements");
        if (Math.random() > 0.6) feedback.push("Professional summary could be more focused");
        setValidationFeedback(feedback);
      }, 1500);
    }
  };

  return (
    <section className="py-16 bg-corporate-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">Get Noticed. Upload a Winning Resume.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our team of HR experts fine-tunes your resume to match top industry standards.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div 
                className={`border-2 border-dashed rounded-lg p-8 h-80 flex flex-col items-center justify-center transition-all ${dragging ? 'border-corporate-blue bg-corporate-blue/5' : 'border-gray-300 hover:border-corporate-blue'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {!resumeUploaded ? (
                  <>
                    <div className="mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-corporate-blue" />
                    </div>
                    <p className="text-center mb-4">
                      <span className="font-medium">Drag and drop your resume here</span><br />
                      <span className="text-sm text-gray-500">or</span>
                    </p>
                    <input 
                      type="file" 
                      id="resume-upload" 
                      className="hidden" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileChange}
                    />
                    <label htmlFor="resume-upload">
                      <Button 
                        variant="outline" 
                        className="cursor-pointer border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white"
                        onClick={() => document.getElementById('resume-upload')?.click()}
                      >
                        Browse Files
                      </Button>
                    </label>
                    <p className="text-xs text-gray-500 mt-4">
                      Supported formats: PDF, DOC, DOCX (Max size: 5MB)
                    </p>
                  </>
                ) : (
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-corporate-green mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Resume Uploaded!</h3>
                    <p className="text-gray-600 mb-4">{fileName}</p>
                    <div className="space-y-3 mt-4">
                      {validationFeedback.length > 0 ? (
                        <>
                          <h4 className="font-medium text-corporate-blue">Resume Feedback:</h4>
                          <ul className="text-left text-sm space-y-2">
                            {validationFeedback.map((feedback, index) => (
                              <li key={index} className="flex items-start">
                                <Info className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                                <span>{feedback}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <div className="flex justify-center">
                          <div className="animate-pulse flex items-center text-corporate-blue">
                            <div className="h-2 w-2 bg-corporate-blue rounded-full mr-1"></div>
                            <div className="h-2 w-2 bg-corporate-blue rounded-full mr-1 animate-pulse delay-150"></div>
                            <div className="h-2 w-2 bg-corporate-blue rounded-full animate-pulse delay-300"></div>
                            <span className="ml-2">Analyzing resume...</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <Button 
                        className="bg-corporate-blue hover:bg-corporate-darkBlue"
                      >
                        Submit Resume for Review
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-4 text-corporate-blue">Resume Coach</h3>
                <div className="space-y-4">
                  {resumeTips.map((tip) => (
                    <Card key={tip.id} className="overflow-hidden transition-all hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <tip.icon className="h-5 w-5 text-corporate-blue" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{tip.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{tip.description}</p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" className="text-xs px-2 py-1 h-auto">
                                  <Play className="h-3 w-3 mr-1" /> Watch Tip Video
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>{tip.title} - Resume Tip</DialogTitle>
                                </DialogHeader>
                                <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                                  <Play className="h-12 w-12 text-corporate-blue opacity-50" />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSubmission;
