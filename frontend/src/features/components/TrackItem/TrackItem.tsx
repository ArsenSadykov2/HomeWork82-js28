import {Box, Card, CardContent, Chip, Grid, Typography} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ScheduleIcon from '@mui/icons-material/Schedule';

interface Props {
    name: string,
    duration: string,
    number: number,
}

const TrackItem: React.FC<Props> = ({name, duration, number}) => {


    return (
        <Grid size={{xs: 6,sm: 12, md: 6, lg: 4}}>
            <Card
                sx={{
                    p: 2,
                    height: '100%',
                    transition: '0.2s',
                    '&:hover': {
                        boxShadow: 3,
                        transform: 'translateY(-2px)'
                    }
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Chip
                        label={`#${number}`}
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                    />
                </Box>

                <CardContent sx={{ p: 0 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        <MusicNoteIcon color="primary" fontSize="small" />
                        {name}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'text.secondary'
                        }}
                    >
                        <ScheduleIcon fontSize="small" />
                        <Typography variant="body2">
                            {duration}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default TrackItem;