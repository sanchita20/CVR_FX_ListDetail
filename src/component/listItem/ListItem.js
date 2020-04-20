import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Strings from '../../res/Strings';
import { IMG, H5, SMALL, PRIMARY, PROFILE_HEIGHT, PROFILE_WIDTH } from '../../res/Constants';

const {
    knowMore
} = Strings;

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minWidth: 300,
        margin: theme.spacing(1),
    },
}));

const ListItem = ({ name, image }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component={IMG}
                    alt={name}
                    height={PROFILE_HEIGHT}
                    width={PROFILE_WIDTH}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant={H5} component={H5}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size={SMALL} color={PRIMARY}>
                    {knowMore}
                </Button>
            </CardActions>
        </Card>
    );
}

ListItem.defaultProps = {
    name: undefined,
    image: undefined
}

ListItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
}

export default ListItem;