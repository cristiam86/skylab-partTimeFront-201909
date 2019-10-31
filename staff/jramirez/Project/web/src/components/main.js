import React from 'react';


class Main extends React.Component {
    render() {
      return (
      <main class="flex">
        <section class="hero">
            <h1>Titulo del pa app</h1>
            <aside class="search-box">
              Searchbox
            </aside>
        </section>
        <section class="flex">
          <div class="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div class="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div class="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div class="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div class="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
          <div class="category-item">
            <a href="#">
              Category Item
            </a>
          </div>
        </section>
      </main>
    );
    }
  }

export default Main;
