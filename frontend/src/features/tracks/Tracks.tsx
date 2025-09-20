import {Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useEffect} from "react";
import Spinner from "../../components/Spinner/Spinner.tsx";
import {useParams} from "react-router-dom";
import {selectTracks, selectTracksLoading} from "./tracksSlice.ts";
import {fetchTrackById} from "./tracksThunks.ts";
import TrackItem from "../components/TrackItem/TrackItem.tsx";

const Tracks = () => {
    const dispatch = useAppDispatch();
    const tracks = useAppSelector(selectTracks);
    const tracksFetchLoading = useAppSelector(selectTracksLoading);

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            dispatch(fetchTrackById(id))
        }
    }, [id, dispatch])

    return (
        <Grid container direction="column" spacing={2}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid>
                    <Grid>
                        {tracks.length > 0 && tracks[0].album && (
                            <Typography variant='h4'>{tracks[0].album.name}</Typography>
                        )}
                    </Grid>
                </Grid>
            </Grid>


            {tracksFetchLoading ? <Spinner/> :
                <>
                    {tracks.length === 0 ? <Typography variant='h4'>No Tracks yet</Typography> :
                        <Grid container direction="row" spacing={1}>
                            {tracks.map(track => (
                                <TrackItem
                                    key={track._id}
                                    name={track.name}
                                    duration={track.duration}
                                    number={track.number}
                                />
                            ))}
                        </Grid>
                    }
                </>
            }
        </Grid>
    );
};

export default Tracks;