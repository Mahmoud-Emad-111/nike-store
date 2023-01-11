const Validation=(value)=>{

    let errors={};

    if (!value.email) {
        errors.email='Email is Required';
    }else if(!/\S+@\S+\.\S+/.test(value.email)){
        errors.email='Email is invalid';
    }
    if (!value.password) {
        errors.password='Password is Requird';
    }
    if (!value.confirm_password) {
        errors.confirm_password='confirm Password is Requird';
    }
     if(value.password !== value.confirm_password){
        errors.confirm_password='You must confirm the password';
    }
    if (!value.name) {
        errors.name='Name is Required.';
    }
    return errors;
}
export default Validation
