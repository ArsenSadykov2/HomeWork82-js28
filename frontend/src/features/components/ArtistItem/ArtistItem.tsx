import {Card, CardActions, CardHeader, CardMedia, Grid, IconButton} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
import NotFoundPic from '../../../assets/images/NotFoundPic.png';
import {apiUrl} from "../../../../globalConstants.ts";

interface Props {
    id: string,
    name: string,
    image: string | undefined,
}

const ArtistItem: React.FC<Props> = ({id, name,image}) => {
    let cartImage = NotFoundPic;
    console.log(id)
    if(image) {
        cartImage = apiUrl + '/' + image;
    }

    return (
        <Grid size={{xs: 6,sm: 12, md: 6, lg: 4}}>
            <Card>
                <CardMedia
                    component="img"
                    height="200"
                    image={cartImage}
                    alt={name}
                />
                <CardHeader title={name}/>
                <CardActions>
                    <IconButton component={Link} to={'/albums/' + id}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ArtistItem;