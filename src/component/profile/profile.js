import React, { useEffect, useState } from "react";
import NavBar from "../Nav_bar/Nav_bar";
import './profile.css';
import { avtar } from "../../data/data";
import { get_data_user, remove_data_user } from "../../backend_data/user";
import   {useNavigate}  from "react-router-dom";
import { ArrowLeftOnRectangleIcon, ArrowUpTrayIcon, CheckCircleIcon, PhotoIcon } from "@heroicons/react/24/solid";
import http from "../axios/http";
import Sales from "../sales/sales";
import { useCart } from "react-use-cart";
import Shopping_bar from "../shopping_bar/shopping_bar";


const Profile=({check_side_bar,shopping_bar})=>{
    useEffect(() => {

        if(!get_data_user.isLogin){
            navigate("/singin")
        }
        if (localStorage.getItem('backend')=='true') {
            get_image_profile()
            
        }
    }, []);

    const [file, setfile] = useState(false);
    const [img, setimg] = useState('');
    const navigate = useNavigate();
    const token=get_data_user.token;
    const handel_logout=async()=>{
        if(localStorage.getItem('backend')=='true'){

            http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            await http.get('logout');
            remove_data_user();
            navigate('/');
            window.location.reload();
        }else{
            localStorage.removeItem('Email');
            localStorage.removeItem('isLogin');        
            navigate('/');
            window.location.reload();

        }
    }
    const uploda_image= async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('file',file)
        http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        await http.post('uploadImg',formData);
        get_image_profile()
    }        
    const get_image_profile =async()=>{
        http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        await http.get('get_image').then((res)=>{
            setimg(res.data.data)
            setfile(false);
        });
        
    }
    const change_image=()=>{
        if(localStorage.getItem('backend')=='true'){
            if(img !=null){
                return 'http://localhost:8000/user_images/'+img;
            }
            else if  (file) {            
                return URL.createObjectURL(file);
            }else{
                return avtar;
            }
        }
        else{
            if  (file) {            
                return URL.createObjectURL(file);
                
            }else{
                return avtar;
            }
        }
    }
    return(
        <>
            <Shopping_bar check_bar={check_side_bar} active={shopping_bar}/>

            <div className="profile">
                <div className="app_nav nav" >
                    <div className="container ">
                    
                    <NavBar bar={check_side_bar}/>
                        
                    </div>
                </div>
                <br/>
                <br/>
            <div className="profile_main">
                <div className="container">
                
                    
                    <div className="content">
                        <div className="left">
            
                                    <img src={change_image()} alt=''/>
                                <form   onSubmit={(e)=>uploda_image(e)}  >
                                    {
                                        localStorage.getItem('backend')=='true'? (file==false  ? <label htmlFor="file" className="label_file"><PhotoIcon/></label>:
                                        <button type="submit" > <ArrowUpTrayIcon /></button>): <label htmlFor="file" className="label_file"><PhotoIcon/></label>
                                        
    
                                    }
                                    
                                    <input type="file" name="image" id="file" accept="image/*" onChange={e=>setfile(e.target.files[0])+setimg(null)} style={{display:"none"}}/>

                                </form>
                            <div className="detalis">
                                <h2>{get_data_user.name}</h2>
                                <p>{get_data_user.email}</p>
                            </div>
                        </div>
                        <div className="right">
                            <button type="button" onClick={handel_logout}> <ArrowLeftOnRectangleIcon/> Logout</button>
                        </div>
                    </div>                    
                
            </div>

            </div>

            </div>
            </>
        )
            
    
}
export default Profile;