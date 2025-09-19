import {Card, CardContent, CardHeader, Grid} from "@mui/material";

interface Props {
    name: string,
    duration: string,
    number: number,
}

const TrackItem: React.FC<Props> = ({name, duration, number}) => {

    return (
        <Grid size={{xs: 6,sm: 12, md: 6, lg: 4}}>
            <Card>
                <CardContent>
                    <strong>
                        {number}
                    </strong>
                </CardContent>
                <CardHeader title={name}/>
                <CardContent>
                    <strong>
                        {duration} Min
                    </strong>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default TrackItem;