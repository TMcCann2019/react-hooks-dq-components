import React from "react";
import TopMenu from "./TopMenu.js"
import GenrePicker from "./GenrePicker.js"
import AlbumList from "./AlbumList.js";

function MainContent() {
  return (
    <main>
      <TopMenu />
      <GenrePicker />
      <AlbumList />
    </main>
  )
}

export default MainContent;
