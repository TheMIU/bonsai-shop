import React, { Component } from 'react'
import { CartItem } from '../../model/CartItem'

interface ShoppingCartProps {
    itemList: CartItem[];
}

export default class ShoppingCart extends Component<ShoppingCartProps>{
    render() {
        return (
            <div className="flex justify-center items-center min-h-[87%] pt-3">
                <table className='w-full mx-6'>
                    <tr className='bg-gray-100'>
                        <th className='text-[15px] font-normal border-gray-400 border-[0.5px] px-1'>ID</th>
                        <th className='text-[15px] font-normal border-gray-400 border-[0.5px] px-1'>Name</th>
                        <th className='text-[15px] font-normal border-gray-400 border-[0.5px] px-1'>Unit Price</th>
                        <th className='text-[15px] font-normal border-gray-400 border-[0.5px] px-1'>Qty</th>
                        <th className='text-[15px] font-normal border-gray-400 border-[0.5px] px-1'>Total</th>
                    </tr>
                    {
                        this.props.itemList.length === 0 ?
                            <tr>
                                <td colSpan={5} className='border-gray-400 border-[0.5px] px-1'>
                                    <p className='text-[15px] font-normal text-center'>No items to display</p>
                                </td>
                            </tr>
                            : this.props.itemList.map((item) => (
                                <tr className='border-gray-700  border-[0.5px]'>
                                    <td className='text-center border-gray-400 border-[0.5px] px-1'>{item.product.id}</td>
                                    <td className='text-center  border-gray-400 border-[0.5px] px-1'>{item.product.name}</td>
                                    <td className='text-center  border-gray-400 border-[0.5px] px-1'>{item.product.price + ' ' + item.product.currency}</td>
                                    <td className='text-center  border-gray-400 border-[0.5px] px-1'>{item.itemCount}</td>
                                    <td className='text-center  border-gray-400 border-[0.5px] px-1'>{item.product.price * item.itemCount + ' ' + item.product.currency}</td>
                                </tr>
                            ))
                    }
                </table>
            </div>
        )
    }
}
