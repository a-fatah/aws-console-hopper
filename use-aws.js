#!/usr/bin/env node --experimental-modules

import { requireEnv } from "require-env-variable";
import fs from "fs";
import os from "os";
import path from "path";
import dotenv from "dotenv";
import parse from "csv-parse/lib/sync.js";
import copy from "clipboardy";
import open from "open";
import inquirer from "inquirer";

dotenv.config();

const { AWS_CREDENTIALS_HOME } = requireEnv("AWS_CREDENTIALS_HOME");

const homePath = AWS_CREDENTIALS_HOME.replace("~", os.homedir());
try {
  const owners = fs.readdirSync(homePath);

  inquirer
    .prompt({
      type: "list",
      name: "account",
      message: "Select AWS Account",
      choices: owners,
    })
    .then(({ account }) => {
      const profilesDir = path.join(homePath, account, "profiles");
      const profiles = fs.readdirSync(profilesDir);
      inquirer
        .prompt({
          type: "list",
          name: "profile",
          message: "Select a profile",
          choices: profiles,
        })
        .then(({ profile }) => {
          const credentialsFile = path.join(
            homePath,
            account,
            "profiles",
            profile,
            "credentials.csv"
          );
          try {
            const [credentials] = parse(fs.readFileSync(credentialsFile), {
              columns: true,
            });
            console.log("Opening Console Link URL in your default browser...");
            console.log(`Username: ${credentials["User name"]}`);
            copy.writeSync(credentials["Password"]);
            console.log("Password has been copied to clipboard");
            open(credentials["Console login link"]);
          } catch (err) {
            console.error(
              `Could not credentials file for ${profile}. Reason: ${err}`
            );
          }
        });
    });
} catch (err) {
  console.error("Error while reading AWS credentials home");
}
