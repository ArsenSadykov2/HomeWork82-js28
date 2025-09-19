import {Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
import NotFoundPic from '../../../assets/images/NotFoundPic.png';
import {apiUrl} from "../../../../globalConstants.ts";

interface Props {
    id: string,
    name: string,
    releaseDate: string,
    image: string | undefined,
}

const AlbumItem: React.FC<Props> = ({id, name, releaseDate, image}) => {
    let cartImage = NotFoundPic;

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
                <CardContent>
                    <strong>
                       {releaseDate} Year
                    </strong>
                </CardContent>
                <CardActions>
                    <IconButton component={Link} to={'/tracks/' + id}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default AlbumItem;