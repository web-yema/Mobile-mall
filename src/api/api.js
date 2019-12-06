import Axios from 'axios';
// 注册接口
export const Register = obj => Axios.post('http://132.232.89.22:3003/register', obj);
// 登录
export const Login = obj => Axios.post('http://132.232.89.22:3003/login', obj);
// 用户信息
export const getadmin = token => Axios.get('http://132.232.89.22:3003/getadmin', { params: { token } });
// 修改密码
export const changepassword = obj => Axios.post('http://132.232.89.22:3003/changepassword', obj);
// 修改用户头像
export const headportrait = id => Axios.post('http://132.232.89.22:3003/headportrait', { _id: id });
