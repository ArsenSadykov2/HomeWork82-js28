import {Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useEffect} from "react";
import { selectAlbums, selectAlbumsLoading } from "./albumsSlice.ts";
import {fetchAlbumById} from "./albumsThunks.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
import AlbumItem from "../components/AlbumItem/AlbumItem.tsx";
import {useParams} from "react-router-dom";

const Albums = () => {
    const dispatch = useAppDispatch();
    const albums = useAppSelector(selectAlbums);
    const albumsFetchLoading = useAppSelector(selectAlbumsLoading);

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            dispatch(fetchAlbumById(id))
        }
    }, [id, dispatch])

    return (
        <Grid container direction="column" spacing={2}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid>
                    <Grid>
                        {albums.length > 0 && albums[0].artist && (
                            <Typography variant='h4'>{albums[0].artist.name}</Typography>
                        )}
                    </Grid>
                </Grid>
            </Grid>


            {albumsFetchLoading ? <Spinner/> :
                <>
                    {albums.length === 0 ? <Typography variant='h4'>No Albums yet</Typography> :
                        <Grid container direction="row" spacing={1}>
                            {albums.map(album => (
                                <AlbumItem
                                    key={album._id}
                                    name={album.name}
                                    id={album._id}
                                    releaseDate={album.releaseDate}
                                    image={album.image || undefined}
                                />
                            ))}
                        </Grid>
                    }
                </>
            }
        </Grid>
    );
};

export default Albums;