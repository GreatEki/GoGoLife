import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Messages from './Messages';
import News from './News';
import ScheduleAndServices from './ScheduleAndServices';
import TaxesAndFees from './TaxesAndFees';
import { getMunicipalityPosts } from '../../redux/actions/postActions';
import { RootStore } from '../../redux/Store';
const Municipality = () => {
    const dispatch = useDispatch();

    const { municipalityPosts } = useSelector((state: RootStore) => state.posts);

    useEffect(() => {
        (async () => {
            dispatch(getMunicipalityPosts());
        })();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Messages municipalityPosts={municipalityPosts} />
            <News municipalityPosts={municipalityPosts} />
            <ScheduleAndServices municipalityPosts={municipalityPosts} />
            <TaxesAndFees municipalityPosts={municipalityPosts} />
        </div>
    );
};

export default Municipality;
