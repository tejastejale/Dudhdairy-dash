import React from 'react'
import Card from '../Components/Card'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaTruckRampBox } from 'react-icons/fa6'
import { IoPeopleSharp } from 'react-icons/io5'
import Lchart from '../Components/Lgraph'
import Pchart from '../Components/Pgraph'
import axios from 'axios'
function Home() {
    const [data, setData] = React.useState({})
    async function getOrder() {
        const token = await localStorage.getItem('token')
        await axios
            .get('https://api-dudhdairy.vercel.app/order/dashboard/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
    React.useEffect(() => {
        getOrder()
    }, [])
    return (
        <div className="py-4 w-[80vw] flex flex-col items-center  h-full">
            <div className="flex flex-row justify-start space-x-2 w-[96%]">
                <Card
                    Icon={BsGraphUpArrow}
                    name={"Today's Sales"}
                    num={data?.today_sales}
                />
                <Card
                    Icon={FaTruckRampBox}
                    name={'New Orders'}
                    num={data?.new_orders}
                />
                {/* <Card Icon={IoPeopleSharp} name={"Customers"} num={"123"} /> */}
                <Card
                    Icon={IoPeopleSharp}
                    name={'Subscription'}
                    num={data?.active_subscriptions}
                />
            </div>
            <div className="flex flex-row my-5 gap-3 w-[96%] justify-evenly">
                <div className="bg-gray-50 rounded-lg shadow-md p-4 w-[60%] h-[50vh]">
                    <Lchart className="w-full h-full" />
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md flex justify-center items-center p-4 w-[40%] h-[50vh]">
                    <Pchart className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default Home
