import React, {Component} from 'react';

export default class RandomKitty
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
    return(
      <div>        
        <h3>Kitty!</h3>
        <img className="img-fluid w-100" src={this.state.cat.url} alt='Cat' />
      </div>
    );
  }
};