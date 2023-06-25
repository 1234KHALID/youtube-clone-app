import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import React, { createContext, useState } from "react";
export const ThemeColor = createContext();
const App = () => {
  const [colors, setColors] = useState(true);
  return (
    <ThemeColor.Provider value={colors}>
      <Box sx={{ backgroundColor: colors ? '#000' : "#fff" }}>
        <Navbar setColor={setColors} />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </ThemeColor.Provider>
  );

}
export default App;
