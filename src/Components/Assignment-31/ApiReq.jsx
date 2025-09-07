import './ApiReq.css'
import { useState,useEffect } from 'react'
export default function ApiReq(){
    let [reqData,setReqData]=useState([])
    async function getdata(){
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await res.json()
        setReqData(data)
    }
    useEffect(()=>{getdata()},[])
    return(
        <div className='parent'>
            {
                reqData.map((card,index)=>{
                    return(
                    <div className='cards' key={index}>
                        <p><b>id: </b>{card.id}</p>
                        <p><b>name: </b>{card.name}</p>
                        <p><b>username: </b>{card.username}</p>
                        <p><b>email: </b>{card.email}</p>
                        <p><b>address: </b><br />street: {card.address.street}<br/>suite: {card.address.suite}<br/>city: {card.address.city}<br/>zipcode: {card.address.zipcode}<br/>geo :<br/><br/>lat: {card.address.geo.lat}<br/>lng: {card.address.geo.lng}</p>
                        <p><b>phone: </b>{card.phone}</p>
                        <p><b>website: </b>{card.website}</p>
                        <p><b>company: </b><br />name: {card.company.name}<br/>catchPhrase: {card.company.catchPhrase}<br/>bs: {card.company.bs}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
