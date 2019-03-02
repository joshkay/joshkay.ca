import React from 'react';
import Default from '../layouts/default';
import axios from 'axios';

const meta = { title: 'Index title', description: 'Index description' };

class IndexPage extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      loading: true,
      cat: {}
    };
    
    this.fetchCats = this.fetchCats.bind(this);
  }

  async componentDidMount()
  {
    await this.fetchCats();
  }

  async fetchCats()
  {
    this.setState({ 
      loading: true 
    });

    const { data } = await axios.get(
      'https://api.thecatapi.com/v1/images/search?limit=1'
    );

    this.setState({
      cat: data[0],
      loading: false
    });
  }

  render()
  {
    return (
      <Default meta={meta}>
        <div>
          <h1>Josh is hard at work...</h1>
          
          <h3>Kitty!</h3>
          <img src={this.state.cat.url} alt='Cat' />
        </div>
      </Default>
    )
  }
}

export default IndexPage;