import React from 'react';
import axios from 'axios';
import Default from '../../layouts/default';

const meta = 
{ 
  title: 'Cats title', 
  description: 'Cats description' 
};

class CatsBreedPage extends React.Component
{
  static getInitialProps({ query: { breed } })
  {
    return { breed };
  }

  constructor(props)
  {
    super(props);
    
    this.state =
    {
      loading: true,
      meta: {},
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

    const reg = new RegExp(this.props.breed, 'g');

    const { data } = await axios.get(
      'https://api.thecatapi.com/v1/images/search?size=thumb&has_breeds=true&limit=50'
    );

    const filteredCats = data.filter(cat =>
      cat.breeds[0]
        .name
        .toLowerCase()
        .match(reg)
    );

    this.setState({
      cats: filteredCats,
      breed: this.props.breed,
      meta: { 
        title: `Only ${this.props.breed} here!`, 
        description: 'Cute kitties!'
      },
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
      <Default meta={this.state.meta}>
        <div>
          <h1>Cat breed: {this.props.breed}</h1>
          { this.renderCatList() }
        </div>
      </Default>
    );
  }
}

export default CatsBreedPage;