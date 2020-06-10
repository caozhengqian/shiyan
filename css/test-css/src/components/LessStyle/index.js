import React from 'react';
import styles from "./index.less";
import classnames from 'classnames';
import One from "./One";
import Two from "./Two";

export default class LessStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        // let css = classnames('foo')

        return (
            <div className={styles.lessStyle}>
                <div>lessYANGSHI</div>
                <One/>
                <Two/>
            </div>
        );
    }
}