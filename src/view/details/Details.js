import React from "react";
import Title from '../../component/title/Title';
import Strings from '../../res/Strings';
import PropTypes from 'prop-types';
import ItemDetail from "../../component/ItemDetail/ItemDetail";
import './style.css';
import { LOCAL_STORAGE_DATA, LOCAL_STORAGE_SELECTED_ID } from '../../res/Constants';

const {
    detailPageTitle
} = Strings;

class Details extends React.Component {
    constructor(props) {
        super(props);

        const { state } = this.props.location;
        if (!!state) {
            const { id, name, achievement, language, details } = state.data;
            this.id = id;
            this.name = name;
            this.achievement = achievement;
            this.language = language;
            this.details = details;
        } else {
            //get data from localStogare
            this.localId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_ID));
            this.localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA));

            this.localData.forEach(element => {
                const { id, name, achievement, language, details } = element;
                if (id === this.localId) {
                    this.id = id;
                    this.name = name;
                    this.achievement = achievement;
                    this.language = language;
                    this.details = details;
                }
            })
        }
    }
    render() {
        return (
            <div>
                <div className='flexUI'>
                    <Title title={detailPageTitle} />
                </div>
                <div className='flexUI'>
                    <ItemDetail
                        id={this.id}
                        name={this.name}
                        achievements={this.achievement}
                        language={this.language}
                        description={this.details}
                    />
                </div>
            </div >
        );
    }
}

Details.defaultProps = {
    id: undefined,
    name: undefined,
    achievements: undefined,
    language: undefined,
    description: undefined
}

Details.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    achievements: PropTypes.string,
    language: PropTypes.string,
    description: PropTypes.string
}


export default Details;