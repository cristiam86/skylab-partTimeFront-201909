import React from 'react';


class Main extends React.Component {
    render() {
      return (
        <div>
        <section className="hero">
            <h1>Titulo del pa app</h1>
            <aside className="search-box">
              Searchbox
            </aside>
        </section>
        <section className="flex">
          <div className="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div className="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div className="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div className="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div className="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div className="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
        </section>
        </div>
    );
    }
  }

export default Main;
