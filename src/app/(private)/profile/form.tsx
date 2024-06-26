'use client'

import { ufs } from "@/helpers/ufs";
import {  ChangeEvent, useContext, useEffect, useState } from "react";
import { User } from "@/app/(public)/cadastro/helpers/types";
import { formatPhoneNumber } from "@/helpers/formatPhone";
import { formatCEP } from "@/helpers/formatCEP";
import { getCities, handleUpdateImage, handleUpdateUser } from "@/app/(public)/cadastro/actions";
import Swal from "sweetalert2";
import { UserContext } from "../context";
import Cookies from "js-cookie";

const ProfileForm = () => {
  const user = useContext<User>(UserContext);
  const [userData, setUserData] = useState<User>(user);
  const [cities, setCities] = useState([]);
  const [photo, setPhoto] = useState(userData?.imagem_url || '');
  const { email, name, telefone, data_nascimento, cep,
      logradouro, numero, cidade, uf, descricao } = userData;

    const handlePhoneInputChange = (event: any) => {
      const inputValue = event.target.value;
      const formattedValue = formatPhoneNumber(inputValue);
      setUserData({...userData, telefone: formattedValue })
    };

    const handleCepInputChange = (event: any) => {
      const inputValue = event.target.value;
      const formattedValue = formatCEP(inputValue);
      setUserData({...userData, cep: formattedValue })
    };

    const handleCitiesInput = (e: any) => {
      setCities([])
      setUserData({...userData, uf: e.target.value})
      getCities(e.target.value).then((data) => setCities(data))
    }

    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setPhoto(reader.result);
            setUserData({...userData, fileUpload: file });
          }
        };
        reader.readAsDataURL(file);
      }
    };  

  async function updateProfile(event: any) {
    event.preventDefault();
    const token = Cookies.get("token") as string

    try {
       await handleUpdateUser(userData, token)
       await handleUpdateImage(userData?.fileUpload, userData.id!, token)

       Swal.fire({
        icon: 'success',
        title: 'Perfil atualizado com sucesso!',
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado, tente novamente',
      
      })
    }
  }

  useEffect(() => {
    handleCitiesInput({ target: { value: uf } })
  },[])


  return (
    <div className="mx-auto max-w-2xl	my-8">
      <form onSubmit={updateProfile}>
        <div className="grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Meu Perfil</h2>
        <h3 className="text-xl font-bold mb-4 text-center">Bem Vindo(a) {userData.name}</h3>
        
        <div className="flex justify-center items-center mb-4">
          <div className="mb-4 flex justify-center items-center flex-col">
          <div 
            onClick={() => document.getElementById('photo')?.click()}
            className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-2 cursor-pointer"
          >
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="User" className="w-full h-full object-cover" />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-gray-400">
                <span className="text-4xl">+</span>
              </div>
            )}
          </div>

          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-1 block w-full hidden"
          />
      </div>

        </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="grid grid-cols-1">
        <div className="mb-4">
          <label htmlFor="name" className="w-full block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input
            required
            type="tel"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={handlePhoneInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        <div className="mb-4">
          <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
          <input
            required
            type="date"
            id="data_nascimento"
            name="data_nascimento"
            value={data_nascimento}
            onChange={(e) => setUserData({...userData, data_nascimento: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
          <input
            required
            type="text"
            id="cep"
            name="cep"
            value={cep}
            onChange={handleCepInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>

        <div className="mb-4">
          <label htmlFor="uf" className="block text-sm font-medium text-gray-700 mb-1">
            Estado
          </label>
          <select
            required
            id="uf"
            name="uf"
            defaultValue={uf}
            onChange={handleCitiesInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option defaultValue="" disabled>Selecione um estado</option>
            {ufs.map((uf) => (
              <option key={uf.value} value={uf.value}>
                {uf.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
          <select
            required
            id="cidade"
            name="cidade"
            disabled={!uf || !cities.length}
            value={cidade}
            onChange={(e) => setUserData({...userData, cidade: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Selecione uma cidade</option>
            {cities.map((city:any) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
          <input
            required
            type="text"
            id="logradouro"
            name="logradouro"
            value={logradouro}
            onChange={(e) => setUserData({...userData, logradouro: e.target.value})}  
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Número</label>
          <input
            required
            type="text"
            id="number"
            name="number"
            value={numero}
            onChange={(e) => setUserData({...userData, numero: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          />
        </div>
        
        <div className="col-span-2 mb-4">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(e) => setUserData({...userData, descricao: e.target.value})}
            rows={3}
            placeholder='Fale um pouco sobre os serviços que oferece'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
          ></textarea>
        </div>
        </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;