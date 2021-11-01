import React from 'react';

const Home = (props: { name: string }) => {
    return (
        <div>
            {props.name ? 'Hejka ' + props.name : 'Nie jesteś zalogowany'}
        </div>
    );
};

export default Home;
