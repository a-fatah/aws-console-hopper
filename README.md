# aws-profiles

A tool which helps in managing multiple aws accounts having multiple credential profiles.
It expects a directory with each organisation/account as a subdirectory. and within those directory there can be any number of profiles.
Credentials file is the same which AWS gives you when you create a user in IAM. Just strip off the username from the left of the filename.

`abdulfatah_credentials.csv` => `credentials.csv`

You need to create an environment variable `AWS_CREDENTIALS_HOME` which points to the directory.
`export AWS_CREDENTIALS_HOME=~/aws`

## Directory structure

![directory](./screenshot.png)
