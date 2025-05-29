import React from 'react';
import { DashboardLayout } from '../../components/Templates';
import Header from '../../components/Molecules/Header';
import ProjectSection from '../../components/Organisms/ProjectSection';

export default function Dashboard() {
  return (
    <>
    <DashboardLayout>
      <Header />
    
        <ProjectSection />
      </DashboardLayout>
    </>
  );
}
