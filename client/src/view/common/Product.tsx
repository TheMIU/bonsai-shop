import React, { Component } from 'react'
import ModifyCart from '../common/ModifyCart';

interface ProductProps {
    data: any;
}

interface ProductState {
    isActive: boolean
}

export default class product extends Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props);

        this.state = {
            isActive: false
        }
    }

    render() {
        const { data } = this.props;
        const image = require('../../images/products/' + data.image)
        return (
            <div className='bg-white rounded-lg shadow-lg h-[40vh]'>
                {/* image */}
                <div className='h-[75%] flex items-center justify-center'>
                    <img src={image} alt="carrot" className='h-[80%] w-auto' />
                </div>

                {/* details */}
                <div className='h-[10%] flex justify-center items-center  bg-slate-800 p-0'>
                    <h3 className='font-bold text-sm text-white p-0'>{data.name}</h3>
                </div>

                <div className='h-[15%] flex justify-center items-center rounded-b-lg bg-slate-700 p-0'>
                    <div className='w-[40%] flex justify-center'>
                        <h1 className='text-center font-black text-yellow-100 text-xl'>{data.currency} {data.price}</h1>
                    </div>
                    <div className='w-[40%] flex justify-center'>
                        {
                            this.state.isActive ?
                                <ModifyCart data={{ product: data, isAdded: this.state.isActive }} />
                                :
                                <button className="button-2 bg-green-600 hover:bg-green-500 text-white" onClick={this.addToCartOnClick}>
                                    Add <i className="fas fa-shopping-cart"></i></button>
                        }
                    </div>
                </div>
            </div>
        )
    }

    private addToCartOnClick = () => {
        this.setState({
            isActive: !this.state.isActive
        }, () => {
            console.log(this.state.isActive);
        })
    }
}

