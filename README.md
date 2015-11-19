## North by Northwestern's 2015 Fall Magazine

This is the repository for North by Northwestern's 2015 fall magazine. This repo, unfortunotely, does not include the full git history for the project, but instead the final versions of each story. 

#### Deploying
To deploy your project to Amazon S3, you'll need to add a profile to your ~/.aws/config. It should look something like this:

```
[profile nbn]
aws_access_key_id=YOUR_UNIQUE_ID
aws_secret_access_key=YOUR_SECRET_ACCESS_KEY
```

**Note**: This assumes you have already installed the `awscli` tools. If you do not have an access_key_id or a secret_access_key, contact Alex Duner for more information.

Once you have that set up, you can run the following command to sync with s3:

``sh
sh ./deploy_to_s3.sh
``
