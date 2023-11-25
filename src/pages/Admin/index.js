import HeaderOnly from "~/layoout/HeaderOnly";
import AccountItem from "~/components/AccountItem";
import { useEffect, useState } from "react";
import { delUser, getListUsers } from "~/api/user";
import clsx from "clsx";
import styles from './Admin.module.css'
import Button from "~/components/Button";


function Admin() {
    const [data, setData] = useState([])
    const [currUser, setCurrUser] = useState()
    const [dialog, setDialog] = useState(false)

    useEffect(()=> {
        getListUsers()
        .then(res => {
            setData(res)
        })
    }, [])

    useEffect(()=> {
        if(currUser == ''){
            setDialog(false)
        }
    }, [currUser])

    function handleClick(usname) {
        setCurrUser(usname)
        setDialog(true)
    }

    function hanndleDel() {
        delUser(currUser) 
        .then(res => {
            if(res =='successfully') {
                alert('remove successfully')
            }
            setData(prev => {
                setCurrUser('')
                let newList = prev.filter(user => user.userName !==currUser);
                return newList
            })
        })
    }
    return (
        <HeaderOnly title={"Administrator"}>
            {data.map((item, index) => {
                return <AccountItem data={item} click={()=> handleClick(item.userName)} key={index} />
            })}

            {dialog&&<div className={clsx(styles.dialogWrapper)}>
                <span>{`Xác nhận xóa user ${currUser}`}</span>
                <div className={clsx(styles.btnsWrapper)}>
                    <Button onClick={hanndleDel}>Xóa</Button>
                    <Button onClick={()=>setCurrUser('')}>Hủy</Button>
                </div>
            </div>}
        </HeaderOnly>
    );
}

export default Admin;