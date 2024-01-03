import React, { Component } from 'react'
import { CartItem } from '../../model/CartItem';

interface ModifyCartProps {
    data: any
}

interface ModifyCartState {
    itemCount: number
}

export default class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {
    public static itemsList: CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    /* load time  */
    componentDidMount(): void {
        const { itemCount } = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id)) {
                ModifyCart.itemsList.push({
                    product: this.props.data.product, itemCount: itemCount
                })
            }
        }

        console.log(ModifyCart.itemsList);
    }

    /* update eka wena hama time ekema */
    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {
        let { itemCount } = this.state;

        let item = ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id);

        // @ts-ignore
        let index = ModifyCart.itemsList.indexOf(item);

        ModifyCart.itemsList.splice(index, 1);
        ModifyCart.itemsList.push({
            product: this.props.data.product, itemCount: itemCount
        });

        console.log(ModifyCart.itemsList);
    }

    render() {
        let { itemCount } = this.state;
        const onDecreaseItemCount = () => {
            itemCount > 1 ?
                this.setState({ itemCount: --itemCount }) :
                alert('cant be less than 1');
        }

        const onIncreaseItemCount = () => {
            this.setState({ itemCount: ++itemCount })
        }

        return (
            <>
                <div className='w-full text-center bg-[#0b8b36] text-white p-1 rounded'>
                    <button className='float-left px-2 bg-slate-900 rounded' onClick={onDecreaseItemCount}>-</button>
                    <small>{itemCount}</small>
                    <button className='float-right px-2 bg-slate-900 rounded' onClick={onIncreaseItemCount}>+</button>
                </div>
            </>
        )
    }


}
