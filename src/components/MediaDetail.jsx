import React from 'react'
import { 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdb  from '../apis/tmdb'

const MediaDetail = () => {
    const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

    let params = useParams();
    let URLDetail = `movie/${params?.mediaId}`

    const [mediaDetail, setMediaDetail] = useState(URLDetail)

    useEffect(() => {
        const getMediaDetail = async () => {
            try {
                const query = await tmdb.get(URLDetail)
                setMediaDetail(query.data)
            } catch (error) {
                console.log(error);
            }
        }
        getMediaDetail()
    }, [URLDetail])

    return (
        <div>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                mt:'1em'
            }}></Box>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center'
            }}>
                <Card 
                    id={mediaDetail.id}
                    sx={{
                        maxWidth: 250,
                    }}
                >
                    <CardActionArea>
                        <CardMedia 
                            component='img'
                            width='250'
                            image={`${BASE_IMAGE_URL}${mediaDetail.poster_path}`}
                            alt={`${mediaDetail.title}`}
                        />
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        textAlign: 'left',
                        margin:'1em'
                    }}
                >
                    <CardContent>
                        <Typography variant='h4'>
                            {mediaDetail.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {new Date(mediaDetail.release_date).getFullYear()}
                        </Typography>
                        <Typography>
                            {mediaDetail.runtime} minutes
                        </Typography>
                        <Typography>
                            {mediaDetail.overview}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default MediaDetail;