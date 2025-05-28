import React from 'react';
import LoginSection from '../../components/Organisms/LoginSection';
import { AuthLayout } from '../../components/Templates';

export default function Home() {
  return (
    <AuthLayout>
      <LoginSection />
    </AuthLayout>
  );
}
