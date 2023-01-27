import React from 'react';

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about this project</h1>
      <h1 style={{ fontSize: '1.5rem', letterSpacing: '2px' }}>
        <strong>
          Hello everyone! This project has been build over React framework and
          in this project I tried to show my abilities in React hooks such as
          'useState', 'useEffect' and 'useContext'. Also, in this project I used
          an API called TheCocktailDB. You can find more info in their website:
          <a
            target={'_blank'}
            href="https://www.thecocktaildb.com/"
            className="btn"
          >
            cocktail API
          </a>{' '}
          . I also used a library named React router version 6 to build this
          page. For more info you can reach me in my{' '}
          <a
            target={'_blank'}
            href="https://www.linkedin.com/in/arian-sergi-1444ba14b/"
            className="btn btn-primary"
          >
            LinkedIn
          </a>{' '}
        </strong>
      </h1>
    </section>
  );
};

export default About;
