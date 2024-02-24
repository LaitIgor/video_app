import { useEffect, useState } from "react";
import styled from "styled-components"
import Card from "../Card"
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = ({ type }) => {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(false)
  console.log(1111);

  useEffect(() => {
    const fetchVideos = async () => {
      console.log(type, 'typetype');
      try {
        const res = await axios.get(`/api/videos/${type}`);
        console.log(res.data, 'resres');
        setVideos(res.data);
      }catch(err) {
        setError(true)
      }
     
    }
    fetchVideos();
  }, [type])

  console.log(videos, 'videos');

  return (
    <Container>
      {error && <div>There was an error while fetching videos...</div>}
      {videos.map(video => <Card key={video._id} video={video}/>)}
     
    </Container>
  )
}

export default Home