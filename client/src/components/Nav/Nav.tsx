import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPages } from '../../redux/actions/pagesActions';
import { RootStore } from '../../redux/Store';
import { AllPages } from '../../redux/types/pagesTypes';

const Nav = () => {
    const dispatch = useDispatch();

    const { allPages } = useSelector((state: RootStore) => state.pages);

    useEffect(() => {
        (async () => {
            await dispatch(getAllPages());
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className="footer-nav">
            {allPages ? (
                allPages.map((page: AllPages, index: number) => (
                    <div className="icon-box" key={index}>
                        <i className={page.icon}></i>
                        <Link to={page.url}> {page.title}</Link>
                    </div>
                ))
            ) : (
                <Fragment>
                    <h2>No Data </h2>
                </Fragment>
            )}
        </section>
    );
};

export default Nav;
