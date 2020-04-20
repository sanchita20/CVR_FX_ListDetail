import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import './style.css';
import Strings from '../../res/Strings';
import { COLON_SYMBOL } from '../../res/Constants';


const {
    nameLabel,
    idLabel,
    achievementsLabel,
    languageLabel,
    descriptionLabel
} = Strings;

//To view details of item
const contentView = (title, value) => {
    return (
        <Grid container className='gridContainer'>
            <Grid item xs={12} sm={10} md={2} lg={2} className='labelGrid'>
                <p className='h3'>{title}</p>
                <p className='paraStyle'>{COLON_SYMBOL}</p>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
                <h4 className='paraStyle'>{value}</h4>
            </Grid>

        </Grid>
    )
}

const ItemDetail = ({ id, name, achievements, language, description }) => {
    return (
        <div className="container">
            <Paper className="paper">
                {contentView(nameLabel, name)}
                {contentView(idLabel, id)}
                {contentView(languageLabel, language)}
                {contentView(achievementsLabel, achievements)}
                {contentView(descriptionLabel, description)}
            </Paper>
        </div>
    );
}

ItemDetail.defaultProps = {
    id: undefined,
    name: undefined,
    achievements: undefined,
    language: undefined,
    description: undefined
}

ItemDetail.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    achievements: PropTypes.string,
    language: PropTypes.string,
    description: PropTypes.string
}

export default ItemDetail;