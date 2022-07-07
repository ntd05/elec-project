import '../css/Login.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginImg from "../img/LoginImg.png";
import Logo from "../img/logo.png";
import React from 'react';

export default function Login() {
  const validationSchema = Yup.object().shape({
    Email: Yup.string().required('Vui lòng điền id!').matches(),
    Password: Yup.string().required('Vui lòng điền mật khẩu!').matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password ko hop le"
    )
  });
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: ""
    },
    validationSchema,
  });
  return (
    <div className="login">
      <div className="login-background" >
        <img src={LoginImg} />
      </div>
      <div className='login-input'>
        <form className='formLogin' onSubmit={formik.handleSubmit}>
          <div className="logo-img">
            <img src={Logo} />
            <h1>Xin chào</h1>
          </div>
          <div className='EmailInput'>
            <div>
              <label>Email</label>
            </div>
            <div>
              <input value={formik.values.Email}
                onChange={formik.handleChange}
                name="Email"
                placeholder='Nhập địa chỉ email'
              />
            </div>
            {formik.errors.Email && formik.touched.Email && (
              <div className="warn">{formik.errors.Email}</div>
            )}
          </div>
          <div className='PasswordInput'>
            <div>
              <label>Mật khẩu</label>
            </div>
            <div className='inputPassword'>
              <input value={formik.values.Password}
                onChange={formik.handleChange}
                name="Password"
                placeholder='Nhập mật khẩu của bạn'
                type="password"
              />
              <i class="fa fa-eye"></i>
            </div>
            {formik.errors.Password && formik.touched.Password && (
              <div className="warn">{formik.errors.Password}</div>
            )}
          </div>
          <div className='RePassword'>
            <input type="checkbox" />
            <label id='RePass'>Nhớ mật khẩu</label>
          </div>
          <div className='Login'>
            <button type="submit">Đăng nhập</button>
          </div>
          <div className='ForgetPass'>
            <a href=''>Quên mật khẩu?</a>
          </div>
        </form>
      </div>
    </div>

  );
}

