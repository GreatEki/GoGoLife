import React from 'react';
import { BankFilled } from '@ant-design/icons';
import { MunicipalityPosts } from '../../redux/types/postTypes';

const TaxesAndFees = ({ municipalityPosts }: any) => {
    const getTaxesAndFeesPosts = (): MunicipalityPosts[] => {
        const taxesandfeesPosts = municipalityPosts.filter((post: MunicipalityPosts) => post.category === 'taxes');

        return taxesandfeesPosts;
    };
    return (
        <div className="container">
            <section className="section_title">
                <h4> Taxes and Fees </h4>
            </section>

            <section className="section_contents">
                {getTaxesAndFeesPosts().map((post: MunicipalityPosts, index: number) => (
                    <p key={index}>
                        {' '}
                        <BankFilled /> {post.title}
                    </p>
                ))}
            </section>
        </div>
    );
};

export default TaxesAndFees;
