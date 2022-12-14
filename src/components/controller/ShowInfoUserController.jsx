import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_GET_WALLET } from '../utils/const';
import AdminRechart from './../Admin/AdminRechart';
import Activity from './../MainPage/Profile/Activity';

function ShowInfoUserController() {

    const [sta, setSta] = useState('');
    const [money, setMoney] = useState('');
    let token = localStorage.getItem("token");

    const getUserSta = async () => {
        console.log(token);
        const response = await axios.post(API_GET_WALLET + token);
        console.log("sta ", response.data);
        if (response && response.status === 200) {
            setSta(response.data.sta);
            setMoney(response.data.money)
        }
    }
    useEffect(() => {
        getUserSta();
    }, []);

    return (
        <div>
            <Activity dataSTA={sta} dataMoney={money} />
        </div>
    )
}

export default ShowInfoUserController