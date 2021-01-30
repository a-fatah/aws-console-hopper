# aws-profiles

A tool which helps in managing multiple aws accounts having multiple credential profiles.
It expects a directory with each organisation/account as a subdirectory. and within those directory there can be any number of profiles.

You need to create an environment variable `AWS_CREDENTIALS_HOME` which points to the directory.
`export AWS_CREDENTIALS_HOME=~/aws`

## Directory structure

|-- Organisation A
   | -- profileA
      | -- credentials.csv
   | -- profileB
      | -- credentials.csv
|-- Organisation B
   | -- profileA
      | -- credentials.csv
   | -- profileB
      | -- credentials.csv
   
