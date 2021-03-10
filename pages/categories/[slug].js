import React from 'react';
import Button from 'components/Button/Button';

export default function CategoryPage(props) {

    const { slug } = props;
    return (
        <>
       <h1>Hello - { slug }</h1>
       <Button>Hello World</Button>
       </>
    );
}

CategoryPage.getInitialProps = async (context) => {
    const categorySlug = context.query.slug;
    return {
        slug: categorySlug
    };
};
