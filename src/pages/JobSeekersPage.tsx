
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSeekersHero from '../components/JobSeekersHero';
import JobSearch from '../components/JobSearch';
import ResumeSubmission from '../components/ResumeSubmission';
import CareerResources from '../components/CareerResources';
import SkillDevelopment from '../components/SkillDevelopment';
import SuccessStories from '../components/SuccessStories';
import JobSeekersFAQ from '../components/JobSeekersFAQ';
import FinalCTA from '../components/FinalCTA';

const JobSeekersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <JobSeekersHero />
        <JobSearch />
        <ResumeSubmission />
        <CareerResources />
        <SkillDevelopment />
        <SuccessStories />
        <JobSeekersFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default JobSeekersPage;
