'use client'

import React from 'react';
import ProfileForm from './components/ProfileForm';
import CredentialsForm from './components/CredentialsForm';
import Steppers from './components/Steppers';

const RegistrationPage: React.FC = () => {
  const [step, setStep] = React.useState(1);

  return (
    <>
    <section className="bg-blue-500 py-20 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Faça seu cadastro</h1>
          <p className="text-lg mb-8">Preencha suas informações iniciais no formulário abaixo.</p>
        </div>
      </section>
    <div className="py-5 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <Steppers step={step} setStep={setStep} />

        {step === 1 &&  <CredentialsForm setStep={setStep} /> }
        {step === 2 &&  <ProfileForm setStep={setStep} /> }
      </div>
    </div>
    </>
  );
};

export default RegistrationPage;
