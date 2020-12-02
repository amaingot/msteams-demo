import { RequestHandler } from "express";

const serveTeamsManifest: RequestHandler = (_req, res) => {
  const manifest = {
    $schema:
      "https://developer.microsoft.com/en-us/json-schemas/teams/v1.3/MicrosoftTeams.schema.json",
    manifestVersion: "1.7",
    id: "0b98d84e-870b-5180-ad75-fd1e66b3fd28",
    version: "1.0.0",
    packageName: "com.hmm.msteams-demo",
    developer: {
      name: "Hmm.dev",
      websiteUrl: "https://teams.hmm.dev",
      privacyUrl: "https://teams.hmm.dev",
      termsOfUseUrl: "https://teams.hmm.dev",
    },
    description: {
      full: "Hmm Dev is Alex Maingot! I hope this works",
      short: "Hmm Dev is Alex Maingot! I hope this works",
    },
    icons: {
      color: "color.png",
      outline: "outline.png",
    },
    connectors: [
      {
        connectorId: "0b98d84e-870b-5180-ad75-fd1e66b3fd28",
        scopes: ["team"],
        configurationUrl:
          "https://teams.hmm.dev/microsoft-teams/connector",
      },
    ],
    name: {
      full: "Hmm Teams",
      short: "Hmm Teams",
    },
    accentColor: "#FFFFFF",
    validDomains: ["teams.hmm.dev"],
  };

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(manifest));
};

export default serveTeamsManifest;
