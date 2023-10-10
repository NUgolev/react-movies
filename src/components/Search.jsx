import React from 'react'
class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (event) => {
    this.setState(
      () => ({
        type: event.target.dataset.type,
      }),
      () => this.props.searchMovies(this.state.search, this.state.type)
    )
  }

  render() {
    return (
      <div className="input-field col">
        <i
          className="material-icons prefix"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            this.props.searchMovies(this.state.search, this.state.type)
          }}
        >
          search
        </i>

        <input
          id="icon_search"
          type="text"
          className="validate"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <label
          for="icon_search"
          onBlur={() => {
            this.props.searchMovies(this.state.search, this.state.type)
          }}
        >
          search
        </label>
        <form action="#">
          <label>
            <input
              className="with-gap"
              name="filter"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="filter"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="filter"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </form>
      </div>
    )
  }
}

export { Search }
