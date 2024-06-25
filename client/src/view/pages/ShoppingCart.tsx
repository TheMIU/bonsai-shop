import React from 'react';
import { CartItem } from '../../model/CartItem';

interface ShoppingCartProps {
    itemList: CartItem[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ itemList }) => {
    return (
        <div className="flex justify-center items-center min-h-[87%] pt-3">
            <div className='bg-[#0c0c0cc9] w-full h-full absolute top-0 z-[-1]'></div>
            <table className='w-full mx-6'>
                <thead>
                    <tr className='bg-green-700 text-white'>
                        <th className='text-[15px] font-normal border-black border-[0.5px] px-1'>ID</th>
                        <th className='text-[15px] font-normal border-black border-[0.5px] px-1'>Name</th>
                        <th className='text-[15px] font-normal border-black border-[0.5px] px-1'>Unit Price</th>
                        <th className='text-[15px] font-normal border-black border-[0.5px] px-1'>Qty</th>
                        <th className='text-[15px] font-normal border-black border-[0.5px] px-1'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.length === 0 ? (
                        <tr>
                            <td colSpan={5} className='text-white bg-[#0c0c0cc9] border-black border-[0.5px] px-1'>
                                <p className='text-[15px] font-normal text-center py-[20%]'>No items to display</p>
                            </td>
                        </tr>
                    ) : (
                        itemList.map((item) => (
                            <tr key={item.product.id} className='border-black text-white bg-[#0c0c0cc9] border-[0.5px]'>
                                <td className='text-center border-black border-[0.5px] px-1'>{item.product.id}</td>
                                <td className='text-center border-black border-[0.5px] px-1'>{item.product.name}</td>
                                <td className='text-center border-black border-[0.5px] px-1'>{item.product.price + ' ' + item.product.currency}</td>
                                <td className='text-center border-black border-[0.5px] px-1'>{item.itemCount}</td>
                                <td className='text-center border-black border-[0.5px] px-1'>{item.product.price * item.itemCount + ' ' + item.product.currency}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ShoppingCart;
