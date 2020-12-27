import React from 'react';
import { BankFilled } from '@ant-design/icons';
import { MunicipalityPosts } from '../../redux/types/postTypes';

const ScheduleAndServices = ({ municipalityPosts }: any) => {
    const getSchedulesAndServicesPosts = (): MunicipalityPosts[] => {
        const scehdleAndServicePosts = municipalityPosts.filter((post: MunicipalityPosts) => post.category === 'schedules' || post.category === 'services');

        return scehdleAndServicePosts;
    };
    return (
        <div className="container">
            <section className="section_title">
                <h4> Schedule and Services </h4>
            </section>

            <section className="section_contents">
                {getSchedulesAndServicesPosts().map((post: MunicipalityPosts, index: number) => (
                    <p key={index}>
                        {' '}
                        <BankFilled /> {post.title}
                    </p>
                ))}
            </section>
        </div>
    );
};

export default ScheduleAndServices;
