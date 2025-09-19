import {Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useEffect} from "react";
import Spinner from "../../components/Spinner/Spinner.tsx";
import {selectArtists, selectArtistsLoading} from "./artistsSlice.ts";
import {fetchAllArtists} from "./artistsThunks.ts";
import ArtistItem from "../components/ArtistItem/ArtistItem.tsx";

const Artists = () => {
    const dispatch = useAppDispatch();
    const artists = useAppSelector(selectArtists);
    const artistsFetchLoading = useAppSelector(selectArtistsLoading);
    console.log(artists)
    useEffect(() => {
        dispatch(fetchAllArtists());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid>
                    <Typography variant="h4">
                        Artists
                    </Typography>
                </Grid>
            </Grid>


            {artistsFetchLoading ? <Spinner/> :
                <>
                    {artists.length === 0 ? <Typography variant='h4'>No artists yet</Typography> :
                        <Grid container direction="row" spacing={1}>
                            {artists.map(artist => (
                                <ArtistItem
                                    key={artist._id}
                                    name={artist.name}
                                    id={artist._id}
                                    image={artist.image || undefined}
                                />
                            ))}
                        </Grid>
                    }
                </>
            }
        </Grid>
    );
};

export default Artists;