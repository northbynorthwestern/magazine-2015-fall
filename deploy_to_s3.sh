echo "🔄  Syncing magazine with S3..."
aws s3 sync magazine/ s3://apps.northbynorthwestern.com/magazine/2015/fall/ --profile nbn --delete
