import mongoose from "mongoose";
import config from "./config";
import Artist from "./models/Artist";
import Album from "./models/Album";
import Track from "./models/Tracks";



const run = async () => {
    await mongoose.connect(config.db);
    const db = mongoose.connection;

    try{
        await db.dropCollection('artists');
        await db.dropCollection('albums');
        await db.dropCollection('tracks');
    } catch (e){
        console.log('Connections were not present');
    }

    const linkinPark = await Artist.create({
        name: 'Linkin Park',
        image: 'fixtures/LinkinPark.jpeg',
        description: '',
    });
    const eminem = await Artist.create({
        name: 'Eminem',
        image: 'fixtures/Eminem.jpeg',
        description: '',
    });
    const lpFirstAlbum = await Album.create({
        artist: linkinPark._id,
        name: 'Hybrid Theory',
        releaseDate: 2000,
        image: 'fixtures/LinkinPark.jpeg'
    });
    const lpSecondAlbum = await Album.create({
        artist: linkinPark._id,
        name: 'Living Things',
        releaseDate: 2012,
        image: 'fixtures/LinkinPark.jpeg'
    });
    const eminemFirstAlbum = await Album.create({
        artist: eminem._id,
        name: 'Recovery',
        releaseDate: 2010,
        image: 'fixtures/Eminem.jpeg'
    });
    const eminemSecondAlbum = await Album.create({
        artist: eminem._id,
        name: 'The Eminem Show',
        releaseDate: 2002,
        image: 'fixtures/Eminem.jpeg'
    });

    const hybridTheory = await Track.create({
        album: lpFirstAlbum._id,
        name: 'Pushing me Away',
        duration: '3:13',
        number: 1
    }, {
        album: lpFirstAlbum._id,
        name: 'A Place for my Head',
        duration: '3:00',
        number: 2
    }, {
        album: lpFirstAlbum._id,
        name: 'With you',
        duration: '3:11',
        number: 3
    }, {
        album: lpFirstAlbum._id,
        name: 'Crawling',
        duration: '3:13',
        number: 4
    }, {
        album: lpFirstAlbum._id,
        name: 'Runaway',
        duration: '3:13',
        number: 5
    });

    const livingThings = await Track.create({
        album: lpSecondAlbum._id,
        name: 'Lost in the Echo',
        duration: '3:13',
        number: 1
    }, {
        album: lpSecondAlbum._id,
        name: 'In My Remains',
        duration: '3:00',
        number: 2
    }, {
        album: lpSecondAlbum._id,
        name: 'Castle of Glass',
        duration: '3:11',
        number: 3
    }, {
        album: lpSecondAlbum._id,
        name: 'Powerless',
        duration: '3:13',
        number: 4
    }, {
        album: lpSecondAlbum._id,
        name: 'Until it Breaks',
        duration: '3:13',
        number: 5
    });

    const recovery = await Track.create({
        album: eminemFirstAlbum._id,
        name: 'Not Afraid',
        duration: '3:13',
        number: 1
    }, {
        album: eminemFirstAlbum._id,
        name: 'Love The Way You Lie',
        duration: '3:00',
        number: 2
    }, {
        album: eminemFirstAlbum._id,
        name: 'So Bad',
        duration: '3:11',
        number: 3
    }, {
        album: eminemFirstAlbum._id,
        name: 'Cinderella Man',
        duration: '3:13',
        number: 4
    }, {
        album: eminemFirstAlbum._id,
        name: 'Almost Famous',
        duration: '3:13',
        number: 5
    });

    const theEminemShow = await Track.create({
        album: eminemSecondAlbum._id,
        name: 'Without Me',
        duration: '3:13',
        number: 1
    }, {
        album: eminemSecondAlbum._id,
        name: 'Superman',
        duration: '3:00',
        number: 2
    }, {
        album: eminemSecondAlbum._id,
        name: 'Till I Collapse',
        duration: '3:11',
        number: 3
    }, {
        album: eminemSecondAlbum._id,
        name: '8 Mile',
        duration: '3:13',
        number: 4
    }, {
        album: eminemSecondAlbum._id,
        name: 'Soldier',
        duration: '3:13',
        number: 5
    })

    await db.close();
};

run().catch(console.error);