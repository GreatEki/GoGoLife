import React from 'react';
import { BankFilled } from '@ant-design/icons';
import { MunicipalityPosts } from '../../redux/types/postTypes';

const Incio = ({ municipalityPosts }: any) => {
    const getMessagesPosts = (): MunicipalityPosts[] => {
        const msgPost = municipalityPosts.filter((post: MunicipalityPosts) => post.category === 'messages');

        return msgPost;
    };

    return (
        <div className="container">
            <section className="section_title">
                <h4> Mayor Messages </h4>
            </section>

            <section className="section_contents">
                {getMessagesPosts().map((post: MunicipalityPosts, index: number) => (
                    <p key={index}>
                        {' '}
                        <BankFilled /> {post.title}
                    </p>
                ))}
            </section>
        </div>
    );
};

export default Incio;
