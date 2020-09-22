import {Avatar,Divider }from 'antd'
import {GithubFilled ,WechatFilled,QqCircleFilled} from '@ant-design/icons'
import '../public/components/author.css'

function  Author(){
    
    return(
        <div className="author-div comm-box">
           <div><Avatar size={100} src=""/></div>
           <div className="author-introduction">
               OooOOOOO
           
           <Divider>社交账号</Divider>
           <Avatar size={28}  icon={<GithubFilled />} className="account"  />
            <Avatar size={28} icon={<WechatFilled />}  className="account" />
            <Avatar size={28} icon={<QqCircleFilled />}  className="account"  />
            
           </div>
        </div>

    )
}
export default Author