import React, {useState} from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Register.css'



const Register = () => {
    const [name, setName]= useState('')
    const [userName, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const navigate = useNavigate()

    const register = async () => {
        try{
            const user = {
                name:name ,
                username:userName,
                password:password, 
            }
            console.log('Datos de registro enviados: ',user)
            const response = await axios.post('/api/auth/register', user)
            console.log(response.status)
            if(response.status=== 200){
                navigate('/')
            }
        } catch (error){
            console.log('error de registro:', error)
        }

    }


    return (
        <div className="auth-box" id="registro">
            <h2>Registro</h2>
            <form>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={userName}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
                <button onClick={register}>Registrarse</button>
                </form>
        </div>
       
    );
}


export default Register;
