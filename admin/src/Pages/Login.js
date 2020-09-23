import React,{useState} from 'react'
import 'antd/dist/antd.css';
import { Card, Input,Button ,Spin } from 'antd';
import IconFont from '../until/iconfont'
import '../static/css/Login.css'
function Login(){
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin =()=>{
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    }
    return(
        <div className="login-div">
            <Spin tip="Loading...." spinning={isLoading}>
                <Card title="夜深人静街道的风 请登录" bordered={true} style={{ width: 400 }}>
                    <Input
                      id="usename"
                      size="large"
                      placeholder="Enter your userName"
                      prefix={<IconFont type='bussiness-man' style={{color:'rgba(0,0,0,.25)'}}/>}
                      onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input
                      id="password"
                      size="large"
                      placeholder="Enter your password"
                      prefix={<IconFont type='discount' style={{color:'rgba(0,0,0,.25)'}}/>}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login