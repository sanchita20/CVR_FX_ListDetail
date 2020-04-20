import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import Title from '../../component/title/Title'
import ListItem from '../../component/listItem/ListItem'
import DennisRitchie from '../../assets/images/dennis_ritchie.jpg'
import BjarneStroustrup from '../../assets/images/bjarne_stroustrup.jpg'
import JamesGosling from '../../assets/images/james_gosling.jpg'
import LinusTorvalds from '../../assets/images/linus_torvalds.jpeg'
import AndersHejlsberg from '../../assets/images/anders_hejlsberg.jpg'
import TimBernersLee from '../../assets/images/tim_berners_lee.jpg'
import BrianKernighan from '../../assets/images/brian_kernighan.jpg'
import KenThompson from '../../assets/images/ken_thompson.jpg'
import Strings from '../../res/Strings';
import './style.css';
import { URL, LOCAL_STORAGE_DATA, LOCAL_STORAGE_SELECTED_ID } from '../../res/Constants';

const {
    listPageTitle
} = Strings;

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            selectedId: ''
        }
    }

    //To fet API data
    componentDidMount() {
        axios.get(URL)
            .then(res => {
                const { success } = res.data;
                this.setState({ listData: success }, () => {
                    localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(this.state.listData))
                });
            })
    }

    //To set data to local storage and pass data to next screen
    itemClicked = (data) => {
        const { id } = data;
        const { history } = this.props;
        this.setState({ selectedId: id }, () => {
            localStorage.setItem(LOCAL_STORAGE_SELECTED_ID, JSON.stringify(this.state.selectedId));
            history.push({
                pathname: '/details',
                state: {
                    data: data
                }
            })
        });
    }

    //To set image of each item
    getImage = (id) => {
        // eslint-disable-next-line default-case
        switch (id) {
            case 1:
                return DennisRitchie;
            case 2:
                return BjarneStroustrup;
            case 3:
                return JamesGosling;
            case 4:
                return LinusTorvalds;
            case 5:
                return AndersHejlsberg;
            case 6:
                return TimBernersLee;
            case 7:
                return BrianKernighan;
            case 8:
                return KenThompson;
            default:
                return undefined;
        }
    }

    render() {
        const { listData } = this.state;

        return (
            <div>
                <div className='tiitleDiv'>
                    <Title title={listPageTitle} />
                </div>
                <div className='listItemDiv'>
                    {
                        listData.length > 0 ? listData.map((item, index) => {
                            const { name, id } = item;
                            return (
                                <div onClick={() => this.itemClicked(item)}>
                                    <ListItem name={name} count={id} image={this.getImage(id)} />
                                </div>
                            )
                        })
                            : <CircularProgress disableShrink color="secondary" />
                    }
                </div>
            </div>
        );
    }
}

List.defaultProps = {
    success: []
}

List.propTypes = {
    success: PropTypes.array
}


export default List;