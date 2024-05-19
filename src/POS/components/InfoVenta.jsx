import React, { useState } from 'react'
import { useEffect } from 'react'
import { getSellInfo } from "../../apiRequests/";

export const InfoVenta = ({ numeroVenta }) => {
  const [info, setInfo] = useState({})

  useEffect(() => {


    getSell()

  }, [])

  const getSell = async () => {
    const infoSell = await getSellInfo(numeroVenta);
    setInfo(infoSell[0])

  }

  console.log(info)
  return (
    <>
      <div className=''>
        <h1 className='text-warning'>Info Venta</h1>
        <hr />
        <h3 className=''>numeroVenta:{info.numeroVenta}</h3>
        <h3>subtotal: {info.subTotal}</h3>
        <h3>total: {info.total}</h3>
        <h3>fecha: {info.fechaVenta}</h3>
        <h3>descuento:{info.descuento}</h3>
      </div>
      

    </>
  )
}

