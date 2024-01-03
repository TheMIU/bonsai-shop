import React, { Component } from 'react'
import Product from '../common/Product'

interface productState {
  data: any;
}

export default class Products extends Component<{}, productState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      data: [],
    }
  }

  /* react life cycle method ekak */
  componentDidMount(): void {
    this.fetchData().then(r => console.log("fetch data done" + r));
  }

  fetchData = async () => {
    try {
      const response: Response = await fetch('./product-data.json');
      const jsonData = await response.json();
      this.setState({ data: jsonData })

    } catch (error) {
      console.log("Error : " + error);
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center p-5'>
        {
          data.map((product: any) => (
            <Product key={product.id} data={product} />
          ))
        }

      </div>
    )
  }
}
