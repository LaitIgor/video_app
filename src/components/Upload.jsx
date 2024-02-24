import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from '../firebase';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: ${({theme}) => theme.bgLighter};
  color: ${({theme}) => theme.text};
`

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`

const Input = styled.input`
  border: 1px solid ${({theme}) => theme.soft};
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`

const Description = styled.textarea`
  border: 1px solid ${({theme}) => theme.soft};
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  resize: none;
`

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({theme}) => theme.soft};
  color: ${({theme}) => theme.text};
`

const Label = styled.label`
  font-size: 14px;
`

const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [imgPercentage, setImgPercentage] = useState(0);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState('');

  const navigate = useNavigate();


  const handleTags = (e) => {
    setTags(e.target.value.split(','));
  }

  const handleChange = (e) => {
    setInputs(prevInputs => {
      return {...prevInputs, [e.target.name]: e.target.value}
    })
  }

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        console.log(progress, 'progressprogressprogress');
        urlType === 'imgUrl' 
          ? setImgPercentage(progress) 
          : setVideoPercentage(progress)
          console.log('TEST111');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.warn({...error}, 'error')
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log('File available at', downloadURL);
            setInputs(prevInputs => {
              return {...prevInputs, [urlType]: downloadURL}
            })
        });
      }
    );
  }

  useEffect(() => {
    video && uploadFile(video, 'videoUrl')
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, 'imgUrl')
  }, [img]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/api/videos`, {...inputs, tags});
    setOpen(false);
    res.status === 200 && navigate(`/video/${res.data._id}`)

  }


  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a new video</Title>
        <Label>Video:</Label>
        {videoPercentage > 0 
          ? ('Uploading: ' + Math.round(videoPercentage) + "%") 
          : <Input type='file' accept='video/*' onChange={(e) => setVideo(e.target.files[0])}/>
        }
        <Input type='text' placeholder='Title' name="title" onChange={handleChange} />
        <Description  placeholder='Description' rows='8' name="desc" onChange={handleChange}/>
        <Input type='text' placeholder='Separate the text with commas.' onChange={handleTags}/>
        <Label>Image:</Label>
        {imgPercentage > 0 
          ?  ('Uploading: ' + imgPercentage + "%") 
          : <Input type='file' accept='image/*' onChange={(e) => setImg(e.target.files[0])}/>
        }
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  )
}

export default Upload