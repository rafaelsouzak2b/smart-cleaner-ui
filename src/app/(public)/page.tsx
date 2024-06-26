// components/LandingPage.js

import Image from 'next/image';
import React from 'react';

const LandingPage = () => {
  return (
    <>
      <section className="bg-blue-500 sm:py-10 lg:py-20 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center">
        <div className="lg:w-1/2 pl-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">O jeito mais fácil de contratar uma diarista</h1>
          <p className="text-lg mb-8">Nosso site oferece uma maneira simples e confiável de contratar diaristas para ajudar com suas tarefas domésticas.</p>
          <a
            href="/contratar"
            className="mb-10 bg-white text-blue-500 font-bold py-2 px-8 rounded-full transition duration-300 inline-block"
          >
            Contratar Agora
          </a>
        </div>

        <Image 
          priority
          src="/banner.jpeg" 
          alt="Imagem do serviço" 
          className="rounded-lg shadow-md" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 500, height: 'auto' }} 
        />  
        </div>
      </section>



      {/* Descrição dos Serviços */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className='max-w-96 justify-self-center'>
              <h3 className="text-xl font-bold mb-4">Limpeza Residencial</h3>
              <p className="text-gray-700">Oferecemos serviços de limpeza residencial para manter sua casa limpa e organizada.</p>
            </div>
            <div className='max-w-96 justify-self-center'>
              <h3 className="text-xl font-bold mb-4">Lavar e Passar</h3>
              <p className="text-gray-700">Contrate uma profissional para lavar, passar e organizar suas roupas.</p>
            </div>
            <div className='max-w-96 justify-self-center'>
              <h3 className="text-xl font-bold mb-4">Personal Organizer</h3>
              <p className="text-gray-700">Contrate profissionais para organizar sua casa a aproveitar melhor o espaço. Incluso: mobília, armários, dispensa e guarda-roupas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossos Planos e Preços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg py-8 px-6 max-w-96 justify-self-center">
              <h3 className="text-xl font-bold mb-4">1 Diária</h3>
              <p className="text-gray-700 mb-4">Diárias de 8 horas, com 1 hora de descanso</p>
              <p className="text-2xl font-bold text-blue-500">R$ 150/mês</p>
              <a
                href="/contratar"
                className="block bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-6 hover:bg-blue-700 transition duration-300"
              >
                Contratar Agora
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg py-8 px-6 max-w-96 justify-self-center">
              <h3 className="text-xl font-bold mb-4">4 Diárias</h3>
              <p className="text-gray-700 mb-4">Diárias de 8 horas, com 1 hora de descanso</p>
              <p className="text-2xl font-bold text-blue-500">R$ 500/mês</p>
              <a
                href="/contratar"
                className="block bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-6 hover:bg-blue-700 transition duration-300"
              >
                Contratar Agora
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg py-8 px-6 max-w-96 justify-self-center">
              <h3 className="text-xl font-bold mb-4">10 Diárias</h3>
              <p className="text-gray-700 mb-4">Diárias de 8 horas, com 1 hora de descanso</p>
              <p className="text-2xl font-bold text-blue-500">R$ 1300/mês</p>
              <a
                href="/contratar"
                className="block bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-6 hover:bg-blue-700 transition duration-300"
              >
                Contratar Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
