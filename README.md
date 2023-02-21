# aws-console-hopper

AWS Console Hopper is a command-line utility designed to simplify the process of logging into multiple AWS accounts. The tool reads the contents of a directory containing multiple directories, each containing a credentials.csv file for an AWS account. The user is prompted to select an AWS account, and the tool opens the console login URL for the selected account. The tool also copies the password to the clipboard, making it easy for the user to paste it into the password field on the login page.

With AWS Console Hopper, managing and logging into multiple AWS accounts has never been easier. Whether you're a developer, system administrator, or DevOps professional, this tool can help streamline your workflow and save you time.

To use this tool, you'll need to create a directory that contains subdirectories for each organization or account you want to manage. Within each of these subdirectories, you can have any number of profiles.

The tool expects you to use the same credentials file that AWS provides when you create a user in IAM. You can use this file by simply removing the username from the left of the filename. For example, if your credentials file is named abdulfatah_credentials.csv, you should rename it to credentials.csv.

To configure the tool, you'll need to create an environment variable called `AWS_CREDENTIALS_HOME`. This variable should point to the directory where you've stored your credentials. 

The directory structure for credentials home is shown in the image below.
