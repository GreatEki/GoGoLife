import React from 'react';
import { BankFilled } from '@ant-design/icons';
import { MunicipalityPosts } from '../../redux/types/postTypes';
const News = ({ municipalityPosts }: any) => {
    const getNewsPosts = (): MunicipalityPosts[] => {
        const newsPosts = municipalityPosts.filter((post: MunicipalityPosts) => post.category === 'news');

        return newsPosts;
    };
    return (
        <div className="container">
            <section className="section_title">
                <h4> News </h4>
            </section>

            <section className="section_contents">
                {getNewsPosts().map((post: MunicipalityPosts, index: number) => (
                    <p key={index}>
                        {' '}
                        <BankFilled /> {post.title}
                    </p>
                ))}
            </section>
        </div>
    );
};

export default News;
