import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box,  Typography } from "@mui/material";
import { Videos } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
    .catch((err) => {
      console.log(err);
    })
  }, [searchTerm]);

  return (
    <Box p={2}>
    <Typography variant="h4"
    fontWeight="bold" mb={2} sx={{
      color: "white"
    }}>
      Search Result for: <span style={{color: "#F31503"}}>
        {searchTerm}
      </span> videos
    </Typography>

    <Videos videos={videos}/>
  </Box>
  );
};

export default SearchFeed;
