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

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/api/videos/${type}`);
        setVideos(res.data);
      }catch(err) {
        setError(true)
      }
     
    }
    fetchVideos();
  }, [type])

  return (
    <Container>
      {error && <div>There was an error while fetching videos...</div>}
      {videos.map(video => <Card key={video._id} video={video}/>)}
     
    </Container>
  )
}

export default Home