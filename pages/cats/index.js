import React from 'react';
import axios from 'axios';
import Default from '../../layouts/default';

const meta = { title: 'Cats title', description: 'Cats description' };

class CatsPage extends React.Component
{
  constructor(props)
  {
    super(props);
    
    this.state =
    {
      loading: true,
      cats: []
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
      'https://api.thecatapi.com/v1/images/search?size=thumb&limit=10'
    );

    this.setState({
      cats: data,
      loading: false
    });
  }

  renderCatList()
  {
    return (
      <ul>
        { 
          this.state.cats.map((cat, key) =>
            <li key={key}>
              <img src={cat.url} alt='Cat' />
            </li>
          )
        }
      </ul>
    );
  }

  render()
  {
    return (
      <Default meta={meta}>
        <div>
          <h1>Lots of cats!</h1>
          { this.renderCatList() }
        </div>
      </Default>
    );
  }
}

export default CatsPage;