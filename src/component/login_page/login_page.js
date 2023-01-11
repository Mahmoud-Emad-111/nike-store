import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './login_page.css';
import { useForm } from "react-hook-form";
import http from "../axios/http";
import { get_data_user, set_data_user } from "../../backend_data/user";
import   {useNavigate}  from "react-router-dom";

const Login_page=()=>{
    const navigate = useNavigate();
    useEffect(() => {
        if(get_data_user.isLogin){
          navigate("/profile")
        }
      }, []);
    
    const [data_error, setdata_error] = useState(false);
    const [type,settype]=useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handel_password=()=>{
        settype(!type)
    }
    const handel_login= async(data)=>{
        if(localStorage.getItem('backend')=='true'){
            await http.post('login',data).then(res=>{
                if (res.status==200) {
                http.defaults.headers.common = {'Authorization': `Bearer ${res.data.data.token}`}
                    set_data_user(res.data);
                    navigate('/profile');
                    window.location.reload();
                }
            }
            )    .catch(error => {
                if(error.response.data.message=='Unauthoriset'){
                    setdata_error(true);
                }
            });
        }else{
            localStorage.setItem('Email', data.email)
            localStorage.setItem('isLogin', true)
            navigate('/profile');
            window.location.reload();
        }
    }
    return(
        <div className="login_page">
            <div className="top">
                <h1>Login</h1>
            </div>
            <div className="main">
                <form onSubmit={handleSubmit(handel_login)}>
                    <div className="form">
                        <div className="input_form">
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="Email" {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
                                {errors.email && <p className="error">{errors.email.message}</p>}

                            </div>                            
                            <div className="input_form password">
                                <label htmlFor="password">password</label>
                                <input type={type==true ? 'text': "password" } name="password" placeholder="Password" {...register('password',{required:'password is Required'})} />
                                {errors.password && <p className="error">{errors.password.message}</p>}
                                
                                <EyeIcon onClick={handel_password}/>
                                
                            </div>
                    <button type="submit">login</button>
                        {data_error&& <p className="error_email">Please check your data and try again</p>}
                    </div>
                </form>
                <Link to='/singin'>create new account</Link>
            </div>
        </div>
    )
}
export default Login_page;