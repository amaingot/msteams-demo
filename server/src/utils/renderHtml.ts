import fs from "fs";
import path from "path";
import { RequestHandler } from "express";
import Mustache from "mustache";

const renderHtml: RequestHandler = (_req, res) => {
  const assetPath = path.join(__dirname, "../../../web/build");

  const rawHtml = fs.readFileSync(`${assetPath}/index.html`, "utf8");

  // Config values for client
  const SAMPLE_VAR = "SAMPLE_VALUE";

  const html = Mustache.render(rawHtml, {
    SAMPLE_VAR,
  });

  res.send(html);
};

export default renderHtml;
