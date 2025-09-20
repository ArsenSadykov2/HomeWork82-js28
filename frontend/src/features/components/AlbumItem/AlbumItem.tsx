import {Box,Card,CardActions,CardContent,CardHeader,CardMedia,Grid,IconButton,Typography,useTheme} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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
    const theme = useTheme();
    let cartImage = NotFoundPic;

    if(image) {
        cartImage = apiUrl + '/' + image;
    }


    return (
        <Grid size={{xs: 6,sm: 12, md: 6, lg: 4}}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[8],
                        '& .card-media': {
                            transform: 'scale(1.05)'
                        }
                    }
                }}
            >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                        className="card-media"
                        component="img"
                        height="220"
                        image={cartImage}
                        alt={name}
                        sx={{
                            transition: 'transform 0.3s ease-in-out',
                            objectFit: 'cover'
                        }}
                    />
                </Box>

                <CardHeader
                    title={
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                fontWeight: 600,
                                lineHeight: 1.5,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                minHeight: '60px'
                            }}
                        >
                            {name}
                        </Typography>
                    }
                    sx={{ pb: 0 }}
                />

                <CardContent sx={{ flexGrow: 1, py: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'text.secondary'
                        }}
                    >
                        <CalendarTodayIcon fontSize="small" />
                        <Typography variant="body2">
                            Released in {releaseDate}
                        </Typography>
                    </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                    <IconButton
                        component={Link}
                        to={'/tracks/' + id}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                                transform: 'scale(1.2)'
                            },
                            transition: 'all 0.5s ease-in-out'
                        }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default AlbumItem;