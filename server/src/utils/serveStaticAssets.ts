import path from "path";
import express from "express";

const serveStaticAssets = () => {
  const assetPath = path.join(__dirname, "../../../web/build");

  return express.static(assetPath);
};

export default serveStaticAssets;
