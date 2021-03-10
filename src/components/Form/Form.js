import React from 'react';
import classNames from 'classnames';
import styles from './index.scss';

const Form = ({ children }) => {
    return (
        <div className={classNames(styles.form, 'py-16')}>
            <div className={styles.formRow}>
                { children }
            </div>
        </div>
    );
};


export default Form;
